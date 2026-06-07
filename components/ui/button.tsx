import { forwardRef } from "react";
import { cn } from "@/lib/cn";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50";
    const variants = {
      default: "bg-white text-black hover:bg-white/90",
      outline: "border border-white/20 text-white hover:bg-white/10",
      ghost: "text-white/70 hover:text-white hover:bg-white/10",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes = { default: "h-9 px-4 py-2 text-sm", sm: "h-7 px-3 text-xs", lg: "h-11 px-6 text-base" };
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
export { Button };
