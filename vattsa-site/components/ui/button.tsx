import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  className?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "button";
    const base = "inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";
    const variants: Record<string,string> = {
      default: "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black",
      outline: "bg-transparent border border-neutral-300 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900",
      ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900"
    };
    return <Comp ref={ref} className={[base, variants[variant], className].join(" ")} {...props} />;
  }
);
Button.displayName = "Button";
