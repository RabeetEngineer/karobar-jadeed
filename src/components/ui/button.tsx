import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-full text-center text-sm font-bold leading-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lift",
        secondary:
          "border border-white/80 bg-white/90 text-slate-950 shadow-glass backdrop-blur hover:-translate-y-0.5 hover:bg-white",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        dark: "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800",
      },
      size: {
        default: "min-h-12 px-6 py-2",
        sm: "min-h-10 px-4 py-2",
        lg: "min-h-14 px-6 py-3 text-base sm:px-7",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
