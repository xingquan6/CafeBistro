import type { CoffeeItem } from '../types'
import latteImg from '../assets/images/coffee-latte.jpg'
import americanoImg from '../assets/images/coffee-americano.jpg'
import caramelLatteImg from '../assets/images/coffee-caramel-latte.jpg'
import macchiatoImg from '../assets/images/coffee-macchiato.jpg'
import cappuccinoImg from '../assets/images/coffee-cappuccino.jpg'
import matchaLatteImg from '../assets/images/coffee-matcha-latte.jpg'
import icedLatteImg from '../assets/images/coffee-iced-latte.jpg'
import icedMochaImg from '../assets/images/coffee-iced-mocha.jpg'
import frappeCaramelImg from '../assets/images/coffee-frappe-caramel.jpg'
import frappeMochaImg from '../assets/images/coffee-frappe-mocha.jpg'
import affogatoImg from '../assets/images/coffee-affogato.jpg'
import flatWhiteImg from '../assets/images/coffee-flat-white.jpg'
import caramelMacchiatoImg from '../assets/images/coffee-caramel-macchiato.jpg'
import icedCoffeeImg from '../assets/images/coffee-iced-coffee.jpg'
import icedEspressoImg from '../assets/images/coffee-iced-espresso.jpg'
import coldBrewImg from '../assets/images/coffee-cold-brew.jpg'
import frappuccinoImg from '../assets/images/coffee-frappuccino.jpg'
import nitroImg from '../assets/images/coffee-nitro.jpg'
import mazagranImg from '../assets/images/coffee-mazagran.jpg'

const HOT_URL = 'https://api.sampleapis.com/coffee/hot'
const ICED_URL = 'https://api.sampleapis.com/coffee/iced'

interface RawCoffee {
  id: number
  title: string
}

// Every drink is rendered from our own curated catalog (title, ingredients,
// and now image) rather than the upstream API's — that dataset mixes in
// Swedish text, mismatched ingredient lists, and its images vary run to run.
// The API is still used to decide which drinks are currently on the menu.
const CATALOG_IMAGES: Record<string, string> = {
  latte: latteImg,
  americano: americanoImg,
  caramelLatte: caramelLatteImg,
  macchiato: macchiatoImg,
  cappuccino: cappuccinoImg,
  matchaLatte: matchaLatteImg,
  icedLatte: icedLatteImg,
  icedMocha: icedMochaImg,
  frappeCaramel: frappeCaramelImg,
  frappeMocha: frappeMochaImg,
  affogato: affogatoImg,
  flatWhite: flatWhiteImg,
  caramelMacchiato: caramelMacchiatoImg,
  icedCoffee: icedCoffeeImg,
  icedEspresso: icedEspressoImg,
  coldBrew: coldBrewImg,
  frappuccino: frappuccinoImg,
  nitro: nitroImg,
  mazagran: mazagranImg,
}

const TITLE_TO_CATALOG_KEY: Record<string, string> = {
  latte: 'latte',
  'caramel latte': 'caramelLatte',
  macchiato: 'macchiato',
  'classic cappuccino': 'cappuccino',
  'matcha latte': 'matchaLatte',
  islatte: 'icedLatte',
  'islatte mocha': 'icedMocha',
  'frapino caramel': 'frappeCaramel',
  'frapino mocka': 'frappeMocha',
  'affogato al caffè': 'affogato',
  'flat white': 'flatWhite',
  'caramel macchiato': 'caramelMacchiato',
  'iced coffee': 'icedCoffee',
  'iced espresso': 'icedEspresso',
  'cold brew': 'coldBrew',
  frappuccino: 'frappuccino',
  nitro: 'nitro',
  mazagran: 'mazagran',
}

const FALLBACK_KEYS: { key: string; category: 'Hot' | 'Iced' }[] = [
  { key: 'latte', category: 'Hot' },
  { key: 'cappuccino', category: 'Hot' },
  { key: 'americano', category: 'Hot' },
  { key: 'icedCoffee', category: 'Iced' },
  { key: 'coldBrew', category: 'Iced' },
  { key: 'icedLatte', category: 'Iced' },
]

const FALLBACK_COFFEE: CoffeeItem[] = FALLBACK_KEYS.map(({ key, category }) => ({
  id: `fallback-${key}`,
  catalogKey: key,
  image: CATALOG_IMAGES[key],
  category,
}))

async function fetchCategory(url: string, category: 'Hot' | 'Iced'): Promise<CoffeeItem[]> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Coffee API responded ${res.status}`)
  const raw: RawCoffee[] = await res.json()
  const items: CoffeeItem[] = []
  for (const item of raw) {
    if (!item.title) continue
    const catalogKey = TITLE_TO_CATALOG_KEY[item.title.trim().toLowerCase()]
    if (!catalogKey) continue
    items.push({
      id: `${category.toLowerCase()}-${item.id}`,
      catalogKey,
      image: CATALOG_IMAGES[catalogKey],
      category,
    })
  }
  return items
}

export async function getCoffeeMenu(): Promise<CoffeeItem[]> {
  try {
    const [hot, iced] = await Promise.all([
      fetchCategory(HOT_URL, 'Hot'),
      fetchCategory(ICED_URL, 'Iced'),
    ])
    const combined = [...hot, ...iced]
    return combined.length ? combined : FALLBACK_COFFEE
  } catch {
    return FALLBACK_COFFEE
  }
}
