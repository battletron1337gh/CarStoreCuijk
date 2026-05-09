# 🌟 Gratis Automatisch Reviews Systeem - Car Store Cuijk

Dit is een **gratis** automatisch reviews systeem zonder API kosten voor Car Store Cuijk.

## Hoe werkt het?

### Architectuur
```
┌─────────────────────────────────────────────────────────────┐
│                     STATIC SITE (Next.js)                   │
│  ┌─────────────────┐      ┌──────────────────────────────┐  │
│  │  Client Browser │─────▶│  public/data/reviews-cache.json │  │
│  │                 │      │  (Statisch JSON bestand)     │  │
│  │  - localStorage │      └──────────────────────────────┘  │
│  │    cache (24h)  │                                       │
│  └─────────────────┘                                       │
└─────────────────────────────────────────────────────────────┘
```

### Bestanden

| Bestand | Beschrijving |
|---------|-------------|
| `public/data/reviews-cache.json` | De reviews data (JSON) |
| `src/lib/reviews-cache.ts` | Client-side cache logica |
| `src/components/ReviewMarquee.tsx` | Reviews weergave component |
| `src/components/StatsSection.tsx` | Stats weergave met dynamische reviews |
| `src/app/admin/reviews/page.tsx` | Admin panel voor status check |
| `scripts/update-reviews.js` | CLI tool voor updates |

## 🔄 Update Workflow

### Optie 1: Handmatige Update (Aanbevolen)

1. **Update het review aantal:**
   ```bash
   cd /home/battletron/.openclaw/workspace/carstorecuijk-v2
   node scripts/update-reviews.js update-total 172 26
   ```
   (172 = Google reviews, 26 = Trustpilot reviews)

2. **Check de status:**
   ```bash
   node scripts/update-reviews.js status
   ```

3. **Commit en push:**
   ```bash
   git add public/data/reviews-cache.json
   git commit -m "Update reviews: 172 Google, 26 Trustpilot"
   git push
   ```

4. **Deploy de site** (Vercel/GitHub Pages doet dit automatisch)

### Optie 2: Admin Panel

1. Ga naar `/admin/reviews/` op de website
2. Klik op "Ververs Reviews"
3. Dit haalt de nieuwste data op van de server

### Optie 3: GitHub Actions (Geavanceerd)

Een GitHub Actions workflow is geconfigureerd in `.github/workflows/update-reviews.yml`.
Deze kan worden uitgebreid voor automatisch scrapen.

## 📊 Huidige Stats

- **Google Reviews:** 172 (5.0 ⭐)
- **Trustpilot:** 26 (4.7 ⭐)
- **Laatste update:** 10 mei 2026

## 🛠️ Technische Details

### Caching Strategie

1. **Client-side cache:** 24 uur in localStorage
2. **JSON file:** Wordt bij elke deploy ververst
3. **Fallback:** Hardcoded reviews als backup

### Voordelen

✅ **Gratis** - Geen API kosten  
✅ **Snel** - Static JSON, geen server latency  
✅ **Schaalbaar** - Kan makkelijk worden uitgebreid  
✅ **Betrouwbaar** - Fallback data bij problemen  

### Beperkingen

⚠️ Niet real-time (max 24h vertraging)  
⚠️ Handmatige update nodig voor nieuwe cijfers  
⚠️ Geen automatisch scrapen (zonder externe service)  

## 🔮 Toekomstige Uitbreidingen

1. **Automatisch scrapen** via GitHub Actions + externe service
2. **Webhook integratie** voor real-time updates
3. **Meer review bronnen** (Facebook, etc.)

## 📝 Belangrijke Notities

- De metadata in `layout.tsx` bevat statische review cijfers voor SEO
- Update deze handmatig bij grote wijzigingen
- De review JSON wordt opgeslagen in `public/data/` zodat het toegankelijk is voor de client

## 🆘 Troubleshooting

**Reviews worden niet geladen:**
- Check of `public/data/reviews-cache.json` bestaat
- Check de browser console voor errors
- Ververs de cache via het admin panel

**Oude data na deploy:**
- Clear browser cache/localStorage
- Check of de JSON file is geüpdatet in de repo

## 📞 Contact

Voor vragen over dit systeem, neem contact op met de developer.