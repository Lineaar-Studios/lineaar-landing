import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-[8px]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white hover:bg-brand-primary-dark",
        secondary:
          "bg-brand-surface text-brand-ink hover:bg-blue-100",
        outline:
          "border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-surface hover:border-brand-primary-dark hover:text-brand-primary-dark",
        ghost: "hover:bg-brand-surface hover:text-brand-ink",
        link: "text-brand-primary underline-offset-4 hover:underline",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-10 px-4 py-1",
        sm: "h-9 px-4 text-sm",
        lg: "h-11 px-4 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        data-slot="button"
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
