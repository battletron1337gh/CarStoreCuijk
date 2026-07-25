import { redirect } from 'next/navigation';

// Redirect van oude Marktplaats URLs naar nieuwe URLs
// Bijv: /3216149/114277289/ -> /occasions/3216149/114277289/
// Werkt voor ALLE voertuignummers, niet alleen de bekende

interface RedirectPageProps {
  params: Promise<{
    voertuignr: string;
    klantnummer: string;
  }>;
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { voertuignr, klantnummer } = await params;
  
  // Redirect naar de juiste URL met /occasions/ erin
  redirect(`/occasions/${voertuignr}/${klantnummer}/`);
}

// Generate static params voor alle mogelijke voertuignummers
export function generateStaticParams() {
  const voertuignrs = [
    // Bestaande auto's
    '3541265', '3582727', '3582721', '3573276', '3576764',
    '3482432', '3460848', '3584309', '3555099', '3439307',
    '3546198', '3574972', '3576763', '3526504', '3524191',
    // Nieuwe auto's (mei 2026)
    '3617125', // Citroën C1
    '3621431', // Mini Cooper
    // Extra voor toekomstige auto's
    '3216149', '3216150', '3216151', '3216152', '3216153',
    '3216154', '3216155', '3216156', '3216157', '3216158',
    '3216159', '3216160', '3216161', '3216162', '3216163',
  ];
  
  const klantnummers = ['114277289', '67810'];
  
  const params = [];
  for (const voertuignr of voertuignrs) {
    for (const klantnummer of klantnummers) {
      params.push({ voertuignr, klantnummer });
    }
  }
  return params;
}
