import { business } from '../data/business'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">☕ {business.name}</p>
          <p className="mt-3 text-sm text-cream/70">{t.business.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.explore}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><a href="/menu" className="hover:text-cream">{t.nav.menu}</a></li>
            <li><a href="/recipes" className="hover:text-cream">{t.nav.recipes}</a></li>
            <li><a href="/about" className="hover:text-cream">{t.nav.about}</a></li>
            <li><a href="/contact" className="hover:text-cream">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.sayHello}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><a href={`mailto:${business.email}`} className="hover:text-cream">{business.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm text-cream/80">
            <a href={business.social.instagram} target="_blank" rel="noreferrer" className="hover:text-cream">Instagram</a>
            <a href={business.social.facebook} target="_blank" rel="noreferrer" className="hover:text-cream">Facebook</a>
            <a href={business.social.tiktok} target="_blank" rel="noreferrer" className="hover:text-cream">TikTok</a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/60">
        {t.footer.rights(new Date().getFullYear(), business.name)}
      </div>
    </footer>
  )
}
