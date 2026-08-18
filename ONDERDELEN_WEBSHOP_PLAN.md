# Car Store Cuijk — Onderdelen webshop plan (A-Z)

> Status: concept / ter besluitvorming  
> Doel: een eigen, beveiligde webshop voor auto-onderdelen op Car Store Cuijk, waarbij klanten op kenteken kunnen zoeken, wij een bon/label printen, het onderdeel picken, een label plakken en versturen.

---

## 1. Doel & strategische keuzes

### Wat we WEL bouwen
- Een **eigen webshop** op Car Store Cuijk (subdomein of `/onderdelen/` pad).
- **Zoeken zonder kentekenmatching in fase 1**: klant zoekt op:
  - **Bandenmaat** (breedte / hoogte / inch)
  - **OEM-nummer** (origineel onderdeelnummer)
  - **Artikelnummer** (leverancier-/eigen nummer)
  - **Categorie** (remmen, filters, verlichting, etc.)
- **Eigen voorraad** die wij beheren.
- **Beveiligde admin** voor producten, prijzen, voorraad, bestellingen.
- **Pick-pack-print flow**: bon → productlabel → verzendlabel.
- **Mollie** betaling + **SendCloud** verzendlabels.
- **Kentekenmatching** later optioneel toevoegen (bijv. Channelmotive of TecDoc).

### Wat we NIET doen in fase 1
- Niet meteen concurreren met Winparts/Autodoc op het volledige assortiment.
- Geen dropship zonder eigen controle; wij houden voorraad aan en verzenden zelf.
- Geen illegale scraping van Partslink24, Winparts of Autodoc.

### Slimme start
Begin met **onderdelen voor de merken/types die Car Store Cuijk zelf verkoopt** + veelvoorkomende slijtage-onderdelen:
- Oliefilters, luchtfilters, interieurfilters, ruitenwissers, remblokken, remschijven, bougies, accu’s, distributieriem/ketting-setjes, airco-onderdelen, vloeistoffen.
- Later uitbreiden naar breder assortiment via groothandelfeeds.

---

## 2. Technische architectuur

### Optie A — Subdomein op Hostinger (aanbevolen, onder één dak)
| Laag | Keuze |
|------|-------|
| Webshop frontend | Next.js 16 (App Router), Tailwind, statische export naar `onderdelen.carstorecuijk.nl` |
| Hosting | **Hostinger** — zelfde account als `carstorecuijk.nl`, subdomein-map |
| Database | **Supabase** PostgreSQL (gratis tier) |
| Auth | **Supabase Auth** (email/wachtwoord, rollen, optioneel 2FA) |
| Bestandsopslag | Supabase Storage (productfoto’s, label-PDF’s) |
| Betalingen | Mollie API via PHP endpoint op Hostinger (webhook + secret key) |
| Verzending | SendCloud API via PHP endpoint op Hostinger (secret key) |
| Kenteken data | RDW Open Data API / overheid.io (gratis) |
| kType/fitment | Channelmotive API of RDWkentekeninformatie.nl + groothandelfeeds |

**Waarom:**  
- Alles staat onder hetzelfde Hostinger-dak als de bestaande site.  
- Geen extra hostingplatform (Vercel) of extra maandkosten.  
- De bestaande Car Store Cuijk-site blijft ongemoeid in zijn eigen map.  
- Supabase regelt database, auth en storage in één gratis/laagdrempelig pakket.

### Optie B — Binnen bestaande site
- De webshop wordt een `/onderdelen` pad binnen de bestaande Next.js-site.
- Nadeel: codebase wordt groter en verwarrender; wijzigingen aan de showroom kunnen de shop raken.
- Voordeel: één deploy, één repo.

### Aanbeveling
**Optie A**: bouw de webshop als aparte Next.js-app op `onderdelen.carstorecuijk.nl`, gedeployed naar Hostinger. Los van de showroom, maar op dezelfde hosting.

---

## 3. Zoeken & matching

### Fase 1: zoeken zonder kentekenmatching
Voor de MVP starten we zonder kentekenkoppeling. De klant vindt producten op basis van:
1. **Bandenmaat** — breedte / profiel / inchmaat (bijv. 205 / 55 / R16).
2. **OEM-nummer** — origineel fabrieksnummer (bijv. `1K0 615 301` of zonder spaties).
3. **Artikelnummer** — eigen SKU of leveranciersartikelnummer.
4. **Categorieën** — handmatig browsen door remmen, filters, verlichting, etc.

