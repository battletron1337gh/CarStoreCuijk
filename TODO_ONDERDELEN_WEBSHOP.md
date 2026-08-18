# TODO — Car Store Cuijk Onderdelen Webshop

> Status: klaar om te bouwen (wacht op groen licht / credits).  
> Route: MVP zonder kentekenmatching. Start met zoeken op bandenmaat, OEM-nummer, artikelnummer en categorieën.

---

## Fase 0 — Setup (1 dag)

- [x] Subdomein vastleggen: `onderdelen.carstorecuijk.nl` ✅
- [x] Hostingkeuze: onder hetzelfde Hostinger-dak als `carstorecuijk.nl` ✅
- [ ] Hostinger subdomein-map aanmaken: `~/domains/onderdelen.carstorecuijk.nl/public_html/`
- [ ] DNS A-record instellen voor `onderdelen.carstorecuijk.nl`
- [ ] Supabase project aanmaken (PostgreSQL + Auth + Storage)
- [ ] Mollie account aanmaken / API-key ophalen
- [ ] SendCloud account aanmaken / API-key ophalen
- [ ] `.env.local` invullen met Supabase keys (publiek toegestaan voor frontend)
- [ ] PHP API endpoints op Hostinger voor Mollie-webhook + SendCloud secrets (`onderdelen.carstorecuijk.nl/api/`)
- [ ] Basis Next.js 16 + Tailwind + shadcn/ui project opzetten
- [ ] Next.js config op `output: 'export'` voor statische build naar Hostinger
- [ ] Supabase client + RLS policies instellen
- [ ] Deploy-script aanmaken voor Hostinger (vergelijkbaar met `deploy-safe.sh`)

---

## Fase 1 — MVP Webshop (2–3 weken)

### Database & auth
- [ ] Supabase schema aanmaken:
  - `users` (admin rollen)
  - `categories`
  - `products`
  - `product_oem_numbers`
  - `product_article_numbers`
  - `tire_sizes`
  - `stock_movements`
  - `orders`
  - `order_lines`
  - `shipments`
- [ ] Supabase Auth met email/wachtwoord
- [ ] Rollen: `admin` en `warehouse`
- [ ] Admin routes beveiligen (`/admin/*`)

### Admin productbeheer
- [ ] Product toevoegen/bewerken/verwijderen
- [ ] Categorieën koppelen
- [ ] OEM-nummers toevoegen (meerdere per product)
- [ ] Artikelnummers toevoegen (eigen SKU + leveranciersnummer)
- [ ] Bandenmaten toevoegen (breedte / profiel / inch / load / speed / seizoen / runflat)
- [ ] Voorraad mutaties inzien en handmatig corrigeren
- [ ] Bulk import via CSV/Excel

### Klant webshop
- [ ] Homepage met zoekbalk
- [ ] Zoeken op bandenmaat
- [ ] Zoeken op OEM-nummer
- [ ] Zoeken op artikelnummer
- [ ] Browsen per categorie
- [ ] Productdetailpagina
- [ ] Winkelwagen
- [ ] Checkout met adres + verzendmethode
- [ ] Mollie betaling (iDEAL + creditcard)
- [ ] Bestelbevestiging per e-mail

### Order & magazijn flow
- [ ] Bestellingen overzicht in admin
- [ ] Pickbon genereren (PDF)
- [ ] Productlabel genereren (PDF)
- [ ] SendCloud verzendlabel aanmaken (PDF)
- [ ] Track&trace opslaan + mailen naar klant
- [ ] Barcode scan ondersteuning bij picken

---

## Fase 2 — Data & uitbreiding

- [ ] Categorieën uit leverancierslijst importeren
- [ ] Eerste 100 SKU’s invoeren (banden + slijtage-onderdelen)
- [ ] Prijslijsten/feeds van leveranciers opvragen
- [ ] Import tooling bouwen voor leveranciers CSV/XML
- [ ] SEO pagina’s per categorie
- [ ] Google Merchant Center feed (later)

---

## Fase 3 — Kentekenmatching (optioneel, later)

- [ ] Kijken of we groothandelfeeds met kType kunnen krijgen
- [ ] Kenteken → kType vertaling (RDWkentekeninformatie.nl of Channelmotive)
- [ ] Product-fitment koppelen aan kType
- [ ] Zoeken op kenteken toevoegen

---

## Leverancierscategorieën (MVP)

### Motor
- Filters
- Ontsteking & voorgloeisysteem
- Riemen & ketting distributie
- Riemen multi-v
- Smeermiddelen & vloeistoffen
- Starten & laden
- Brandstof
- Brandstof adblue (ureum)
- Cilinderkop
- Koppeling
- Pakkingen
- Motorblok
- Turbo
- Uitlaat, katalysator & roetfilter

### Onderstel
- Schokdempers & veren
- Stuurdelen & wielophanging
- Wiellagers & naven

### Aandrijving
- Hoezen
- Kabels
- Luchtvering
- Stuurhuizen & stuurpompen
- Trekhaak & kabelsets
- Wielbouten & wielmoeren

### Sensoren & elektronica
- ABS sensoren
- Interieur- & stuurkolomschakelaars
- Motormanagement
- Sensoren inlaat & uitlaat
- Bandenspanningsensor TPMS
- Electra kabel reparatie sets
- EV componenten
- Lampen
- Parkeersensoren
- Relais
- Rijhulpsystemen (ADAS)
- Sensoren & schakelaars overig

### Carrosserie
- Carrosseriedelen
- Ruitenwissers & toebehoren
- Spiegels
- Accessoires
- Bevestigingsclips
- Deurslot & deurvanger
- Gasveren
- Mattensets
- Raammechanisme
- Rolgeleiding schuifdeur
- Verlichtingsdelen

### Remmen
- Remblokken & remschijven
- Remmen hydraulisch & remslangen
- Remschoenen & remtrommels
- Remmen overige
- Handremkabels

### Koeling
- Airco
- Motorkoeling
- Verwarming

### Favoriet
- Accu's
- Beurtpakket
- Ruitenwissers

### Extra
- Banden
- Velgen
- Kentekenplaten

---

## Belangrijke beslissingen om te maken

1. ✅ Subdomein: `onderdelen.carstorecuijk.nl` — bevestigd.
2. ✅ Hosting: onder hetzelfde Hostinger-dak als `carstorecuijk.nl` — bevestigd.
3. Welke leveranciers kunnen prijslijsten/feeds aanleveren?
4. Welke bandenmaten en merken gaan we als eerste opnemen?
5. Moet de shop B2C, B2B of beide ondersteunen?
6. Waar wordt er opgeslagen/gepickt? Heb je al ruimte?
