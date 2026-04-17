import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.carstorecuijk.nl';
  
  const routes = [
    '',
    '/occasions',
    '/onderhoud',
    '/onderhoud/reparaties',
    '/airco-vullen',
    '/auto-inkoop',
    '/auto-verkopen',
    '/koplampen-polijsten',
    '/contact',
    '/financiering',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/occasions' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/occasions' ? 0.9 : 0.8,
  }));
}
