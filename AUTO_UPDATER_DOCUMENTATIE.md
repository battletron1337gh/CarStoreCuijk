# Auto Occasions Updater - Car Store Cuijk

## Overzicht

Dit systeem biedt een complete oplossing voor het beheren van occasions bij Car Store Cuijk. Het bestaat uit:

1. **Admin Panel** - Een gebruiksvriendelijke interface om auto's toe te voegen, bewerken en verwijderen
2. **JSON Database** - Client-side opslag via localStorage (werkt met static export)
3. **VWE Integratie** - Voorbereid voor toekomstige koppeling met VWE API

## Bestanden

### Nieuwe bestanden:
- `src/lib/cars-database.ts` - Database layer met CRUD operaties
- `src/hooks/useCars.ts` - React hooks voor data fetching
- `src/app/admin/page.tsx` - Admin dashboard
- `src/app/admin/occasions/page.tsx` - Occasions beheer interface

### Aangepaste bestanden:
- `src/app/occasions/OccasionsFilter.tsx` - Nu gebruikt database in plaats van statische data
- `src/app/page.tsx` - Gebruikt database voor car marquee

## Hoe werkt het?

### 1. Admin Panel

Ga naar `/admin` om het dashboard te openen. Vanaf daar kun je:

- **Occasions beheren** (`/admin/occasions`):
  - Nieuwe auto's toevoegen
  - Bestaande auto's bewerken
  - Auto's verwijderen
  - Status wijzigen (beschikbaar/gereserveerd/verkocht)
  - Foto's toevoegen via URL
  - Opties/features beheren
  - Export/Import JSON voor backups

### 2. Database

De database slaat auto's op in de browser's localStorage:

```typescript
// Voorbeeld gebruik:
import { addCar, updateCar, deleteCar, getAllCars } from '@/lib/cars-database';

// Auto toevoegen
const newCar = addCar({
  merk: 'Audi',
  model: 'A4',
  variant: '1.6 TDI',
  bouwjaar: 2020,
  prijs: 25000,
  // ... etc
});

// Auto updaten
updateCar(carId, { prijs: 24000, status: 'gereserveerd' });

// Auto verwijderen
deleteCar(carId);
```

### 3. Data Structuur

```typescript
interface Car {
  id: string;              // Automatisch gegenereerd
  merk: string;            // Bijv. "Audi"
  model: string;           // Bijv. "A4"
  variant: string;         // Bijv. "1.6 TDI Sport"
  bouwjaar: number;        // Bijv. 2020
  carrosserie: string;     // Bijv. "Sedan"
  brandstof: string;       // Bijv. "Diesel"
  transmissie: string;     // Bijv. "Automaat"
  kilometerstand: number;  // Bijv. 50000
  prijs: number;           // Bijv. 25000
  afbeeldingen: string[];  // Array van foto URLs
  status: 'beschikbaar' | 'gereserveerd' | 'verkocht';
  apk: string;             // Bijv. "2026"
  features: string[];      // Bijv. ["Navigatie", "Climate control"]
  beschrijving: string;    // Vrije tekst
  vermogen?: string;       // Bijv. "150 pk"
  verbruik?: string;       // Bijv. "5.2 l/100km"
  kenteken?: string;       // Bijv. "XX-123-X"
  vweId?: string;          // Voor VWE koppeling
}
```

## VWE Integratie (Toekomst)

Het systeem is voorbereid voor VWE koppeling:

### Huidige status:
- ✅ VWE API client (`src/lib/vwe-client.ts`)
- ✅ Configuratie bestand (`src/lib/vwe-config.ts`)
- ✅ Admin panel pagina (`src/app/admin/vwe/page.tsx`)
- ✅ API routes voorbereid (`src/app/api/vwe/`)

### Wat je nodig hebt:
Om VWE te koppelen, heb je nodig van VWE:
1. **API Key** - Voor authenticatie
2. **Client ID** - Voor je account identificatie
3. **Webhook Secret** - Voor beveiligde webhooks

### Configuratie:
Voeg toe aan `.env.local`:
```env
VWE_API_KEY=your_api_key_here
VWE_CLIENT_ID=your_client_id_here
VWE_BASE_URL=https://api.vwe.nl/v1
VWE_WEBHOOK_SECRET=your_webhook_secret_here
```

### Hoe VWE aanvragen:
1. Ga naar https://www.vwe.nl
2. Log in bij "Mijn VWE"
3. Ga naar "Developers" of "API"
4. Vraag API toegang aan
5. Ontvang je credentials

## Backup & Herstel

### Export:
1. Ga naar `/admin/occasions`
2. Klik op "Export JSON"
3. Sla het bestand op

### Import:
1. Ga naar `/admin/occasions`
2. Klik op "Import JSON"
3. Plak de JSON data
4. Klik op "Importeren"

**Waarschuwing:** Import overschrijft alle huidige data!

## Technische Details

### Static Export Compatible
Dit systeem werkt met Next.js static export omdat:
- Alle data opslag client-side is (localStorage)
- Geen server-side database nodig
- Geen API calls nodig voor basis functionaliteit

### Beperkingen:
- Data is alleen opgeslagen in de browser
- Data wordt niet gedeeld tussen browsers/apparaten
- Data gaat verloren bij leegmaken browser data

### Oplossing voor productie:
Voor een productie omgeving met meerdere gebruikers:
1. Gebruik een backend database (bijv. Supabase, Firebase)
2. Voeg authenticatie toe aan het admin panel
3. Synchroniseer data tussen apparaten

## Roadmap

### Direct beschikbaar:
- ✅ Admin panel voor occasions beheer
- ✅ JSON import/export
- ✅ Client-side database
- ✅ Zoeken en filteren

### Toekomstige uitbreidingen:
- 🔄 VWE API koppeling (wacht op credentials)
- 🔄 Foto upload naar cloud storage
- 🔄 Meerdere gebruikers/authenticatie
- 🔄 Backend database
- 🔄 Automatische sync

## Support

Bij vragen of problemen:
1. Check de browser console voor errors
2. Controleer of localStorage werkt in je browser
3. Test de export/import functionaliteit
4. Raadpleeg de VWE documentatie voor API vragen