Dit geeft direct waarde zonder maandelijkke fitment-kosten en zonder afhankelijkheid van TecDoc/Channelmotive.

### Kentekenmatching later?
- **RDW Open Data / overheid.io** = gratis, geeft merk, model, type, bouwjaar, motor, etc.
- **Onderdelen op kenteken** is **niet gratis**. Winparts, Autodoc, Partslink24, etc. bieden geen open API voor eigen webshops.
- Wil je later kentekenmatching toevoegen, dan heb je een **voertuig-identificatie (kType)** + een **onderdelendatabase met kType-koppelingen** nodig.

> Die “nieuwe webshops met kentekenkoppeling” gebruiken vrijwel altijd betaalde diensten zoals **Channelmotive**, **TecDoc**, **Olyslager** of groothandelfeeds met kType-koppelingen. Dat is waarom het wél kan, maar niet gratis.

### Eigen database bouwen + deels downloaden — kan dat?

Ja, dat kan. Maar je moet onderscheid maken tussen **voertuigdata** (makkelijk) en **onderdelen + pasvorm** (moeilijk/duur).

**Wat je gratis of goedkoop kunt downloaden:**
- **RDW Open Data** — alle Nederlandse voertuigen (merk, model, type, bouwjaar, motor, etc.).
- **Europese auto-database** (bijv. Database Atlas) — ~$815 voor 163.000+ versies met 312 specs.
- **Kenteken → kType** via RDWkentekeninformatie.nl (op aanvraag, waarschijnlijk betaald).

**Wat je niet gratis kunt downloaden:**
- Een complete database van onderdelen met pasvorm voor alle merken.
- De data is eigendom van TecAlliance (TecDoc) en wordt alleen via abonnement/API/licentie verkocht.

**Downloadbare opties die wél bestaan (met kanttekeningen):**

| Bron | Wat je krijgt | Prijsindicatie | Kanttekening |
|------|---------------|----------------|--------------|
| **TecDoc via TecAlliance** | Officiële catalogus + updates | €2.000–€4.000/jaar | Veilig, legaal, up-to-date |
| **autodatabases.com** | TecDoc MySQL dump (2024/2025/2026) | €1.200–€2.000 eenmalig | **Grijze markt**. Juridisch risico, geen officiële updates, data kan verouderd raken |
| **autodatabases.com categorie** | Filters, remblokken, ruitenwissers, etc. | ~€248 per categorie | Zelfde risico’s als hierboven |
| **Database Atlas** | Alleen voertuigdata, geen onderdelen | ~$815 | Goed voor voertuigmatching, niet voor pasvorm |

**Waarom ik grijze markt-dumps niet aanbeveel:**
- De data is niet officieel gelicenseerd.
- Je krijgt geen updates; nieuwe auto’s en superseded nummers ontbreken al snel.
- TecAlliance kan juridische stappen ondernemen.
- De dumps zijn vaak 100+ GB en vereisen veel technisch werk om te importeren en te onderhouden.

**Conclusie:**  
Een eigen database bouwen is zinvol voor je **producten, voorraad, orders en fitment-regels**. De onderliggende pasvorm-data kun je het beste halen via **officiële kanalen** (TecDoc, Channelmotive, Olyslager) of via **leveranciersfeeds**.

### Praktische routes

#### Route A — Channelmotive (aanbevolen voor snelle start)
Dit is waarschijnlijk exact wat je ziet bij andere webshops.

- Nederlandse dienst die **kenteken → voertuig → passende producten** regelt.
- 180.000+ voertuigen in de database.
- Je uploadt je eigen catalogus; Channelmotive koppelt je producten aan voertuigen.
- Werkt via plug-in (WooCommerce/Shopify/Magento) of **REST API** voor custom webshops.
- **Prijzen (aug 2026):**
  - Starter: **€149/maand** + €1.500 onboarding — tot 1.000 producten
  - Plus: **€249/maand** + €1.500 onboarding — tot 5.000 producten
  - Prof: **€349/maand** + €1.500 onboarding — tot 15.000 producten
- Extra exportkanalen (Brightmotive, Parts360, Grossier.nu): +€49 tot +€119/maand.

