import { MetadataRoute } from 'next';
import { vweCars } from '@/data/vwe-cars';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.carstorecuijk.nl';
  
  // Statische pagina's
  const staticPages = [
    '',
    '/occasions',
    '/onderhoud',
    '/contact',
    '/auto-inkoop',
    '/auto-verkopen',
    '/airco-vullen',
    '/koplampen-polijsten',
    '/apk-keuring',
    '/financiering',
    '/algemene-voorwaarden',
    '/privacy',
    '/kennisbank',
    '/verkochte-autos',
    // Lokale landingspagina's
    '/garage-boxmeer',
    '/garage-grave',
  ];

  // Kennisbank artikelen
  const kennisbankArticles = [
    '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt',
    '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    '/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd',
    '/kennisbank/wanneer-airco-vullen',
  ];

  // Occasions
  const occasionPages = vweCars.map((car) => ({
    url: `${baseUrl}/occasions/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Combineer alle pagina's
  const allPages = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.9,
    })),
    ...kennisbankArticles.map((article) => ({
      url: `${baseUrl}${article}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...occasionPages,
  ];

  return allPages;
}
