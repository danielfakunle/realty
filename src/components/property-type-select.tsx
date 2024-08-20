import React from "react";
import { FormControl } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

type PropertyTypeSelectProps = SelectProps & {
  variant: "default" | "form";
  className?: string;
  viewportClassName?: string;
  contentClassName?: string;
  search?: boolean;
};

export const propertyTypeSelectItems = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "apartment",
    label: "Apartment",
  },
  {
    id: "studio",
    label: "Studio",
  },
  {
    id: "condo",
    label: "Condo",
  },
  {
    id: "house",
    label: "House",
  },
  {
    id: "cabin",
    label: "Cabin or Cottage",
  },
  {
    id: "chalet",
    label: "Chalet",
  },
  {
    id: "loft",
    label: "Loft",
  },
  {
    id: "room",
    label: "Room",
  },
  {
    id: "other",
    label: "Other",
  },
];

export default function PropertyTypeSelect({
  variant,
  className,
  viewportClassName,
  contentClassName,
  search = false,
  ...props
}: PropertyTypeSelectProps) {
  const trigger = (
    <SelectTrigger className={cn(className)}>
      <SelectValue />
    </SelectTrigger>
  );
  return (
    <Select {...props}>
      {variant === "form" ? <FormControl>{trigger}</FormControl> : trigger}
      <SelectContent
        sideOffset={8}
        viewportClassName={cn("p-1", viewportClassName)}
        className={cn(
          "w-[var(--radix-select-trigger-width)]",
          contentClassName,
        )}
      >
        {propertyTypeSelectItems.map((item) => {
          if (!search && item.id === "all") return null;
          return (
            <SelectItem
              key={`property-type-${item.id}`}
              className="rounded-lg px-3.5"
              value={item.id}
            >
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
