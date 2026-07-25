'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const labelMap: Record<string, string> = {
  '': 'Home',
  occasions: 'Occasions',
  'auto-verkopen': 'Auto verkopen',
  'verkochte-autos': 'Verkochte auto\'s',
  onderhoud: 'Onderhoud',
  'onderhoud/reparaties': 'Reparaties',
  financiering: 'Financiering',
  kennisbank: 'Tips & Advies',
  contact: 'Contact',
  privacy: 'Privacy',
  'algemene-voorwaarden': 'Algemene voorwaarden',
  'apk-keuring': 'APK keuring',
  'airco-vullen': 'Airco vullen',
  'banden-service': 'Banden service',
  'auto-reparatie-cuijk': 'Auto reparatie Cuijk',
  'auto-inkoop': 'Auto inkoop',
  'koplampen-polijsten': 'Koplampen polijsten',
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Geen breadcrumb op homepage
  if (pathname === '/' || pathname === '') return null;

  const segments = pathname.split('/').filter(Boolean);

  // Auto detailpagina's: /occasions/[voertuignr]/[klantnummer]
  // Toon alleen Home > Occasions > Auto detail
  const crumbs: { label: string; href: string }[] = [{ label: 'Home', href: '/' }];

  if (segments[0] === 'occasions' && segments.length >= 2) {
    crumbs.push({ label: 'Occasions', href: '/occasions' });
    crumbs.push({ label: 'Auto detail', href: pathname });
  } else {
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const key = segments.slice(0, index + 1).join('/');
      const label = labelMap[key] || labelMap[segment] || segment.replace(/-/g, ' ');
      crumbs.push({
        label: label.charAt(0).toUpperCase() + label.slice(1),
        href: currentPath,
      });
    });
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-white/50 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="flex items-center gap-1 hover:text-[#c8102e] transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:inline">{crumb.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-white/80">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#c8102e] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
