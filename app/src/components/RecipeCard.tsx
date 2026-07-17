import { Link } from 'react-router-dom'
import type { RecipeItem } from '../types'
import { handleImageError } from '../lib/imageFallback'
import { BISTRO_KITCHEN_AREA } from '../api/recipes'
import { useLanguage } from '../i18n/LanguageContext'

export function RecipeCard({ item }: { item: RecipeItem }) {
  const { t } = useLanguage()
  const area = item.area === BISTRO_KITCHEN_AREA ? t.recipeArea : item.area

  return (
    <Link
      to={`/recipes/${item.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-espresso">
          {t.recipeCategories[item.category] ?? item.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-espresso">{item.title}</h3>
        <p className="mt-1 text-sm text-espresso-light">{area}</p>
      </div>
    </Link>
  )
}
