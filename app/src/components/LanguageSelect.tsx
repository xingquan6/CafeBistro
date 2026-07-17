import Form from 'react-bootstrap/Form'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/LanguageContext'

export function LanguageSelect({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <Form.Select
      aria-label={t.nav.language}
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className={`w-auto rounded-full text-sm font-semibold text-espresso ${className}`}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </Form.Select>
  )
}
