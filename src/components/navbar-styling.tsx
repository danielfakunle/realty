"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarStyling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return <div className={cn({ dark: pathname === "/" })}>{children}</div>;
}
