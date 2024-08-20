import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none focus-visible:shadow-focus-xs disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-bg-brand-solid hover:bg-bg-brand-solid-hover text-text-primary-on-brand shadow-xs",
        error:
          "bg-bg-error-solid hover:bg-bg-error-solid-hover text-text-primary-on-brand shadow-xs",
        outline:
          "border border-border-primary bg-bg-primary shadow-xs hover:bg-bg-primary-hover text-text-secondary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "bg-bg-primary hover:bg-bg-primary-hover",
        link: "text-text-secondary underline-offset-4 hover:underline",
      },
      size: {
        link: "p-0",
        sm: "py-1 px-2.5 text-xs",
        default: "py-1.5 px-3",
        lg: "py-2 px-4 text-base",
        xl: "py-3 px-6 text-lg",
        icon: "p-1.5",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
