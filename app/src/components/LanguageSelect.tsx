import Dropdown from 'react-bootstrap/Dropdown'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/LanguageContext'
import { FlagIcon } from './FlagIcon'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export function LanguageSelect({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <Dropdown className={className}>
      <Dropdown.Toggle
        variant="outline-espresso"
        aria-label={t.nav.language}
        className="d-flex align-items-center gap-2 rounded-pill text-sm font-semibold text-espresso"
      >
        <FlagIcon lang={lang} />
        {lang.toUpperCase()}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {LANGS.map(({ code, label }) => (
          <Dropdown.Item
            key={code}
            active={lang === code}
            onClick={() => setLang(code)}
            className="d-flex align-items-center gap-2"
          >
            <FlagIcon lang={code} />
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
