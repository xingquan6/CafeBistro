import type { ReactElement } from 'react'
import type { Lang } from '../i18n/LanguageContext'

function GB() {
  return (
    <svg viewBox="0 0 20 15" width="20" height="15" aria-hidden="true">
      <rect width="20" height="15" fill="#012169" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3" />
    </svg>
  )
}

function FR() {
  return (
    <svg viewBox="0 0 20 15" width="20" height="15" aria-hidden="true">
      <rect width="20" height="15" fill="#fff" />
      <rect width="6.667" height="15" fill="#0055A4" />
      <rect x="13.333" width="6.667" height="15" fill="#EF4135" />
    </svg>
  )
}

const FLAGS: Record<Lang, () => ReactElement> = { en: GB, fr: FR }

export function FlagIcon({ lang, className = '' }: { lang: Lang; className?: string }) {
  const Flag = FLAGS[lang]
  return (
    <span className={`inline-block overflow-hidden rounded-sm leading-none ${className}`}>
      <Flag />
    </span>
  )
}
