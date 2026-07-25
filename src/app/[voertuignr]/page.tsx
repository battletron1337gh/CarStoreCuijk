import { redirect } from 'next/navigation';

// Catch-all redirect voor oude Marktplaats URLs
// Bijv: /3216149/ -> redirect naar /occasions/ (als klantnummer ontbreekt)

interface RedirectPageProps {
  params: Promise<{
    voertuignr: string;
  }>;
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { voertuignr } = await params;
  
  // Redirect naar occasions overzicht als klantnummer ontbreekt
  redirect('/occasions/');
}

// Generate static params voor alle bekende voertuignummers
// Deze lijst wordt gebruikt tijdens build time
export function generateStaticParams() {
  return [
    // Bestaande auto's
    { voertuignr: '3541265' },
    { voertuignr: '3582727' },
    { voertuignr: '3582721' },
    { voertuignr: '3573276' },
    { voertuignr: '3576764' },
    { voertuignr: '3482432' },
    { voertuignr: '3460848' },
    { voertuignr: '3584309' },
    { voertuignr: '3555099' },
    { voertuignr: '3439307' },
    { voertuignr: '3546198' },
    { voertuignr: '3574972' },
    { voertuignr: '3576763' },
    { voertuignr: '3526504' },
    { voertuignr: '3524191' },
    // Nieuwe auto's (mei 2026)
    { voertuignr: '3617125' }, // Citroën C1
    { voertuignr: '3621431' }, // Mini Cooper
    // Extra voertuignummers voor toekomstige auto's
    { voertuignr: '3216149' },
    { voertuignr: '3216150' },
    { voertuignr: '3216151' },
    { voertuignr: '3216152' },
    { voertuignr: '3216153' },
    { voertuignr: '3216154' },
    { voertuignr: '3216155' },
    { voertuignr: '3216156' },
    { voertuignr: '3216157' },
    { voertuignr: '3216158' },
  ];
}