**Voordeel:** snel live, Nederlandse support, exact wat je zoekt.  
**Nadeel:** je moet nog steeds zelf productdata (titel, prijs, voorraad, afbeeldingen) aanleveren.

#### Route B — Groothandelfeeds importeren (middenweg)
- Vraag bij jouw B2B-groothandel (bijv. **Kavo Parts**, **PartsPoint/Parts360**, **Brezan**, Van den Ban, AutoMeter) een productfeed aan in CSV/XML met:
  - artikelnummer, merk, EAN, OEM-nummers
  - inkoopprijs, adviesprijs, voorraad
  - **kType-koppelingen** (TecDoc voertuig-IDs)
- Importeer deze feeds periodiek in de webshop-database.
- Klant zoekt op kenteken → systeem vertaalt kenteken naar kType (via **RDWkentekeninformatie.nl** of TecDoc) → toont passende artikelen.

**Voordeel:** groot assortiment zonder handmatig invoeren, lagere maandkosten dan Channelmotive.  
**Nadeel:** feed-kwaliteit en beschikbaarheid verschilt per groothandel; kenteken→kType vertaling regel je zelf.

#### Route C — Eigen fitment database (goedkoopste, meeste werk)
1. Klant voert kenteken in.
2. Systeem haalt via gratis RDW API op: merk, model, bouwjaar, motorcode, brandstof.
3. Producten in onze database hebben één of meer van deze velden als “passend op”:
   - merk + model + bouwjaar-range + motorcode(s)
   - óf kType (als we die hebben)
4. Webshop toont alleen producten die matchen.

**Voordeel:** volledige controle, geen maandelijkse fitment-kosten.  
**Nadeel:** je moet zelf de fitment per product invoeren of importeren.

#### Route D — Betaalde catalogus-API (later / grootschalig)
- **TecDoc Web Service** — de standaard, maar duur (ca. €2.000–€4.000/jaar).
- **Olyslager** — Nederlands, kentekenservice + catalogusdata, maatwerkprijs.
- **AutoDAP / YQ Service / Afteriize** — VIN/plate → parts API, custom pricing.
- **Apify Auto Parts Catalog** — ~$69/maand, third-party scraping-alternatief, minder betrouwbaar.

#### Route E — MVP zonder kentekenmatching (onze start)
1. Klant zoekt direct op **bandenmaat**, **OEM-nummer**, **artikelnummer** of **categorie**.
2. Producten bevatten één of meer OEM-nummers en leveranciersartikelnummers.
3. Banden zijn gekoppeld aan beschikbare maten (breedte / profiel / inch / belasting-/snelheidsindex / seizoen).
4. Later kunnen we **optioneel** kentekenmatching toevoegen zonder de database te herschrijven.

**Voordeel:** snel live, geen maandelijkke fitment-kosten, klanten die weten wat ze nodig hebben vinden het meteen.  
**Nadeel:** klanten die alleen hun kenteken weten, moeten zelf hun bandenmaat/OEM-nummer opzoeken (dat doen veel klanten toch al).

### Aanbeveling
- **Fase 1 = Route E** (MVP zonder kentekenmatching). Snel live, laag risico, direct bruikbaar voor banden en ervaren klanten.
- **Fase 2 = Route B** (groothandelfeeds met kType) om het assortiment automatisch te vullen.
- **Fase 3 = Route A of D** (Channelmotive / TecDoc) zodra het volume of de klantvraag dat rechtvaardigt.

### Partslink24 specifiek
- Partslink24 is een **dealerportaal**, heeft **geen publieke API**.
- Gebruik het eventueel als **handmatige lookup-tool** om OEM-nummers op te zoeken wanneer je producten aanmaakt.
- Automatisch uitlezen is **niet toegestaan** en technisch onbetrouwbaar.

---

## 4. Database schema (vereenvoudigd)

