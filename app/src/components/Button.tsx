import type { ReactNode } from 'react'
import RBButton from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

interface ButtonProps {
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'ghost'
  children: ReactNode
  className?: string
}

const VARIANT_MAP: Record<Required<ButtonProps>['variant'], string> = {
  primary: 'primary',
  outline: 'outline-light',
  ghost: 'outline-espresso',
}

export function Button({ to, href, onClick, type = 'button', variant = 'primary', children, className = '' }: ButtonProps) {
  const classes = `text-sm font-semibold uppercase tracking-wide ${className}`

  // react-bootstrap's polymorphic `as` prop typing doesn't play well with
  // react-router's <Link>, so for internal links we apply Bootstrap's own
  // btn classes directly to <Link> instead of routing through RBButton.
  if (to) {
    return (
      <Link to={to} className={`btn btn-${VARIANT_MAP[variant]} ${classes}`} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <RBButton
        href={href}
        variant={VARIANT_MAP[variant]}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
      >
        {children}
      </RBButton>
    )
  }
  return (
    <RBButton type={type} onClick={onClick} variant={VARIANT_MAP[variant]} className={classes}>
      {children}
    </RBButton>
  )
}
