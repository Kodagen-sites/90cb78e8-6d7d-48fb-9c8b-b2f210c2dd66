import { cn } from "@/lib/cn";
export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <span className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />;
}
export function AvatarImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={cn("aspect-square h-full w-full object-cover", className)} {...props} />;
}
export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("flex h-full w-full items-center justify-center rounded-full bg-white/10 text-xs text-white/60", className)} {...props} />;
}
