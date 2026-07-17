import type { CoffeeItem } from '../types'
import { handleImageError } from '../lib/imageFallback'
import { useLanguage } from '../i18n/LanguageContext'

export function CoffeeCard({ item }: { item: CoffeeItem }) {
  const { t } = useLanguage()
  const entry = t.coffeeCatalog[item.catalogKey]

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={entry.title}
          loading="lazy"
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
          {t.coffeeCategories[item.category]}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-espresso">{entry.title}</h3>
        <p className="mt-2 text-sm text-espresso-light">{entry.ingredients.join(' · ')}</p>
      </div>
    </div>
  )
}
