'use client'

import { cn } from '@/lib/utils'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
}

export default function ShimmerButton({
  children = 'Book Ina',
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-brand-indigo px-8 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(43,31,160,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo',
        className
      )}
      {...props}
    >
      {/* Diagonal shimmer overlay */}
      <span
        className="pointer-events-none absolute top-0 h-full w-1/2 -skew-x-12"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          animation: 'shimmer-sweep 3.5s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