```
users                 — admin accounts, rollen
products              — SKU, titel, omschrijving, prijs, inkoop, voorraad, gewicht, afbeeldingen, type (part/tire/accessory), locatie
product_oem_numbers   — product_id + OEM-nummer (meerdere OEM-nummers per product)
product_article_numbers — product_id + leverancier + artikelnummer + inkoopprijs
product_fitments      — product_id + merk/model/bouwjaar_van/bouwjaar_tot/motor/kType (optioneel, voor later)
tire_sizes            — product_id + breedte + profiel + inch + belastingsindex + snelheidsindex + seizoen + runflat
stock_movements       — mutaties (inkoop, verkoop, retour, correctie)
orders                — klantgegevens, status, totaal, betaalstatus
order_lines           — order_id + product_id + aantal + prijs
pick_batches          — pickronde met meerdere orders
shipments             — verzendlabel URL, track&trace, carrier
```

---

## 5. Admin & beveiliging

- **Supabase Auth** met email + sterk wachtwoord.
- Rollen: `admin` (alles), `warehouse` (pick/pack/labels, geen prijzen/producten wijzigen).
- **RLS policies** zodat data nooit via client direct toegankelijk is zonder login.
- Admin-URL alleen beschikbaar na inloggen (`/admin/onderdelen/*`).
- Optioneel: IP-whitelist voor admin-routes (alleen kantoor-IP).
- Optioneel later: TOTP 2FA.

---

## 6. Product- & voorraadbeheer

Admin mogelijkheden:
- Product toevoegen/bewerken: titel, SKU, EAN/OEM, omschrijving, afbeeldingen, categorie, prijs, inkoop, voorraad, locatie in magazijn.
- Fitment toevoegen: merk/model/bouwjaar/motor of kType.
- Bulkimport via CSV/Excel.
- Voorraadmutaties inzien en handmatig corrigeren.
- Lage-voorraad meldingen (e-mail of in dashboard).
- Inkooporders aanmaken bij leveranciers.

---

## 7. Klantflow op de webshop

1. Klant komt op `/onderdelen`.
2. Klant kiest zoekmethode:
   - **Banden**: invullen van maat (bijv. 205 / 55 / R16) en seizoen.
   - **OEM-nummer**: invullen van origineel nummer.
   - **Artikelnummer**: invullen van eigen SKU of leveranciersnummer.
   - **Categorieën**: browsen door remmen, filters, verlichting, etc.
3. Systeem toont passende producten uit eigen voorraad.
4. Klant plaatst bestelling, betaalt via Mollie (iDEAL/creditcard).
5. Bestelling verschijnt in admin-dashboard met status `betaald`.

---

## 8. Pick-Pack-Print flow (magazijn)

### Stap 1 — Pickbon printen
- Admin opent bestelling, klikt **“Pickbon printen”**.
- PDF met:
  - Ordernummer + barcode/QR
  - Klantgegevens
  - Producten + locatie in magazijn + aantal
  - Opmerkingen/verzendwijze

### Stap 2 — Picken
- Magazijnmedewerker loopt langs vakken.
- Per product scant hij de product-barcode (USB scanner of camera).
- Systeem vinkt het product af en controleert aantal.
- Bij foutmelding: product komt niet overeen → pick wordt geblokkeerd.

### Stap 3 — Pack + labels
- Na picken klikt medewerker **“Verpakken & labels printen”**.
- Systeem genereert:
  - **Productlabels** (per artikel: ordernr + SKU + klant, af te plakken op doos/zak).
  - **Verzendlabel** via SendCloud (PDF, 10×15 cm).
- Medewerker plakt verzendlabel op doos.

### Stap 4 — Verzenden
- Medewerker klikt **“Verzonden”**.
- Voorraad wordt definitief afgeschreven.
- Klant ontvangt track&trace e-mail.

---

## 9. Verzending

**SendCloud** (aanbevolen):
- Gratis plan: geen maandkosten, betaal per label.
- API voor het aanmaken van PostNL/DHL/etc. labels.
- Geeft PDF-label en track&trace terug.
- Ondersteunt retourlabels.

Alternatief: directe PostNL/DHL business API (eigen contract nodig, meer werk).

---

## 10. Betaling

**Mollie**:
- iDEAL, creditcard, Bancontact, Apple Pay.
- Webhook zet bestelling op `betaald`.
- Transactiekosten ca. €0,30 + percentage.

---

## 11. Hardware aanbeveling

