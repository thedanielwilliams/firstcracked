import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "yellow" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variants
    const variants = {
      default: "bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue-dark)] shadow-sm hover:shadow",
      yellow: "bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow-dark)] shadow-sm hover:shadow",
      outline: "border-2 border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white",
      ghost: "hover:bg-black/5 text-[var(--color-brand-dark)]",
    }
    
    // Sizes
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    }
    
    const variantStyle = variants[variant]
    const sizeStyle = sizes[size]

    return (
      <Comp
        className={cn(baseStyles, variantStyle, sizeStyle, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
