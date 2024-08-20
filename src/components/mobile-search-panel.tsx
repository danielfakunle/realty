"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MobileSearchPanel() {
  return (
    <div className="md:hidden w-full p-4 bg-white/20 rounded-xl backdrop-blur-2xl space-y-4 z-10">
      <div className="rounded-xl flex flex-col bg-bg-primary w-full border border-border-secondary">
        <div className="flex-auto w-full relative">
          <Label
            className="absolute left-4 top-2 text-xs font-semibold"
            htmlFor="location"
          >
            Location
          </Label>
          <Input
            className="border-none shadow-none pl-[0.9375rem] pt-[1.25rem] h-12 text-sm rounded-t-xl rounded-b-none  placeholder:text-utility-gray-500"
            id="location"
            type="text"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex-auto w-full relative">
          <Label
            className="absolute left-4 top-2 text-xs font-semibold"
            htmlFor="keywords"
          >
            Keywords
          </Label>
          <Input
            className="border-none shadow-none pl-[0.9375rem] pt-[1.25rem] h-12 text-sm rounded-none placeholder:text-utility-gray-500"
            id="keywords"
            type="text"
            placeholder="Add Keywords"
          />
        </div>
        <div className="flex-auto w-full relative">
          <Label
            className="absolute left-4 top-2 text-xs font-semibold"
            htmlFor="type"
          >
            Type
          </Label>
          <Select defaultValue="all">
            <SelectTrigger className="border-none shadow-none pl-[0.9375rem] pt-[1.25rem] h-12 text-sm rounded-t-none rounded-b-xl placeholder:text-utility-gray-500">
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
        </div>
      </div>
      <Button className="w-full" size="xl">
        Search
      </Button>
    </div>
  );
}
