import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText, Cookie, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Car Store Cuijk - 1ste Eigenaar Auto\'s',
  description: 'Privacy policy van Car Store Cuijk. Specialist in 1ste eigenaar autos. Lees hoe wij omgaan met uw persoonsgegevens.',
  keywords: 'privacy policy Car Store Cuijk, 1ste eigenaar autos, privacy autobedrijf, gegevensbescherming',
  openGraph: {
    title: 'Privacy Policy | Car Store Cuijk - 1ste Eigenaar Auto\'s',
    description: 'Privacy policy van Car Store Cuijk. Specialist in 1ste eigenaar autos.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 lg:pt-28">
        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4" />
                Privacy & Veiligheid
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-[#c8102e]">Policy</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Uw privacy is belangrijk voor ons. Lees hoe wij omgaan met uw persoonsgegevens.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Inleiding</h2>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Car Store Cuijk respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie 
                  die u ons verschaft vertrouwelijk wordt behandeld. In deze privacy policy leggen wij 
                  uit welke gegevens wij verzamelen, hoe wij deze gebruiken en welke rechten u heeft.
                </p>
              </div>

              {/* Data We Collect */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Welke gegevens verzamelen wij?</h2>
                </div>
                <div className="space-y-4 text-white/60">
                  <p>Wij kunnen de volgende persoonsgegevens verzamelen:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
                    <li>Adresgegevens</li>
                    <li>IP-adres en browserinformatie</li>
                    <li>Gegevens over uw bezoek aan onze website</li>
                    <li>Informatie die u vrijwillig verstrekt via contactformulieren</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Data */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Hoe gebruiken wij uw gegevens?</h2>
                </div>
                <div className="space-y-4 text-white/60">
                  <p>Wij gebruiken uw gegevens voor de volgende doeleinden:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Het verwerken van uw aanvragen en vragen</li>
                    <li>Het verbeteren van onze website en diensten</li>
                    <li>Het verzenden van nieuwsbrieven (alleen met uw toestemming)</li>
                    <li>Het voldoen aan wettelijke verplichtingen</li>
                    <li>Het voorkomen van fraude en misbruik</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Cookies</h2>
                </div>
                <div className="space-y-4 text-white/60">
                  <p>
                    Onze website maakt gebruik van cookies. Dit zijn kleine tekstbestanden die op uw 
                    computer of mobiele apparaat worden opgeslagen. Wij gebruiken de volgende soorten cookies:
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h3 className="font-semibold text-white mb-2">Essentiële cookies</h3>
                      <p className="text-sm">
                        Deze cookies zijn noodzakelijk voor het functioneren van de website en 
                        kunnen niet worden uitgeschakeld.
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h3 className="font-semibold text-white mb-2">Analytische cookies</h3>
                      <p className="text-sm">
                        Met deze cookies analyseren wij het gebruik van onze website om deze te 
                        kunnen verbeteren. Wij gebruiken hiervoor Google Analytics.
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h3 className="font-semibold text-white mb-2">Marketing cookies</h3>
                      <p className="text-sm">
                        Deze cookies worden gebruikt om gepersonaliseerde advertenties te tonen. 
                        Wij gebruiken deze cookies alleen met uw toestemming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Uw rechten</h2>
                </div>
                <div className="space-y-4 text-white/60">
                  <p>Op grond van de AVG heeft u de volgende rechten:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Recht op inzage van uw persoonsgegevens</li>
                    <li>Recht op rectificatie van onjuiste gegevens</li>
                    <li>Recht op verwijdering van uw gegevens ("recht om vergeten te worden")</li>
                    <li>Recht op beperking van de verwerking</li>
                    <li>Recht op dataportabiliteit</li>
                    <li>Recht van bezwaar tegen de verwerking</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8102e]/10 text-[#c8102e] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact</h2>
                </div>
                <div className="space-y-4 text-white/60">
                  <p>
                    Heeft u vragen over deze privacy policy of wilt u gebruikmaken van uw rechten? 
                    Neem dan contact met ons op:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong className="text-white">Car Store Cuijk</strong></p>
                    <p>Lange Beijerd 3d</p>
                    <p>5431 NR Cuijk</p>
                    <p>E-mail: <a href="mailto:info@carstorecuijk.nl" className="text-[#c8102e] hover:underline">info@carstorecuijk.nl</a></p>
                    <p>Telefoon: <a href="tel:0687118768" className="text-[#c8102e] hover:underline">06 - 871 187 68</a></p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-[#1a1a1a]/50 rounded-2xl p-6 border border-white/5">
                <p className="text-white/40 text-sm text-center">
                  Laatste update: 17 april 2026 | Wij behouden ons het recht voor om deze privacy policy 
                  te wijzigen. Controleer deze pagina regelmatig voor updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
