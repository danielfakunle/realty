import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { IProperty } from "@/types";
import { propertyTypeSelectItems } from "./property-type-select";
import Link from "next/link";
const property = {
  _id: "1",
  owner: "1",
  name: "Boston Commons Retreat",
  type: "Apartment",
  description:
    "This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.",
  location: {
    street: "120 Tremont Street",
    city: "Boston",
    state: "MA",
    zipcode: "02108",
  },
  beds: 2,
  baths: 1,
  square_feet: 1500,
  amenities: [
    "Wifi",
    "Full kitchen",
    "Washer & Dryer",
    "Free Parking",
    "Hot Tub",
    "24/7 Security",
    "Wheelchair Accessible",
    "Elevator Access",
    "Dishwasher",
    "Gym/Fitness Center",
    "Air Conditioning",
    "Balcony/Patio",
    "Smart TV",
    "Coffee Maker",
  ],
  rates: {
    weekly: 1100,
    monthly: 4200,
    nightly: 50,
  },
  seller_info: {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "617-555-5555",
  },
  images: ["a1.jpg", "a2.jpg", "a3.jpg"],
  isFeatured: false,
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
};

type ListingCardProps = {
  className?: string;
  property: IProperty;
};

export default async function ListingCard({
  className,
  property,
}: ListingCardProps) {
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
  return (
    <Card
      className={cn(
        "overflow-hidden relative cursor-pointer shadow-sm border-border-primary",
        className,
      )}
    >
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
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="flex items-center gap-x-2.5">
          <Button size="default" variant="outline">
            Edit
          </Button>
          <Button asChild size="default" variant="outline">
            <Link href={`/properties/${property._id}`}>View </Link>
          </Button>
          <Button size="default" variant="error">
            Delete
          </Button>
        </div>
        <p className="font-medium text-lg">{displayRate()}</p>
      </CardFooter>
    </Card>
  );
}
