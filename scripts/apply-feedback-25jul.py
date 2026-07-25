import re
from pathlib import Path

ROOT = Path('/home/battletron/.openclaw/workspace/carstorecuijk-v2')

# Update "Bel Direct" CTA buttons to show number on desktop, "Bel direct" on mobile
BEL_DIRECT_RE = re.compile(
    r'(<Phone className="w-5 h-5" />\n\s*)Bel Direct(?:: \{contactInfo\.telefoon\})?',
)

RESPONSIVE_TEXT = r'''\1<span className="sm:hidden">Bel direct</span>
              <span className="hidden sm:inline">+316 87118768</span>'''


def update_apk_page():
    path = ROOT / 'src/app/apk-keuring/page.tsx'
    text = path.read_text(encoding='utf-8')

    # voordelen list
    text = text.replace("'RDW erkend keuringsstation'", "'RDW erkend'")

    # paragraph
    text = text.replace(
        'Als RDW erkend keuringsstation garanderen wij een vakkundige en eerlijke APK keuring.',
        'Wij regelen uw APK keuring vakkundig en eerlijk.'
    )

    # card subtitle
    text = text.replace(
        '<p className="text-white/50">Officieel keuringsstation</p>',
        '<p className="text-white/50">RDW erkend</p>'
    )

    # card paragraph
    text = text.replace(
        'Car Store Cuijk is officieel erkend door de RDW voor het uitvoeren van \n                  APK keuringen. Dit betekent dat wij voldoen aan alle kwaliteitseisen \n                  en dat uw keuring officieel geldig is.',
        'Car Store Cuijk is RDW erkend en regelt uw APK keuring. \n                  Uw keuring wordt officieel geregistreerd en is wettelijk geldig.'
    )

    # metadata descriptions
    text = text.replace(
        "'APK keuring Cuijk bij RDW erkende garage. ✅ Alle merken ✅ Zonder afspraak ✅ Snel geregeld. Garage open tot 22:00. Bel 0485-555090!'",
        "'APK keuring Cuijk bij RDW erkende garage. ✅ Alle merken ✅ Zonder afspraak ✅ Snel geregeld. Garage open tot 22:00. Bel 06-87118768!'"
    )
    text = text.replace(
        "'RDW erkende APK keuring in Cuijk. Alle merken, zonder afspraak. Bel nu!'",
        "'APK keuring in Cuijk. Alle merken, zonder afspraak. Bel nu!'"
    )
    text = text.replace(
        '"RDW erkende APK keuring in Cuijk. Alle merken, zonder afspraak. Garage open tot 22:00."',
        '"APK keuring in Cuijk. Alle merken, zonder afspraak. Garage open tot 22:00."'
    )

    # Bel Direct buttons
    text = BEL_DIRECT_RE.sub(RESPONSIVE_TEXT, text)

    path.write_text(text, encoding='utf-8')
    print('Updated apk-keuring')


def update_call_buttons():
    pages = [
        'src/app/auto-inkoop/page.tsx',
        'src/app/auto-reparatie-cuijk/page.tsx',
        'src/app/garage-grave/page.tsx',
        'src/app/garage-boxmeer/page.tsx',
    ]
    for rel in pages:
        path = ROOT / rel
        text = path.read_text(encoding='utf-8')
        new_text, count = BEL_DIRECT_RE.subn(RESPONSIVE_TEXT, text)
        if count:
            path.write_text(new_text, encoding='utf-8')
            print(f'Updated {rel} ({count} button(s))')
        else:
            print(f'No Bel Direct buttons in {rel}')


if __name__ == '__main__':
    update_apk_page()
    update_call_buttons()