| Hardware | Doel | Voorbeeld |
|----------|------|-----------|
| Labelprinter verzendlabels | SendCloud/PostNL labels printen | Zebra ZD421, Dymo LabelWriter 5XL, Brother QL-820NWB |
| Labelprinter productlabels | Kleine stickers per onderdeel | Brother QL-800, Dymo LabelWriter 450 |
| Barcode scanner | Picken | USB handscanner (bijv. Honeywell Voyager) |
| Magazijn tablet/laptop | Admin openen in magazijn | Een goedkope laptop of iPad met browser |
| Weegschaal | Pakketten wegen voor labels | Pakketweegschaal 0–30 kg |

---

## 12. Fasering

### Fase 0 — Keuzes & setup (week 1)
- ✅ Subdomein + hosting: `onderdelen.carstorecuijk.nl` op Hostinger (zelfde dak als hoofdsite).
- Open Mollie + SendCloud account.
- Verzamel leverancierscontacten voor feeds en prijslijsten.
- Bepaal de eerste 100 SKU’s: bandenmaten + slijtage-onderdelen voor merken die Car Store Cuijk verkoopt.

### Fase 1 — MVP webshop (week 2–4)
- Supabase database + auth + admin routes.
- Productbeheer met OEM-nummers, artikelnummers en bandenmaten.
- Zoeken op bandenmaat, OEM-nummer, artikelnummer en categorie.
- Winkelwagen + Mollie betaling.
- Besteloverzicht in admin.

### Fase 2 — Pick-pack-print (week 5–6)
- Pickbon PDF.
- Productlabel PDF.
- SendCloud verzendlabel via API.
- Barcode scan picking.
- Track&trace e-mail.

### Fase 3 — Uitbreiding (week 7–12)
- Groothandelfeed importeren (kType).
- Meer categorieën en merken.
- B2B-verkoop aan garages via GarageOS-netwerk.
- Retourflow.

---

## 13. Kostenindicatie (start)

| Onderdeel | Kosten |
|-----------|--------|
| Hostinger subdomein | inbegrepen bij bestaand pakket |
| Supabase (gratis tier) | €0/maand tot limiet |
| Mollie | per transactie |
| SendCloud (gratis plan) | per label |
| Labelprinter (eenmalig) | €150–€400 |
| Barcode scanner (eenmalig) | €50–€150 |
| Groothandelfeeds | vaak gratis bij B2B-account |
| Channelmotive Starter (later optioneel) | €149/maand + €1.500 onboarding |
| Betaalde catalogus-API (later) | €0–€300/maand, of €2.000+/jaar voor TecDoc |

---

## 14. Openstaande beslissingen

1. **Subdomein:** ✅ `onderdelen.carstorecuijk.nl`.
2. **Hosting:** ✅ Onder hetzelfde Hostinger-dak als `carstorecuijk.nl`; geen Vercel.
3. **Route bevestigd:** we starten met MVP zonder kentekenmatching (zoeken op bandenmaat / OEM / artikelnummer / categorie).
4. **Beginassortiment:** welke categorieën/merken willen we als eerste?  
   Aanbeveling: populaire bandenmaten + slijtage-onderdelen voor merken die Car Store Cuijk verkoopt.
5. **Leverancier(s):** heb je al B2B-accounts bij onderdelengroothandels of bandenleveranciers?  
   Zo ja: vraag een prijslijst/feed aan met artikelnummers, OEM-nummers en voorraad.
6. **B2C, B2B of beide?** Bepaalt of we prijzen excl./incl. BTW tonen en of er een inlog nodig is.
7. **Kentekenmatching later:** willen we later Channelmotive/TecDoc inzetten?
8. **Magazijn & logistiek:** waar wordt opgeslagen en gepickt? Heb je daar al ruimte/processen?

---

## 15. Samenvatting

- **Gratis kenteken-API = RDW / overheid.io.**  
- **Gratis onderdelen-op-kenteken API bestaat niet.**  
- **De oplossing die je ziet bij andere webshops is waarschijnlijk Channelmotive** (€149/maand + onboarding) of een dure TecDoc-koppeling.
- **Beste start (fase 1):** eigen webshop zonder kentekenmatching, met zoeken op bandenmaat, OEM-nummer, artikelnummer en categorieën.
- **Fase 2:** groothandelfeeds met kType importeren om assortiment te vergroten.
- **Fase 3:** optioneel Channelmotive of TecDoc toevoegen voor kentekenmatching.
- **Systeem:** Next.js + Hostinger + Supabase + Mollie + SendCloud + labelprinter + scanner.
