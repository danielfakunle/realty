import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bathtub,
  Bed,
  Heart,
  MapPin,
  Selection,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { IProperty } from "@/types";
import { propertyTypeSelectItems } from "./property-type-select";

type PropertyCardProps = {
  className?: string;
  property: IProperty;
};

export default function PropertyCard({
  className,
  property,
}: PropertyCardProps) {
  function displayType() {
    const { type } = property;
    const index = propertyTypeSelectItems.findIndex((item) => item.id === type);
    if (index === -1) return "Other";
    return propertyTypeSelectItems[index].label;
  }
  function displayRate() {
    const { rates } = property;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    if (rates.monthly) {
      return (
        <>
          <span>{formatter.format(rates.monthly)}</span>
          <span className="text-xs font-normal">/mo</span>
        </>
      );
    } else if (rates.weekly) {
      return (
        <>
          <span>{formatter.format(rates.weekly)}</span>
          <span className="text-xs font-normal">/wk</span>
        </>
      );
    } else if (rates.nightly) {
      return (
        <>
          <span>{formatter.format(rates.nightly)}</span>
          <span className="text-xs font-normal">/ni</span>
        </>
      );
    }

    return null;
  }
  function displayRatesUpTop() {
    let firstAdd = true;
    const { rates } = property;
    let result = "";
    if (rates.weekly) {
      if (firstAdd) {
        result = "Weekly";
        firstAdd = false;
      } else {
        result += ` | Weekly `;
      }
    }
    if (rates.monthly) {
      if (firstAdd) {
        result = "Monthly";
        firstAdd = false;
      } else {
        result += ` | Monthly `;
      }
    }
    if (rates.nightly) {
      if (firstAdd) {
        result = "Nightly";
        firstAdd = false;
      } else {
        result += ` | Nightly `;
      }
    }
    return result;
  }
  return (
    <Card
      className={cn(
        "overflow-hidden relative cursor-pointer shadow-sm border-border-primary",
        className,
      )}
    >
      <div className="absolute top-4 right-4 z-10 bg-white/50 rounded-full border border-white/30 p-1.5 backdrop-blur">
        <Heart className="fill-white" size={20} weight="bold" />
      </div>
      <CardHeader className="h-44 p-0">
        <Carousel
          opts={{
            loop: true,
          }}
          className="group"
        >
          <CarouselContent className="-ml-0">
            {property.images.map((image, index) => (
              <CarouselItem className="pl-0" key={index}>
                <div className="p-1">
                  <Card className="shadow-none overflow-clip rounded-lg border-border-primary">
                    <CardContent className="relative flex h-44 items-center justify-center">
                      <Image
                        className="object-cover h-full"
                        src={
                          image.length < 10
                            ? `/images/properties/${image}`
                            : image
                        }
                        alt="property"
                        fill
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-white/50 border-white/30 p-1.5 backdrop-blur stroke-white hover:bg-white/60 invisible group-hover:visible" />
          <CarouselNext className="absolute right-4 bg-white/50 border-white/30 p-1.5 backdrop-blur stroke-white hover:bg-white/60 invisible group-hover:visible" />
        </Carousel>
      </CardHeader>

      <Link href={`/properties/${property._id}`}>
        <CardContent className="p-4 pb-2 space-y-2">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col">
              <p className="text-xs font-medium text-text-brand-tertiary">
                {displayType()}
              </p>
              <CardTitle className="text-lg font-medium">
                {property.name}
              </CardTitle>
            </div>
            <CardDescription className="text-sm flex items-center gap-x-1 text-text-tertiary">
              <MapPin className="fill-fg-tertiary" size={16} weight="fill" />
              <span>
                {`${property.location.city}, ${property.location.state}`}
              </span>
            </CardDescription>
          </div>
          <p className="text-sm flex items-center justify-between mt-0.5 text-fg-quaternary fill-fg-quaternary">
            <span className="flex items-center gap-x-1">
              <Bed weight="bold" size={16} />
              <span>{property.beds} Beds</span>
            </span>
            <span className="flex items-center gap-x-1">
              <Bathtub weight="bold" size={16} />
              <span>{property.baths} Baths</span>
            </span>
            <span className="flex items-center gap-x-1">
              <Selection weight="bold" size={16} />
              <span>{property.square_feet}ft²</span>
            </span>
          </p>
          <p className="text-fg-quaternary text-sm">{displayRatesUpTop()}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-end leading-tight p-4 pt-0">
          <p className="font-medium text-lg">{displayRate()}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
