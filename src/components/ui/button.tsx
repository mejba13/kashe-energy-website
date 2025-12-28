import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md",
        primary:
          "bg-[#333333] text-white hover:bg-[#333333]/90 shadow-sm hover:shadow-md",
        secondary:
          "bg-[#FFEFE6] text-[#333333] hover:bg-[#FFEFE6]/80 border border-[#333333]/10",
        outline:
          "border border-[#333333]/20 bg-transparent text-[#333333] hover:bg-[#333333]/5",
        "outline-light":
          "border border-white/20 bg-transparent text-white hover:bg-white/10",
        ghost:
          "bg-transparent text-[#333333] hover:bg-[#333333]/5",
        "ghost-light":
          "bg-transparent text-white hover:bg-white/10",
        link: "text-accent underline-offset-4 hover:underline p-0 h-auto",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-full",
        sm: "h-9 px-4 py-2 rounded-full text-xs",
        lg: "h-12 px-8 py-3 rounded-full text-base",
        xl: "h-14 px-10 py-4 rounded-full text-lg",
        icon: "size-11 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ fontFamily: "var(--font-inter)" }}
      {...props}
    />
  );
}

export { Button, buttonVariants };
