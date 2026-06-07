import { forwardRef } from "react";
import { cn } from "@/lib/cn";
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("flex min-h-[80px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 disabled:opacity-50", className)} {...props} />
));
Textarea.displayName = "Textarea";
export { Textarea };
