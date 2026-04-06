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
        'inline-flex h-12 animate-[shimmer2_2s_infinite_linear] items-center justify-center rounded-full border border-brand-indigo/20 bg-[linear-gradient(110deg,#2B1FA0,45%,#4a3fd4,55%,#2B1FA0)] bg-[length:200%_100%] px-8 font-semibold text-white transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
