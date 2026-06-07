import { cn } from "@/lib/cn";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "destructive";
}
export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white",
    outline: "border border-white/20 text-white/70",
    success: "bg-green-500/20 text-green-400",
    destructive: "bg-red-500/20 text-red-400",
  };
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", variants[variant], className)} {...props} />;
}
