import { forwardRef } from "react";
import { cn } from "@/lib/cn";
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("text-xs font-medium text-white/70 leading-none", className)} {...props} />
));
Label.displayName = "Label";
export { Label };
