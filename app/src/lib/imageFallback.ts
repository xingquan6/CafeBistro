import placeholderCup from '../assets/icons/placeholder-cup.svg'

export const IMAGE_PLACEHOLDER = placeholderCup

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  img.onerror = null
  img.src = IMAGE_PLACEHOLDER
}
