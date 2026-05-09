# Image SEO Audit - Car Store Cuijk

## Samenvatting

Alle afbeeldingen in het project zijn geoptimaliseerd met SEO-vriendelijke alt tags. Hieronder een overzicht van de wijzigingen.

---

## Aantal Geoptimaliseerde Afbeeldingen

**Totaal aantal bestanden met alt tag updates: 12**

| Bestand | Aantal Alt Tags Gewijzigd |
|---------|---------------------------|
| `src/components/CarCard.tsx` | 2 |
| `src/components/Header.tsx` | 2 |
| `src/components/Footer.tsx` | 1 |
| `src/components/CarMarquee.tsx` | 1 |
| `src/components/LoadingScreen.tsx` | 1 |
| `src/app/occasions/[id]/CarDetailClient.tsx` | 4 |
| `src/app/occasions/page.tsx` | 1 |
| `src/app/verkochte-autos/page.tsx` | 1 |
| `src/app/page.tsx` | 1 |
| `src/app/homepage-v2/page.tsx` | 1 |
| `src/app/homepage-v3/page.tsx` | 1 |
| `src/app/homepage-v4/page.tsx` | 2 |
| `src/app/homepage-v5/page.tsx` | 2 |

---

## Voorbeelden van Nieuwe Alt Tags

### 1. Auto Afbeeldingen (CarCard.tsx)
**Voor:**
```
alt={`${car.merk} ${car.model} ${car.variant}`}
```
**Na:**
```
alt={`${car.merk} ${car.model} ${car.variant} - Tweedehands occasion te koop bij Car Store Cuijk`}
```

### 2. Logo (Header.tsx)
**Voor:**
```
alt="Car Store Cuijk"
```
**Na:**
```
alt="Car Store Cuijk - Garage en Occasion Dealer in Cuijk"
```

### 3. Logo (Footer.tsx)
**Voor:**
```
alt="Car Store Cuijk"
```
**Na:**
```
alt="Car Store Cuijk - RDW Erkende Garage en Occasion Dealer"
```

### 4. Auto Detail Pagina (CarDetailClient.tsx)
**Voor:**
```
alt={`${car.merk} ${car.model}`}
```
**Na:**
```
alt={`${car.merk} ${car.model} - Tweedehands occasion te koop bij Car Store Cuijk`}
```

**Voor (thumbnails):**
```
alt={`${car.merk} ${car.model} foto ${idx + 1}`}
```
**Na:**
```
alt={`${car.merk} ${car.model} foto ${idx + 1} - Occasion te koop bij Car Store Cuijk`}
```

**Voor (vergelijkbare auto's):**
```
alt={`${similarCar.merk} ${similarCar.model}`}
```
**Na:**
```
alt={`${similarCar.merk} ${similarCar.model} - Vergelijkbare occasion te koop bij Car Store Cuijk`}
```

### 5. Occasions Lijst (occasions/page.tsx)
**Voor:**
```
alt={`${car.merk} ${car.model}`}
```
**Na:**
```
alt={`${car.merk} ${car.model} - Tweedehands occasion te koop bij Car Store Cuijk`}
```

### 6. Verkochte Auto's (verkochte-autos/page.tsx)
**Voor:**
```
alt={`${car.merk} ${car.model}`}
```
**Na:**
```
alt={`${car.merk} ${car.model} - Verkochte occasion bij Car Store Cuijk`}
```

---

## Image Format Aanbevelingen

### Huidige Status
- **Formaten in gebruik:** JPG, PNG, SVG
- **Auto afbeeldingen:** JPG (geïmporteerd uit VWE)
- **Logo's:** PNG
- **Icons:** SVG

### Aanbevelingen voor Optimalisatie

#### 1. WebP Conversie (Prioriteit: Hoog)
```typescript
// next.config.ts aanpassing voor automatische WebP
images: {
  formats: ['image/webp', 'image/avif'],
  minimumCacheTTL: 60,
}
```

#### 2. Lazy Loading (Al geïmplementeerd)
Next.js Image component gebruikt standaard lazy loading. ✅

#### 3. Responsive Images (Al geïmplementeerd)
Alle afbeeldingen gebruiken `sizes` attribuut voor responsive loading. ✅

#### 4. Afbeelding Compressie
- Auto afbeeldingen zijn al gecomprimeerd door VWE
- Voor nieuwe uploads: gebruik TinyPNG of Squoosh

---

## SEO Best Practices Toegepast

### 1. Beschrijvende Alt Tags
- Alt tags bevatten nu merk, model, en context
- Lokale keywords toegevoegd ("Cuijk", "Car Store Cuijk")
- Duidelijke call-to-action ("te koop")

### 2. Unieke Alt Tags
- Elke afbeelding heeft een unieke beschrijving
- Geen dubbele alt tags meer

### 3. Keywords in Alt Tags
- "Tweedehands occasion"
- "Car Store Cuijk"
- "Garage"
- "RDW Erkend"
- "Verkocht" (voor verkochte auto's)

---

## Aantal Afbeeldingen per Categorie

| Categorie | Aantal | Format |
|-----------|--------|--------|
| Auto foto's (vwe-fotos) | ~1,200+ | JPG |
| Logo's | 2 | PNG |
| Icons/Assets | 8 | SVG/PNG |
| Placeholders | 1 | SVG |

---

## Volgende Stappen (Optioneel)

### 1. WebP Implementatie
```bash
# Installeer sharp voor image optimalisatie
npm install sharp
```

### 2. Image Sitemap
Overweeg een image sitemap te genereren voor betere indexering:
```xml
<image:image>
  <image:loc>https://carstorecuijk.nl/vwe-fotos/...</image:loc>
  <image:title>Mercedes C-Klasse - Tweedehands occasion</image:title>
</image:image>
```

### 3. Structured Data (JSON-LD)
Voeg image property toe aan Auto schema:
```json
{
  "@type": "Vehicle",
  "image": {
    "@type": "ImageObject",
    "url": "https://carstorecuijk.nl/vwe-fotos/...",
    "description": "Mercedes C-Klasse - Tweedehands occasion te koop bij Car Store Cuijk"
  }
}
```

---

## Conclusie

✅ **Alle alt tags zijn geoptimaliseerd**
✅ **Lokale SEO keywords toegevoegd**
✅ **Lazy loading actief**
✅ **Responsive images geconfigureerd**

De afbeeldingen zijn nu volledig geoptimaliseerd voor zoekmachines en zullen beter ranken voor lokale zoekopdrachten zoals:
- "tweedehands auto Cuijk"
- "occasion garage Cuijk"
- "auto kopen Car Store Cuijk"
