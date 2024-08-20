import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Logo({
  type,
  className,
}: {
  type?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "cursor-pointer text-display-base font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-utility-brand-600 to-utility-brand-500",
        { "from-fg-primary to-fg-secondary": type === "secondary" },
        className,
      )}
    >
      realty
    </Link>
  );
}
