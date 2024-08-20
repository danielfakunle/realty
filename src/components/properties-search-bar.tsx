import { Input } from "@/components/ui/input";
import {
  HouseSimple,
  MagnifyingGlass,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PropertiesSearchBar() {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row gap-x-4 items-center">
      <div className="relative w-full">
        <MapTrifold
          className="absolute top-2 left-4 fill-fg-quaternary"
          size={20}
        />
        <Input
          className="rounded-full pl-11"
          type="text"
          placeholder="Search Destinations"
        />
      </div>
      <div className="relative w-full">
        <MagnifyingGlass
          className="absolute top-2 left-4 fill-fg-quaternary"
          size={20}
        />
        <Input
          className="rounded-full pl-11"
          type="text"
          placeholder="Add Keywords"
        />
      </div>
      <div className="relative w-full">
        <HouseSimple
          className="absolute top-2 left-4 fill-fg-quaternary"
          size={20}
        />
        <Select defaultValue="all">
          <SelectTrigger className="border-border-secondary shadow-xs pl-11 h-9 text-sm rounded-full placeholder:text-text-placeholder">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            sideOffset={8}
            viewportClassName="p-4"
            className="rounded-2xl w-[var(--radix-select-trigger-width)]"
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
      </div>
      <Button size="icon" className={cn("rounded-full p-2.5 w-full md:w-fit")}>
        <MagnifyingGlass weight="bold" size={20} />
      </Button>
    </div>
  );
}
