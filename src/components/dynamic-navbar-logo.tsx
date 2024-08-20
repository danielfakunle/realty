"use client";

import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";

export default function DynamicNavbarLogo() {
  const pathname = usePathname();
  return (
    <Logo
      type={pathname === "/" ? "secondary" : "primary"}
      className="text-xl lg:text-display-xs"
    />
  );
}
