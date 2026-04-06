import React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full cursor-pointer transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-brand-indigo/5 hover:bg-brand-indigo/0 border-brand-indigo/20",
                solid: "bg-brand-indigo hover:bg-brand-indigo/90 text-white border-transparent hover:border-foreground/50",
                ghost: "border-transparent bg-transparent hover:border-brand-muted hover:bg-white/10",
                dark: "bg-white/10 hover:bg-white/20 text-white border-white/20",
            },
            size: {
                default: "px-7 py-2",
                sm: "px-4 py-1 text-sm",
                lg: "px-10 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface NeonButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      neon?: boolean;
      asChild?: boolean;
    }

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                <span className={cn(
                  "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-brand-indigo to-transparent hidden",
                  neon && "block"
                )} />
                {children}
                <span className={cn(
                  "absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-brand-indigo to-transparent hidden",
                  neon && "block"
                )} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
