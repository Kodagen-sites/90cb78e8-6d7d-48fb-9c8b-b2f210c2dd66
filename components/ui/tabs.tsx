"use client";
import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/cn";
const TabsCtx = createContext<{ value: string; onChange: (v: string) => void }>({ value: "", onChange: () => {} });
export function Tabs({ defaultValue, value, onValueChange, className, children }: any) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const active = value ?? internal;
  return (
    <TabsCtx.Provider value={{ value: active, onChange: onValueChange ?? setInternal }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}
export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex gap-1 rounded-lg bg-white/5 p-1", className)} {...props} />;
}
export function TabsTrigger({ value, className, ...props }: React.HTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = useContext(TabsCtx);
  return (
    <button onClick={() => ctx.onChange(value)}
      className={cn("flex-1 px-3 py-1.5 text-sm rounded-md transition-colors", ctx.value === value ? "bg-white/15 text-white" : "text-white/50 hover:text-white", className)} {...props} />
  );
}
export function TabsContent({ value, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = useContext(TabsCtx);
  if (ctx.value !== value) return null;
  return <div className={className} {...props} />;
}
