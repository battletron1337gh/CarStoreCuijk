// VWE XML/SOAP API Client
// Client for fetching vehicle inventory from VWE XML/SOAP endpoints

import { VWE_XML_CONFIG, VWEXMLVehicle, isVWEXMLConfigured, getVWEXMLConfigHelp } from './vwe-xml-config';

export class VWEXMLClient {
  private endpoint: string;
  private username: string;
  private password: string;
  private clientId: string;

  constructor() {
    this.endpoint = VWE_XML_CONFIG.API_ENDPOINT;
    this.username = VWE_XML_CONFIG.USERNAME;
    this.password = VWE_XML_CONFIG.PASSWORD;
    this.clientId = VWE_XML_CONFIG.CLIENT_ID;

    if (!isVWEXMLConfigured()) {
      console.warn(getVWEXMLConfigHelp());
    }
  }

  /**
   * Test the API connection
   */
  async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      if (!isVWEXMLConfigured()) {
        return { success: false, message: getVWEXMLConfigHelp() };
      }

      // Try to fetch a minimal response
      const vehicles = await this.fetchInventory({ limit: 1 });
      
      return { 
        success: true, 
        message: `✅ VWE XML/SOAP connection successful! Found ${vehicles.length} vehicle(s) in inventory.` 
      };
    } catch (error) {
      return { 
        success: false, 
        message: `❌ VWE XML/SOAP error: ${error instanceof Error ? error.message : 'Unknown error'}` 
      };
    }
  }

  /**
   * Fetch vehicle inventory from VWE XML/SOAP endpoint
   */
  async fetchInventory(options?: {
    status?: string;
    limit?: number;
    offset?: number;
    since?: string;
  }): Promise<VWEXMLVehicle[]> {
    if (!isVWEXMLConfigured()) {
      throw new Error('VWE XML/SOAP not configured');
    }

    // Determine if we're using SOAP or plain XML
    const isSOAP = this.endpoint.toLowerCase().includes('soap') || 
                   this.endpoint.toLowerCase().includes('.asmx');

    if (isSOAP) {
      return this.fetchSOAPInventory(options);
    } else {
      return this.fetchXMLInventory(options);
    }
  }

  /**
   * Fetch inventory using SOAP protocol
   */
  private async fetchSOAPInventory(options?: {
    status?: string;
    limit?: number;
    offset?: number;
    since?: string;
  }): Promise<VWEXMLVehicle[]> {
    // Build SOAP envelope
    const soapEnvelope = this.buildSOAPEnvelope('GetInventory', {
      Username: this.username,
      Password: this.password,
      ClientId: this.clientId,
      Status: options?.status || 'all',
      Limit: options?.limit || 1000,
      Offset: options?.offset || 0,
      Since: options?.since || '',
    });

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'GetInventory',
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`SOAP request failed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    return this.parseSOAPResponse(xmlText);
  }

  /**
   * Fetch inventory using plain XML/HTTP
   */
  private async fetchXMLInventory(options?: {
    status?: string;
    limit?: number;
    offset?: number;
    since?: string;
  }): Promise<VWEXMLVehicle[]> {
    // Build query parameters
    const params = new URLSearchParams();
    params.append('username', this.username);
    params.append('password', this.password);
    if (this.clientId) params.append('clientId', this.clientId);
    if (options?.status) params.append('status', options.status);
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.offset) params.append('offset', options.offset.toString());
    if (options?.since) params.append('since', options.since);

    const url = `${this.endpoint}?${params.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`XML request failed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    return this.parseXMLResponse(xmlText);
  }

  /**
   * Build SOAP envelope
   */
  private buildSOAPEnvelope(method: string, params: Record<string, unknown>): string {
    const paramXml = Object.entries(params)
      .map(([key, value]) => `<${key}>${value}</${key}>`)
      .join('\n      ');

    return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <${method} xmlns="http://vwe.nl/webservices/">
      ${paramXml}
    </${method}>
  </soap:Body>
</soap:Envelope>`;
  }

  /**
   * Parse SOAP response
   */
  private parseSOAPResponse(xmlText: string): VWEXMLVehicle[] {
    // Extract the response body from SOAP envelope
    const bodyMatch = xmlText.match(/<soap:Body>([\s\S]*?)<\/soap:Body>/i) ||
                      xmlText.match(/<Body>([\s\S]*?)<\/Body>/i);
    
    if (!bodyMatch) {
      throw new Error('Invalid SOAP response: no Body found');
    }

    return this.parseXMLResponse(bodyMatch[1]);
  }

  /**
   * Parse XML response into vehicle objects
   */
  private parseXMLResponse(xmlText: string): VWEXMLVehicle[] {
    const vehicles: VWEXMLVehicle[] = [];

    // Try to find vehicle elements (common patterns)
    const vehiclePatterns = [
      /<vehicle[^>]*>([\s\S]*?)<\/vehicle>/gi,
      /<auto[^>]*>([\s\S]*?)<\/auto>/gi,
      /<occasion[^>]*>([\s\S]*?)<\/occasion>/gi,
      /<car[^>]*>([\s\S]*?)<\/car>/gi,
      /<voertuig[^>]*>([\s\S]*?)<\/voertuig>/gi,
    ];

    let vehicleMatches: RegExpMatchArray | null = null;
    for (const pattern of vehiclePatterns) {
      vehicleMatches = xmlText.match(pattern);
      if (vehicleMatches && vehicleMatches.length > 0) {
        break;
      }
    }

    if (!vehicleMatches || vehicleMatches.length === 0) {
      // Try parsing as a flat structure
      return this.parseFlatXMLResponse(xmlText);
    }

    for (const vehicleXml of vehicleMatches) {
      const vehicle = this.parseVehicleElement(vehicleXml);
      if (vehicle) {
        vehicles.push(vehicle);
      }
    }

    return vehicles;
  }

  /**
   * Parse a single vehicle XML element
   */
  private parseVehicleElement(xml: string): VWEXMLVehicle | null {
    try {
      const getText = (tagName: string): string => {
        const patterns = [
          new RegExp(`<${tagName}[^>]*>([^<]*)<\/${tagName}>`, 'i'),
          new RegExp(`<${tagName.toLowerCase()}[^>]*>([^<]*)<\/${tagName.toLowerCase()}>`, 'i'),
          new RegExp(`<${tagName.charAt(0).toUpperCase() + tagName.slice(1)}[^>]*>([^<]*)<\/${tagName.charAt(0).toUpperCase() + tagName.slice(1)}>`, 'i'),
        ];
        
        for (const pattern of patterns) {
          const match = xml.match(pattern);
          if (match) return match[1].trim();
        }
        return '';
      };

      const getNumber = (tagName: string): number => {
        const text = getText(tagName);
        const num = parseFloat(text.replace(/[^\d.-]/g, ''));
        return isNaN(num) ? 0 : num;
      };

      const getArray = (tagName: string): string[] => {
        const content = getText(tagName);
        if (!content) return [];
        return content.split(/[,;|]/).map(s => s.trim()).filter(Boolean);
      };

      const id = getText('id') || getText('vehicleId') || getText('kenteken');
      if (!id) return null;

      // Parse image URLs
      const fotoUrls: string[] = [];
      const imageMatches = xml.match(/<image[^>]*>([^<]*)<\/image>/gi) ||
                          xml.match(/<foto[^>]*>([^<]*)<\/foto>/gi) ||
                          xml.match(/<photo[^>]*>([^<]*)<\/photo>/gi);
      if (imageMatches) {
        for (const img of imageMatches) {
          const url = img.replace(/<[^>]+>/g, '').trim();
          if (url) fotoUrls.push(url);
        }
      }
      
      // Also check for comma-separated images
      const imageList = getText('images') || getText('fotos') || getText('photos');
      if (imageList) {
        fotoUrls.push(...imageList.split(/[,;|]/).map(s => s.trim()).filter(Boolean));
      }

      // Parse options
      const opties: string[] = [];
      const optionMatches = xml.match(/<option[^>]*>([^<]*)<\/option>/gi) ||
                           xml.match(/<optie[^>]*>([^<]*)<\/optie>/gi);
      if (optionMatches) {
        for (const opt of optionMatches) {
          const val = opt.replace(/<[^>]+>/g, '').trim();
          if (val) opties.push(val);
        }
      }
      
      // Also check for comma-separated options
      const optionList = getText('options') || getText('opties') || getText('features');
      if (optionList) {
        opties.push(...optionList.split(/[,;|]/).map(s => s.trim()).filter(Boolean));
      }

      // Map status
      let status: VWEXMLVehicle['status'] = 'beschikbaar';
      const statusText = getText('status').toLowerCase();
      if (statusText.includes('verkocht') || statusText.includes('sold')) {
        status = 'verkocht';
      } else if (statusText.includes('gereserveerd') || statusText.includes('reserved')) {
        status = 'gereserveerd';
      } else if (statusText.includes('verwijderd') || statusText.includes('deleted')) {
        status = 'verwijderd';
      }

      return {
        id,
        kenteken: getText('kenteken') || getText('licensePlate') || getText('kenteken'),
        merk: getText('merk') || getText('make') || getText('brand'),
        model: getText('model') || getText('type'),
        variant: getText('variant') || getText('uitvoering') || undefined,
        bouwjaar: getNumber('bouwjaar') || getNumber('year') || getNumber('bouwjaar'),
        prijs: getNumber('prijs') || getNumber('price') || getNumber('vraagprijs'),
        prijsadvies: getNumber('prijsadvies') || getNumber('adviesprijs') || undefined,
        kilometerstand: getNumber('kilometerstand') || getNumber('mileage') || getNumber('km'),
        brandstof: getText('brandstof') || getText('fuel') || getText('brandstof'),
        transmissie: getText('transmissie') || getText('transmission') || getText('versnellingsbak'),
        carrosserie: getText('carrosserie') || getText('body') || getText('carrosserievorm') || 'Onbekend',
        fotoUrls,
        beschrijving: getText('beschrijving') || getText('description') || getText('omschrijving') || undefined,
        opties,
        apk: getText('apk') || getText('mot') || undefined,
        status,
        vermogen: getText('vermogen') || getText('power') || getText('pk') || undefined,
        verbruik: getText('verbruik') || getText('consumption') || undefined,
        co2: getText('co2') || getText('co2uitstoot') || undefined,
        createdAt: getText('createdAt') || getText('created') || new Date().toISOString(),
        updatedAt: getText('updatedAt') || getText('updated') || new Date().toISOString(),
      };
    } catch (error) {
      console.error('Error parsing vehicle element:', error);
      return null;
    }
  }

  /**
   * Parse flat XML structure (when vehicles are not wrapped in individual elements)
   */
  private parseFlatXMLResponse(xmlText: string): VWEXMLVehicle[] {
    // This handles cases where the XML has a flat structure
    // For now, return empty array - can be extended based on actual VWE format
    console.warn('Flat XML structure detected but not fully supported');
    return [];
  }
}

// Singleton instance
export const vweXMLClient = new VWEXMLClient();
export default vweXMLClient;
