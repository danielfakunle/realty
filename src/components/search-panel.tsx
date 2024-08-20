"use client";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function SearchPanel() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="hidden md:flex relative md:w-11/12 lg:w-9/12 max-w-[47.25rem] items-center rounded-full bg-bg-white shadow-lg border border-border-primary-solid"
    >
      <div className="flex-auto w-56 relative">
        <Label
          className="absolute left-8 top-3.5 text-xs font-semibold"
          htmlFor="location"
        >
          Location
        </Label>
        <Input
          className="border-none shadow-none pl-[1.9375rem] pt-[1.325rem] h-16 rounded-full text-sm  placeholder:text-utility-gray-500"
          id="location"
          type="text"
          placeholder="Search destinations"
        />
      </div>
      <div className="w-px h-8 bg-border-primary-solid" />
      <div className="flex-auto w-64 relative">
        <Label
          className="absolute left-8 top-3.5 text-xs font-semibold"
          htmlFor="keywords"
        >
          Keywords
        </Label>
        <Input
          className="border-none shadow-none pl-[1.9375rem] pt-[1.325rem] h-16 rounded-full text-sm  placeholder:text-utility-gray-500"
          id="keywords"
          type="text"
          placeholder="Add Keywords"
        />
      </div>
      <div className="w-px h-8 bg-border-primary-solid" />
      <div className="flex-auto w-72 relative">
        <Label
          className="absolute left-8 top-3.5 text-xs font-semibold"
          htmlFor="type"
        >
          Type
        </Label>
        <Select defaultValue="all">
          <SelectTrigger className="border-none shadow-none px-[1.9375rem] pt-[1.5625rem] h-16 rounded-full text-sm tracking-text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            sideOffset={8}
            viewportClassName="p-6"
            className="rounded-3xl w-[var(--radix-select-trigger-width)]"
          >
            <SelectItem className="rounded-lg px-3.5" value="all">
              All
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="apartment">
              Apartment
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="studio">
              Studio
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="condo">
              Condo
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="house">
              House
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="cabin">
              Cabin or Cottage
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="loft">
              Loft
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="room">
              Room
            </SelectItem>
            <SelectItem className="rounded-lg px-3.5" value="other">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
        <motion.button
          initial={{ width: "3rem" }}
          animate={{ width: isFocused ? "7.25rem" : "3rem" }}
          transition={{ type: "spring", duration: 0.4375, bounce: 0.25 }}
          className={cn(
            buttonVariants({ size: "icon", variant: "default" }),
            "absolute right-2 top-2 rounded-full h-12 gap-x-1.5 justify-start pl-3.5",
          )}
        >
          <span>
            <MagnifyingGlass weight="bold" size={20} />
          </span>
          {isFocused && <p className="text-base font-semibold">Search</p>}
        </motion.button>
      </div>
    </div>
  );
}
