# Car Store Cuijk - Website Audit Rapport

**Datum:** 17 april 2026  
**Project:** Car Store Cuijk Website (Next.js + React + Tailwind CSS)  
**URL:** https://www.carstorecuijk.nl

---

## ✅ Wat er goed is

### 1. **Technische Opbouw & Framework**
- **Next.js 16** met moderne App Router structuur - up-to-date en future-proof
- **Static Site Generation (SSG)** met `output: 'export'` - snelle laadtijden en goed voor SEO
- **TypeScript** gebruikt door de hele codebase - type safety en betere onderhoudbaarheid
- **Tailwind CSS v4** met custom CSS variables - consistent design systeem
- Goede component structuur met duidelijke scheiding van concerns

### 2. **SEO (Search Engine Optimization)**
- ✅ Uitgebreide metadata in `layout.tsx` met Open Graph, Twitter Cards, robots tags
- ✅ Sitemap (`sitemap.ts`) met alle routes en correcte prioriteiten
- ✅ Robots.txt (`robots.ts`) met disallow voor admin/api routes
- ✅ Elke pagina heeft unieke title, description en keywords
- ✅ Canonical URLs ingesteld
- ✅ Nederlandse taal (`lang="nl"`) correct geconfigureerd
- ✅ Structured data ready (JSON-LD kan eenvoudig worden toegevoegd)

