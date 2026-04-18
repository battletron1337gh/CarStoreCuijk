// VWE XML/SOAP API Configuration
// Configuration for VWE inventory synchronization

export const VWE_XML_CONFIG = {
  // API Endpoint (XML or SOAP)
  API_ENDPOINT: process.env.VWE_API_ENDPOINT || 'https://api.vwe.nl/soap',
  
  // Authentication
  USERNAME: process.env.VWE_USERNAME || '',
  PASSWORD: process.env.VWE_PASSWORD || '',
  CLIENT_ID: process.env.VWE_CLIENT_ID || '',
  API_KEY: process.env.VWE_API_KEY || '',
  
  // Sync settings
  SYNC_INTERVAL_MINUTES: parseInt(process.env.SYNC_INTERVAL_MINUTES || '15', 10),
  
  // Image storage
  IMAGE_STORAGE_PATH: process.env.IMAGE_STORAGE_PATH || './public/cars',
  
  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};

// Check if XML/SOAP configuration is complete
export function isVWEXMLConfigured(): boolean {
  return !!(
    VWE_XML_CONFIG.API_ENDPOINT &&
    VWE_XML_CONFIG.USERNAME &&
    VWE_XML_CONFIG.PASSWORD
  );
}

// Get configuration help message
export function getVWEXMLConfigHelp(): string {
  const missing = [];
  if (!VWE_XML_CONFIG.API_ENDPOINT) missing.push('VWE_API_ENDPOINT');
  if (!VWE_XML_CONFIG.USERNAME) missing.push('VWE_USERNAME');
  if (!VWE_XML_CONFIG.PASSWORD) missing.push('VWE_PASSWORD');
  
  if (missing.length === 0) {
    return '✅ VWE XML/SOAP is correctly configured!';
  }
  
  return `⚠️ VWE XML/SOAP configuration incomplete. Missing variables:\n${missing.map(v => `   - ${v}`).join('\n')}\n\nAdd these to your .env.local file`;
}

// Vehicle data interface from VWE XML
export interface VWEXMLVehicle {
  id: string;
  kenteken: string;
  merk: string;
  model: string;
  variant?: string;
  bouwjaar: number;
  prijs: number;
  prijsadvies?: number;
  kilometerstand: number;
  brandstof: string;
  transmissie: string;
  carrosserie: string;
  fotoUrls: string[];
  beschrijving?: string;
  opties: string[];
  apk?: string;
  status: 'beschikbaar' | 'verkocht' | 'gereserveerd' | 'verwijderd';
  vermogen?: string;
  verbruik?: string;
  co2?: string;
  createdAt: string;
  updatedAt: string;
}

// Sync result interface
export interface SyncResult {
  success: boolean;
  added: number;
  updated: number;
  removed: number;
  errors: string[];
  timestamp: string;
  durationMs: number;
}
