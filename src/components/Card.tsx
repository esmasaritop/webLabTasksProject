import type { ReactNode } from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'

export type CardProps = {
  title?: ReactNode
  children: ReactNode
  image?: string
  imageAlt?: string
  footer?: ReactNode
  variant?: CardVariant
  className?: string
}

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
  className,
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    elevated: 'bg-white shadow-md hover:shadow-lg dark:bg-gray-800',
    outlined: 'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
    filled: 'bg-gray-100 dark:bg-gray-800',
  }

  return (
    <div className={cn('overflow-hidden rounded-xl transition-shadow', variants[variant], className)}>
      {image ? <img src={image} alt={imageAlt || ''} className="h-48 w-full object-cover" /> : null}

      <div className="p-5">
        {title ? (
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        ) : null}
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
      </div>

      {footer ? (
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-900">
          {footer}
        </div>
      ) : null}
    </div>
  )
}
