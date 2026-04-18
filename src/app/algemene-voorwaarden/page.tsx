import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, FileText, Truck, CreditCard, Lock, MessageSquare, RotateCcw } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Car Store Cuijk - 1ste Eigenaar Auto\'s',
  description: 'Bekijk de algemene voorwaarden van Car Store Cuijk. Specialist in 1ste eigenaar autos. Garantievoorwaarden, leveringsvoorwaarden, betalingsvoorwaarden en klachtenprocedure.',
  keywords: 'Car Store Cuijk algemene voorwaarden, 1ste eigenaar autos garantie, garantie auto, leveringsvoorwaarden auto, retourvoorwaarden auto, klachtenprocedure autobedrijf',
  alternates: {
    canonical: '/algemene-voorwaarden',
  },
  openGraph: {
    title: 'Algemene Voorwaarden | Car Store Cuijk',
    description: 'Bekijk de algemene voorwaarden, garantie-, leverings- en retourvoorwaarden van Car Store Cuijk.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

const voorwaardenSections = [
  {
    id: 'algemeen',
    icon: FileText,
    title: 'Algemene Voorwaarden',
    content: [
      {
        subtitle: 'Toepasselijkheid',
        text: 'Op alle aanbiedingen, overeenkomsten en leveringen van Car Store Cuijk zijn deze algemene voorwaarden van toepassing. Deze voorwaarden zijn gedeponeerd bij de Kamer van Koophandel.'
      },
      {
        subtitle: 'Definities',
        text: 'Onder "Car Store Cuijk" wordt verstaan de besloten vennootschap die handelt onder deze naam. Onder "consument" wordt verstaan: een natuurlijk persoon die niet handelt in de uitoefening van een beroep of bedrijf.'
      },
      {
        subtitle: 'Aanbiedingen',
        text: 'Alle aanbiedingen zijn vrijblijvend, tenzij anders vermeld. Prijzen zijn inclusief BTW, tenzij anders aangegeven. Aanbiedingen hebben een geldigheidsduur van 14 dagen, tenzij anders vermeld.'
      },
      {
        subtitle: 'Overeenkomst',
        text: 'Een overeenkomst komt tot stand na schriftelijke bevestiging of door aanvang van de uitvoering door Car Store Cuijk. Wijzigingen in de overeenkomst zijn slechts geldig indien schriftelijk overeengekomen.'
      }
    ]
  },
  {
    id: 'garantie',
    icon: Shield,
    title: 'Garantievoorwaarden',
    content: [
      {
        subtitle: 'Fabrieksgarantie',
        text: 'Op nieuwe voertuigen geldt de garantie zoals deze door de fabrikant wordt verstrekt. De duur en omvang van deze garantie kan per merk verschillen.'
      },
      {
        subtitle: 'Occasion Garantie',
        text: 'Op occasions bieden wij standaard 3 maanden garantie. Tegen meerprijs is uitbreiding naar 6, 12 of 24 maanden mogelijk. De garantiedekking geldt voor mechanische en elektrische defecten aan de aandrijflijn, motor, versnellingsbak en differentieel.'
      },
      {
        subtitle: 'Uitsluitingen',
        text: 'Garantie is uitgesloten op: slijtageonderdelen (remmen, koppeling, banden), schade door onjuist gebruik, nalatig onderhoud, ongevallen, aanpassingen door derden, en schade door externe oorzaken.'
      },
      {
        subtitle: 'Garantieprocedure',
        text: 'Bij garantieclaims dient u contact op te nemen met Car Store Cuijk. Reparaties worden alleen uitgevoerd door ons of door ons erkende reparateurs. Voorafgaande goedkeuring is vereist voor alle garantiewerkzaamheden.'
      }
    ]
  },
  {
    id: 'levering',
    icon: Truck,
    title: 'Leveringsvoorwaarden',
    content: [
      {
        subtitle: 'Levertijd',
        text: 'Opgegeven levertijden zijn indicatief. Car Store Cuijk streeft naar levering binnen de afgesproken termijn, maar kan niet aansprakelijk worden gesteld voor redelijke overschrijding hiervan.'
      },
      {
        subtitle: 'Risico-overgang',
        text: 'Het risico van het voertuig gaat over op de koper op het moment van aflevering. Aflevering vindt plaats op het adres van Car Store Cuijk, tenzij anders schriftelijk overeengekomen.'
      },
      {
        subtitle: 'Kenteken en RDW',
        text: 'Car Store Cuijk zorgt voor de tenaamstelling bij de RDW. De koper dient alle benodigde documenten tijdig te verstrekken. Kosten voor kenteken en leges zijn voor rekening van de koper, tenzij anders overeengekomen.'
      },
      {
        subtitle: 'Inruil',
        text: 'Bij inruil van een voertuig dient de koper alle beschikbare sleutels, kentekenbewijs, tenaamstellingscode en onderhoudshistorie te overhandigen. De koper garandeert dat het voertuig vrij is van schulden en beslagen.'
      }
    ]
  },
  {
    id: 'betaling',
    icon: CreditCard,
    title: 'Betalingsvoorwaarden',
    content: [
      {
        subtitle: 'Betalingstermijn',
        text: 'Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij voertuigaankopen is een aanbetaling van 10% vereist bij bestelling.'
      },
      {
        subtitle: 'Betalingsmethoden',
        text: 'Wij accepteren: contante betaling, pinbetaling, bankoverschrijving, en financiering via onze partner. Bij betaling via bankoverschrijving geldt: de dag van creditering van onze rekening is bepalend.'
      },
      {
        subtitle: 'Financiering',
        text: 'Car Store Cuijk biedt mogelijkheden voor financiering via erkende financieringspartners. De kredietverstrekker bepaalt of financiering wordt verstrekt. Alle financieringsvoorwaarden zijn onder voorbehoud van goedkeuring.'
      },
      {
        subtitle: 'Niet-tijdige betaling',
        text: 'Bij niet-tijdige betaling is de wettelijke rente verschuldigd. Buitengerechtelijke incassokosten bedragen 15% van het openstaande bedrag met een minimum van € 40,00. Bij wanbetaling behouden wij ons het recht voor de overeenkomst te ontbinden.'
      }
    ]
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Policy',
    content: [
      {
        subtitle: 'Gegevensverwerking',
        text: 'Car Store Cuijk verwerkt persoonsgegevens in overeenstemming met de AVG. Wij verwerken alleen gegevens die noodzakelijk zijn voor de uitvoering van onze diensten en wettelijke verplichtingen.'
      },
      {
        subtitle: 'Doeleinden',
        text: 'Uw gegevens worden gebruikt voor: uitvoering van de overeenkomst, facturatie, communicatie, garantieafhandeling, en (indien toestemming gegeven) marketingdoeleinden. Wij delen gegevens alleen met derden indien dit wettelijk verplicht of noodzakelijk is voor onze dienstverlening.'
      },
      {
        subtitle: 'Bewaartermijn',
        text: 'Persoonsgegevens worden niet langer bewaard dan noodzakelijk. Financiële gegevens bewaren wij 7 jaar op grond van wettelijke verplichtingen. Overige gegevens worden na 2 jaar na laatste contact verwijderd, tenzij u toestemming heeft gegeven voor langer bewaren.'
      },
      {
        subtitle: 'Uw rechten',
        text: 'U heeft recht op inzage, correctie, verwijdering en dataportabiliteit van uw gegevens. Voor vragen over onze privacyverwerking kunt u contact opnemen via info@carstorecuijk.nl.'
      }
    ]
  },
  {
    id: 'retour',
    icon: RotateCcw,
    title: 'Retourvoorwaarden',
    content: [
      {
        subtitle: 'Retourrecht',
        text: 'Bent u niet tevreden over uw aankoop? Bij Car Store Cuijk bieden wij u de mogelijkheid om het voertuig terug te geven onder bepaalde voorwaarden. Het voertuig moet zich in de originele staat bevinden, vrij van schade en met de volledige documentatie. Neem contact met ons op om de retourmogelijkheden te bespreken.'
      },
      {
        subtitle: 'Terugbetalingsbedrag',
        text: 'Bij retour van het voertuig ontvangt u 80% van de aanschafprijs terug. Dit betekent een vergoeding van -20% op de oorspronkelijke aankoopprijs. Dit dekt onze administratiekosten en waardepotentieel tijdens het bezit.'
      },
      {
        subtitle: 'Kilometerafhankelijke korting',
        text: 'Indien het voertuig meer dan 10.000 kilometer heeft gereden sinds aankoop, wordt er een extra korting van 10% toegepast op het terugbetalingsbedrag. Dit komt neer op een totale terugbetaling van 70% van de aanschafprijs.'
      },
      {
        subtitle: 'Voorwaarden',
        text: 'Voor retour gelden de volgende voorwaarden: voertuig in originele staat zonder schade of modificaties, volledige documentatie aanwezig (kentekenbewijs, onderhoudshistorie, alle sleutels), en het voertuig mag niet verkeersdeelnemer zijn geweest bij ongevallen. De exacte voorwaarden en termijn worden in overleg vastgesteld.'
      }
    ]
  },
  {
    id: 'klachten',
    icon: MessageSquare,
    title: 'Klachtenprocedure',
    content: [
      {
        subtitle: 'Melden',
        text: 'Klachten kunnen worden gemeld via telefoon, e-mail of schriftelijk aan Car Store Cuijk. Wij streven ernaar binnen 5 werkdagen te reageren op uw klacht.'
      },
      {
        subtitle: 'Afhandeling',
        text: 'Wij onderzoeken de klacht grondig en komen met een voorstel voor oplossing. Indien nodig nodigen wij u uit voor een gesprek. Wij streven naar een bevredigende oplossing voor alle partijen.'
      },
      {
        subtitle: 'Geschillenregeling',
        text: 'Indien de klacht niet tot een oplossing leidt, kunt u het geschil voorleggen aan de Geschillencommissie van de Stichting Geschillencommissies voor Consumentenzaken (SGC). Deze commissie biedt een onafhankelijke geschillenregeling voor consumenten.'
      },
      {
        subtitle: 'Contactgegevens',
        text: 'Voor meer informatie over geschillenregeling kunt u contact opnemen met de Stichting Geschillencommissies voor Consumentenzaken via www.degeschillencommissie.nl of telefonisch via 070-310 53 10.'
      }
    ]
  }
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 lg:pt-28">
        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Algemene <span className="text-[#c8102e]">Voorwaarden</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Op al onze diensten en overeenkomsten zijn onderstaande algemene voorwaarden van toepassing. 
                Hieronder vindt u een overzicht van onze belangrijkste voorwaarden.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-[#0d0d0d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {voorwaardenSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#c8102e] text-white/70 hover:text-white rounded-lg transition-all text-sm font-medium"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {voorwaardenSections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-[#c8102e]/10 text-[#c8102e] rounded-xl flex items-center justify-center">
                    <section.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 space-y-6">
                  {section.content.map((item, index) => (
                    <div key={index} className={index !== section.content.length - 1 ? "pb-6 border-b border-white/5" : ""}>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Vragen over onze <span className="text-[#c8102e]">voorwaarden?</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
              Heeft u vragen over onze algemene voorwaarden of wilt u meer informatie? 
              Neem gerust contact met ons op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Neem contact op
              </a>
              <a
                href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Bel direct: {contactInfo.telefoon}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
