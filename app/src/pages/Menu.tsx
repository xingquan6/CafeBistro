import { useMemo, useState } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useAsync } from '../hooks/useAsync'
import { getCoffeeMenu } from '../api/coffee'
import { SectionHeading } from '../components/SectionHeading'
import { CoffeeCard } from '../components/CoffeeCard'
import { CardSkeletonGrid } from '../components/Skeleton'
import { useLanguage } from '../i18n/LanguageContext'

type Filter = 'All' | 'Hot' | 'Iced'

export function Menu() {
  const { data: coffees, loading: coffeesLoading } = useAsync(getCoffeeMenu, [])
  const [filter, setFilter] = useState<Filter>('All')
  const { t } = useLanguage()

  const filteredCoffees = useMemo(() => {
    if (!coffees) return []
    if (filter === 'All') return coffees
    return coffees.filter((item) => item.category === filter)
  }, [coffees, filter])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading eyebrow={t.pages.menu.drinksEyebrow} title={t.pages.menu.drinksTitle} align="left" />

      <ToggleButtonGroup
        type="radio"
        name="coffee-filter"
        value={filter}
        onChange={(value: Filter) => setFilter(value)}
        className="mb-8 gap-3"
      >
        {(['All', 'Hot', 'Iced'] as Filter[]).map((option) => (
          <ToggleButton
            key={option}
            id={`filter-${option}`}
            value={option}
            variant={filter === option ? 'espresso' : 'outline-espresso'}
            className="rounded-pill text-sm font-semibold uppercase tracking-wide"
          >
            {option === 'All' ? t.pages.menu.filterAll : t.coffeeCategories[option]}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {coffeesLoading ? (
        <CardSkeletonGrid count={6} />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCoffees.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