### 3. **Design & UX**
- ✅ Consistent kleurenschema (zwart #0a0a0a, accent rood #c8102e)
- ✅ Modern, dark theme design dat goed bij automotive sector past
- ✅ Framer Motion animaties voor soepele overgangen
- ✅ Duidelijke visuele hiërarchie met goede typografie
- ✅ Hover effects en micro-interacties op buttons/links
- ✅ Marquee/carousel componenten voor occasions en reviews

### 4. **Pagina's & Content**
- ✅ Alle belangrijke pagina's aanwezig:
  - Home (Hero, Featured Cars, Services, Reviews, CTA)
  - Occasions overzicht + detailpagina's
  - Onderhoud & Reparaties
  - Airco vullen
  - Auto inkoop/verkopen
  - Koplampen polijsten
  - Contact
  - Financiering
- ✅ SEO-vriendelijke URLs met beschrijvende paden
- ✅ Uitgebreide service-pagina's met prijzen en uitleg

### 5. **Functionaliteit**
- ✅ Filter systeem op occasions pagina (merk, carrosserie, brandstof, prijs, etc.)
- ✅ Zoekfunctie op occasions
- ✅ Sortering (prijs, bouwjaar, km-stand)
- ✅ Mobile-responsive navigatie met hamburger menu
- ✅ WhatsApp en telefoon integratie
- ✅ Google Maps links voor navigatie

### 6. **Performance**
- ✅ Static export voor snelle laadtijden
- ✅ `unoptimized: true` voor images (nodig voor static export)
- ✅ Scroll animations met Intersection Observer
- ✅ Lazy loading potentieel via Next.js Image component

### 7. **Accessibility (Basis)**
- ✅ Aria-labels op interactieve elementen (menu toggle)
- ✅ Alt texts op afbeeldingen
- ✅ Focus states op links en buttons
- ✅ Goede kleurcontrast (witte tekst op donkere achtergrond)
- ✅ Semantische HTML structuur

### 8. **Content & Data**
- ✅ Realistische auto data in `cars.ts` (19 occasions)
- ✅ Consistente contactgegevens door hele site
- ✅ Openingstijden correct weergegeven
- ✅ Reviews/testimonials aanwezig

---

## ⚠️ Wat verbeterd kan worden

### **HOOG (Kritiek - direct aanpakken)**

#### 1. **Ontbrekende auto afbeeldingen**
- **Probleem:** De `/public/cars/` map bevat alleen `placeholder.svg`, maar `cars.ts` verwijst naar specifieke afbeeldingen zoals `/cars/mini-pepper.jpg`, `/cars/audi-a4.jpg`, etc.
- **Impact:** Alle auto kaarten tonen nu de placeholder afbeelding
- **Oplossing:** 
  - Voeg echte auto foto's toe aan `/public/cars/`
  - Of gebruik een image service zoals Unsplash/Cloudinary als fallback
  - Zorg dat bestandsnamen matchen met de data

#### 2. **Hardcoded contactgegevens**
- **Probleem:** Telefoonnummer `0485 - 451 234` en WhatsApp `06 - 123 456 78` zijn hardcoded op meerdere plekken
- **Impact:** Moeilijk te onderhouden, risico op inconsistenties
- **Locaties:** Hero.tsx, Header.tsx, CTASection.tsx, meerdere pagina's
- **Oplossing:** Gebruik overal `contactInfo` uit `cars.ts` data file

#### 3. **WhatsApp nummer mismatch**
- **Probleem:** In `cars.ts` staat `06 - 123 456 78`, maar in sommige componenten wordt `31612345678` gebruikt (zonder spatie/streepje)
- **Impact:** Links kunnen niet correct werken
- **Oplossing:** Centraal formatteren via utility functie

#### 4. **Geen error handling voor ontbrekende auto's**
- **Probleem:** `CarDetailClient.tsx` toont alleen basis "Auto niet gevonden" bericht
- **Impact:** Slechte UX als iemand een verkeerde URL bezoekt
- **Oplossing:** Mooiere 404 pagina met suggesties voor andere auto's

### **MEDIUM (Belangrijk - binnen 1-2 weken)**

#### 5. **Geen formulieren voor leadgeneratie**
- **Probleem:** Geen contactformulier, alleen WhatsApp/telefoon links
- **Impact:** Missen van leads die liever mailen/formulier invullen
- **Oplossing:** 
  - Contactformulier toevoegen op contact pagina
  - Interesseformulier op auto detailpagina's
  - Afspraak formulier voor onderhoud

#### 6. **Geen Structured Data (Schema.org)**
- **Probleem:** Geen JSON-LD markup voor LocalBusiness, Product, AutoDealer
- **Impact:** Google toont geen rich snippets (sterren, prijs, etc.)
- **Oplossing:** Voeg toe aan layout.tsx en auto detailpagina's:
```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Car Store Cuijk",
  "address": {...},
  "openingHours": [...]
}
```

#### 7. **Geen Google Analytics / Tag Manager**
- **Probleem:** Geen tracking code aanwezig
- **Impact:** Geen inzicht in bezoekersgedrag, conversies niet meetbaar
- **Oplossing:** Voeg GTM of GA4 script toe in layout.tsx

#### 8. **Geen cookie consent / privacy policy**
- **Probleem:** Geen cookie banner of privacy verklaring
- **Impact:** Niet AVG-compliant
- **Oplossing:** Cookie consent banner + privacy policy pagina

#### 9. **Favicon en App Icons ontbreken**
- **Probleem:** Geen favicon.ico, apple-touch-icon, etc.
- **Impact:** Browser toont default icoon, niet professioneel
- **Oplossing:** Genereer favicon set en voeg toe aan layout metadata

#### 10. **Geen loading states**
- **Probleem:** Geen skeleton loaders of loading indicators
- **Impact:** Gebruikers zien lege schermen tijdens laden
- **Oplossing:** `loading.tsx` bestanden toevoegen voor routes

### **LAAG (Nice-to-have - indien tijd)**

#### 11. **Geen breadcrumb navigatie**
- **Probleem:** Geen duidelijke hiërarchie indicatie op subpagina's
- **Oplossing:** Breadcrumb component toevoegen boven pagina content

#### 12. **Beperkte afbeelding optimalisatie**
- **Probleem:** `unoptimized: true` staat aan voor alle images
- **Impact:** Grotere bestandsgroottes, langzamere laadtijden
- **Oplossing:** Gebruik een CDN zoals Cloudinary of Vercel Image Optimization

#### 13. **Geen service worker / PWA**
- **Probleem:** Geen offline functionaliteit
- **Oplossing:** Next.js PWA configureren voor offline caching

#### 14. **Geen print stylesheet**
- **Probleem:** Pagina's zijn niet geoptimaliseerd voor print
- **Oplossing:** `@media print` CSS toevoegen voor auto detailpagina's

#### 15. **Social share functionaliteit beperkt**
- **Probleem:** Share knop op auto detailpagina doet niets
- **Oplossing:** Implementeer Web Share API of fallback naar copy link

---

## 💡 Suggesties voor extra features

### **Directe waarde (Korte termijn)**

1. **Financieringscalculator**
   - Interactieve calculator op financiering pagina
   - Slider voor prijs, aanbetaling, looptijd
   - Toont maandbedrag real-time

2. **Auto vergelijken**
   - Checkbox op occasion kaarten om auto's te vergelijken
   - Vergelijkingstabel met specificaties

3. **Nieuwsbrief signup**
   - Email invoerveld in footer
   - "Nieuwe occasions" notificaties

4. **Routebeschrijving integratie**
   - "Plan uw route" knop op contact pagina
   - Direct openen in Google Maps app

### **Middellange termijn**

5. **Online afspraak systeem**
   - Kalender widget voor onderhoud afspraken
   - Keuze uit type service, datum, tijd
   - Bevestiging via email/SMS

6. **Auto inruil calculator**
   - Kenteken check via RDW API
   - Taxatie schatting gebaseerd op marktdata

7. **Live chat widget**
   - Tawk.to of Intercom integratie
   - Direct contact met verkoper

8. **Foto galerij met zoom**
   - Lightbox voor auto afbeeldingen
   - 360° view mogelijkheid

### **Lange termijn / Advanced**

9. **Voorraad integratie met VWE**
   - Automatische sync met VWE systeem
   - Real-time voorraad updates
   - XML import functionaliteit (wordt al voorbereid in code!)

10. **Multi-language support**
    - Duits voor grensregio (Duitsland dichtbij)
    - Engels voor expats

11. **Virtual showroom**
    - 360° interieur foto's
    - Video's van auto's

12. **Klantenportal**
    - Inloggen voor klanten
    - Onderhoudshistorie inzien
    - Facturen downloaden

---

## 📋 Prioriteitenlijst (Aanbevolen volgorde)

### Week 1: Kritieke fixes
1. [ ] Auto afbeeldingen toevoegen aan `/public/cars/`
2. [ ] Hardcoded telefoonnummers vervangen door centrale data
3. [ ] Favicon en app icons toevoegen
4. [ ] 404 pagina verbeteren

### Week 2: SEO & Tracking
5. [ ] Google Analytics / GTM implementeren
6. [ ] Schema.org structured data toevoegen
7. [ ] Cookie consent banner + privacy policy

### Week 3: Conversie optimalisatie
8. [ ] Contactformulier bouwen
9. [ ] Interesseformulier op auto pagina's
10. [ ] Financieringscalculator

### Week 4: Polish & Extra's
11. [ ] Breadcrumb navigatie
12. [ ] Loading states / skeletons
13. [ ] Social share functionaliteit fixen
14. [ ] Print stylesheet

---

## 📊 Samenvatting

| Categorie | Score | Opmerking |
|-----------|-------|-----------|
| **Techniek** | 9/10 | Moderne stack, goede structuur |
| **SEO** | 7/10 | Goede basis, structured data mist |
| **Design** | 8/10 | Modern, consistent, responsive |
| **Content** | 7/10 | Compleet, maar afbeeldingen ontbreken |
| **Functionaliteit** | 6/10 | Goede basis, formulieren missen |
| **Performance** | 7/10 | SSG goed, images kunnen beter |
| **Accessibility** | 6/10 | Basis goed, kan uitgebreider |
| **Security/Privacy** | 4/10 | Cookie consent en privacy policy missen |

**Totaal: 6.7/10** - Goede solide basis met veel potentieel, maar enkele kritieke punten die direct aandacht nodig hebben.

---

## 🔧 Quick Wins (vandaag nog te doen)

1. **Fix telefoonnummer consistentie** - Zoek/vervang `31612345678` → juiste formaat
2. **Voeg placeholder afbeeldingen toe** - Gebruik Unsplash auto foto's als tijdelijke oplossing
3. **Genereer favicon** - Gebruik een tool zoals favicon.io
4. **Voeg loading state toe** - Maak een simpel `loading.tsx` bestand
5. **Fix share button** - Maak deze functioneel met Web Share API

---

*Rapport gegenereerd door OpenClaw Audit Agent*
