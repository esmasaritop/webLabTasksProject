import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  id: string
  label?: ReactNode
  helpText?: ReactNode
  error?: ReactNode
}

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ')
}

export default function Input({ id, label, type = 'text', helpText, error, className, disabled, ...props }: InputProps) {
  const describedBy = error ? `${id}-error` : helpText ? `${id}-help` : undefined

  return (
    <div className="space-y-1">
      {label ? (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      ) : null}

      <input
        id={id}
        type={type}
        disabled={disabled}
        aria-describedby={describedBy}
        className={cn(
          'w-full rounded-lg border px-3 py-2 transition-colors',
          'focus:outline-none focus:ring-2',
          'dark:bg-gray-800 dark:text-gray-100',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500',
          disabled ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-800 opacity-75' : 'bg-white',
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : helpText ? (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      ) : null}
    </div>
  )
}
