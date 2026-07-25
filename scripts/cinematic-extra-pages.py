import re
from pathlib import Path

ROOT = Path('/home/battletron/.openclaw/workspace/carstorecuijk-v2')

IMPORTS = """import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicServiceHero from '@/components/CinematicServiceHero';
import CinematicReveal from '@/components/CinematicReveal';
"""

SECTION_RE = re.compile(
    r'(\{/\* (?!Hero).*? \*/\}\s*<section[^>]*>)(.*?)(</section>)',
    re.DOTALL
)

PAGE_HEROES = {
    'contact': {
        'old': '''        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Contact <span className="text-[#c8102e]">Opnemen</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Heeft u vragen of wilt u een afspraak maken? 
                Neem gerust contact met ons op. Garage open tot 22:00, altijd bereikbaar voor spoed!
              </p>
            </div>
          </div>
        </section>
''',
        'new': '''        {/* Hero */}
        <CinematicServiceHero
          badge={{ icon: <Mail className="w-4 h-4" />, text: "Altijd bereikbaar" }}
          title="Contact Opnemen"
          highlightWord="Opnemen"
          subtitle="Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op. Garage open tot 22:00, altijd bereikbaar voor spoed!"
        />

''',
        'main_old': '<main className="min-h-screen pt-24 lg:pt-28">',
    },
    'financiering': {
        'old': '''        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6">
                <Wallet className="w-4 h-4" />
                Financiële oplossingen
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Financiering & <span className="text-[#c8102e]">Verzekering</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Flexibele financieringsmogelijkheden voor uw occasion. 
                Wij regelen het voor u tegen scherpe tarieven.
              </p>
            </div>
          </div>
        </section>
''',
        'new': '''        {/* Hero */}
        <CinematicServiceHero
          badge={{ icon: <Wallet className="w-4 h-4" />, text: "Financiële oplossingen" }}
          title="Financiering & Verzekering"
          highlightWord="Verzekering"
          subtitle="Flexibele financieringsmogelijkheden voor uw occasion. Wij regelen het voor u tegen scherpe tarieven."
        />

''',
        'main_old': '<main className="min-h-screen pt-24 lg:pt-28">',
    },
}


def wrap_sections(content: str) -> str:
    delay = 0.1

    def wrap(m):
        nonlocal delay
        full = m.group(0)
        comment = m.group(1).split('\n')[0]
        direction = 'scale' if any(x in comment for x in ['CTA', 'Advies', 'Resultaat', 'Verschil', 'Aanvraag', 'Voorbeeld', 'Calculation']) else 'up'
        d = delay
        delay += 0.05
        return f'        <CinematicReveal direction="{direction}" duration={{0.9}} delay={{{d}}}>\n        {full}\n        </CinematicReveal>'

    return SECTION_RE.sub(wrap, content)


def transform_service_page(name: str):
    path = ROOT / f'src/app/{name}/page.tsx'
    content = path.read_text(encoding='utf-8')
    cfg = PAGE_HEROES[name]

    content = content.replace(
        "import Header from '@/components/Header';\nimport Footer from '@/components/Footer';",
        IMPORTS
    )
    content = content.replace(cfg['main_old'], '<main className="min-h-screen bg-[#0a0a0a]">')
    content = content.replace(cfg['old'], cfg['new'])
    content = wrap_sections(content)

    path.write_text(content, encoding='utf-8')
    print(f'Updated {name}')


def transform_vergelijk():
    path = ROOT / 'src/app/vergelijk/page.tsx'
    content = path.read_text(encoding='utf-8')

    content = content.replace(
        "import { motion } from 'framer-motion';",
        "import { motion } from 'framer-motion';\nimport CinematicServiceHero from '@/components/CinematicServiceHero';\nimport CinematicReveal from '@/components/CinematicReveal';"
    )

    content = content.replace(
        '<main className="min-h-screen bg-[#0a0a0a] pt-32 sm:pt-28 lg:pt-28 pb-24">',
        '<main className="min-h-screen bg-[#0a0a0a] pb-24">'
    )

    old_header = '''        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <Link
                href="/occasions"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8102e] transition-colors text-sm mb-3"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar occasions
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
                <Scale className="w-8 h-8 text-[#c8102e]" />
                Auto vergelijken
              </h1>
            </div>
            <button
              onClick={clearCars}
              className="text-white/50 hover:text-white text-sm transition-colors self-start sm:self-auto"
            >
              Alles wissen
            </button>
          </div>
'''
    new_header = '''        <CinematicServiceHero
          badge={{ icon: <Scale className="w-4 h-4" />, text: "Occasions vergelijken" }}
          title="Auto Vergelijken"
          highlightWord="Vergelijken"
          subtitle="Vergelijk eenvoudig meerdere occasions op specificaties, prijs en uitrusting."
        />

        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <Link
                href="/occasions"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8102e] transition-colors text-sm mb-3"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar occasions
              </Link>
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
                <Scale className="w-8 h-8 text-[#c8102e]" />
                Auto vergelijken
              </h2>
            </div>
            <button
              onClick={clearCars}
              className="text-white/50 hover:text-white text-sm transition-colors self-start sm:self-auto"
            >
              Alles wissen
            </button>
          </div>
'''
    content = content.replace(old_header, new_header)

    content = content.replace(
        '        </div>\n      </main>',
        '        </div>\n        </CinematicReveal>\n      </main>'
    )

    path.write_text(content, encoding='utf-8')
    print('Updated vergelijk')


if __name__ == '__main__':
    transform_service_page('contact')
    transform_service_page('financiering')
    transform_vergelijk()
