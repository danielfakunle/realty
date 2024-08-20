import React from "react";
import Logo from "./logo";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  CurrencyCircleDollar,
  Dot,
  Globe,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-6 md:pt-10 lg:pt-12 pb-6 bg-bg-tertiary flex justify-center">
      <div className="space-y-6 max-w-320 flex-1">
        <div className="flex flex-col sm:flex-row justify-between space-y-6 md:space-y-0">
          <div className="space-y-4 w-full sm:w-44">
            <Logo className="text-xl md:text-display-xs" type="secondary" />
            <p className="text-text-secondary text-sm">
              Your favorite property rental experience since 2024!
            </p>
          </div>
          <div className="flex flex-col gap-y-4 items-start sm:items-end">
            <p
              className={cn(
                buttonVariants({ variant: "link", size: "link" }),
                "font-semibold",
              )}
            >
              Help
            </p>
            <p
              className={cn(buttonVariants({ variant: "link", size: "link" }))}
            >
              FAQ
            </p>
            <p
              className={cn(buttonVariants({ variant: "link", size: "link" }))}
            >
              Customer Service
            </p>
            <p
              className={cn(buttonVariants({ variant: "link", size: "link" }))}
            >
              How to guide
            </p>
            <p
              className={cn(buttonVariants({ variant: "link", size: "link" }))}
            >
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 md:space-y-0">
          <div className="flex -space-x-1 text-text-quaternary text-sm items-center">
            <p>© 2024 Realty, Inc.</p>
            <Dot size={28} />
            <p>Privacy</p>
            <Dot size={28} />
            <p>Terms</p>
          </div>
          <div className="flex space-x-1 text-text-quaternary text-sm font-semibold items-center">
            <span className="flex items-center gap-x-0.5">
              <Globe size={20} />
              <p>English (US)</p>
            </span>
            <span className="flex items-center gap-x-0.5">
              <CurrencyCircleDollar size={20} />
              <p>USD</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
