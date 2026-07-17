import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import RBNavbar from 'react-bootstrap/Navbar'
import { business } from '../data/business'
import { LanguageSelect } from './LanguageSelect'
import { useLanguage } from '../i18n/LanguageContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const LINKS = [
    { to: '/', label: t.nav.home },
    { to: '/menu', label: t.nav.menu },
    { to: '/recipes', label: t.nav.recipes },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold uppercase tracking-wide transition-colors ${
      isActive ? 'text-rust' : 'text-espresso hover:text-rust'
    }`

  return (
    <RBNavbar
      expand="md"
      expanded={open}
      onToggle={setOpen}
      className="sticky top-0 z-50 bg-cream/95 backdrop-blur shadow-sm py-0"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center px-6 py-4">
        <NavLink to="/" className="font-display text-2xl font-semibold text-espresso" onClick={() => setOpen(false)}>
          ☕ {business.name}
        </NavLink>

        <RBNavbar.Collapse className="mt-4 w-full basis-full md:ms-8 md:mt-0 md:w-auto md:basis-auto">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </RBNavbar.Collapse>

        <div className="ms-auto flex items-center gap-3">
          <LanguageSelect />
          <RBNavbar.Toggle aria-label={t.nav.toggleMenu} />
        </div>
      </div>
    </RBNavbar>
  )
}
