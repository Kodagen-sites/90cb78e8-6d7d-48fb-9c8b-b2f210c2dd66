import { forwardRef } from "react";
import { cn } from "@/lib/cn";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn("flex h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-1 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 disabled:opacity-50", className)} {...props} />
));
Input.displayName = "Input";
export { Input };
