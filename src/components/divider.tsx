import { cn } from "@/lib/utils";
import React from "react";

export default function Divider({ className }: { className?: string }) {
  return <div className={cn("h-[1px] bg-border-secondary", className)} />;
}
