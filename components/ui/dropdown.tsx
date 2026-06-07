"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block">{children}</div>;
}
export function DropdownMenuTrigger({ children, asChild }: any) { return children; }
export function DropdownMenuContent({ className, children, align = "end" }: any) {
  return (
    <div className={cn("absolute right-0 mt-1 min-w-[160px] rounded-xl border border-white/10 bg-[#111] py-1 shadow-xl z-50", className)}>
      {children}
    </div>
  );
}
export function DropdownMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-colors", className)} {...props} />;
}
export function DropdownMenuSeparator() { return <hr className="my-1 border-white/10" />; }
export function DropdownMenuLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-3 py-1.5 text-xs font-semibold text-white/40 uppercase tracking-wider", className)} {...props} />;
}
