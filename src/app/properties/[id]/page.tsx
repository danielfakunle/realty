import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Bathtub,
  Bed,
  Heart,
  MapPin,
  Selection,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Divider from "@/components/divider";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import connectDB from "@/config/db";
import PropertyModel from "@/models/property";
import { notFound } from "next/navigation";
import { Error } from "mongoose";
import Link from "next/link";
import { IProperty } from "@/types";
import { propertyTypeSelectItems } from "@/components/property-type-select";
import UserModel from "@/models/user";

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  connectDB();
  let property: IProperty | null = null;
  try {
    property = await PropertyModel.findById(params.id).lean();
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }
  if (!property) return notFound();
  let firstHalfAmenities;
  let secondHalfAmenities;
  let amenitiesCount = 0;
  if (property.amenities) {
    amenitiesCount = property.amenities.length;
    const halfOfAmenities = Math.ceil(property.amenities.length / 2);
    firstHalfAmenities = property.amenities.slice(0, halfOfAmenities);
    secondHalfAmenities = property.amenities.slice(halfOfAmenities);
  }

  let owner;
  let firstName;
  try {
    owner = await UserModel.findById(property.owner.toString()).lean();
    firstName = owner?.full_name?.split(" ")[0];
    console.log("owner", owner);
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }

  function displayType() {
    if (!property) return;
    const { type } = property;
    const index = propertyTypeSelectItems.findIndex((item) => item.id === type);
    return propertyTypeSelectItems[index].label;
  }

  let remainingRates: { [key: string]: string }[] = [];
  function displayRate(property: IProperty) {
    const { rates } = property;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    if (rates.monthly) {
      if (rates.weekly) {
        remainingRates.push({ Weekly: formatter.format(rates.weekly) });
      }
      if (rates.nightly) {
        remainingRates.push({ Nightly: formatter.format(rates.nightly) });
      }
      return (
        <>
          <span>{formatter.format(rates.monthly)}</span>
          <span className="text-base lg:text-lg font-normal">/mo</span>
        </>
      );
    } else if (rates.weekly) {
      if (rates.nightly) {
        remainingRates.push({ Nightly: formatter.format(rates.nightly) });
      }
      return (
        <>
          <span>{formatter.format(rates.weekly)}</span>
          <span className="text-base lg:text-lg font-normal">/wk</span>
        </>
      );
    } else if (rates.nightly) {
      return (
        <>
          <span>{formatter.format(rates.nightly)}</span>
          <span className="text-base lg:text-lg font-normal">/ni</span>
        </>
      );
    }

    return null;
  }

  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-4 md:pt-6 pb-8 md:pb-12 min-h-dvh flex justify-center">
      <div className="space-y-6 lg:space-y-8 max-w-320 flex-1">
        <Button asChild size="link" variant="link">
          <Link href="/properties">
            <ArrowLeft className="fill-text-tertiary" weight="bold" size={16} />
            <span className="text-sm text-text-tertiary font-medium ml-2">
              Back to Properties
            </span>
          </Link>
        </Button>
        <ScrollArea className="rounded-xl">
          <div className="flex space-x-3">
            {property.images.map((image, index) => (
              <Image
                key={index}
                src={image.length < 10 ? `/images/properties/${image}` : image}
                alt="Property Image"
                className="aspect-square w-fit object-cover"
                width={520}
                height={520}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 xl:gap-12">
          <div className="flex-1 flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-fg-brand-primary">
                {displayType()}
              </p>
              <span className="flex justify-between items-center">
                <h1 className="text-display-xs lg:text-display-sm xl:text-display-base font-medium text-text-primary truncate">
                  {property.name}
                </h1>
                <Button size="icon" variant="outline">
                  <Heart
                    className="fill-fg-quaternary min-w-5 h-5"
                    weight="bold"
                    size={20}
                  />
                </Button>
              </span>

              <span className="text-sm flex items-center gap-x-1 text-text-tertiary">
                <MapPin className="fill-fg-tertiary" size={16} weight="fill" />
                <span>{`${property.location.city}, ${property.location.state}`}</span>
              </span>
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-4 lg:gap-y-6">
                <h2 className="text-lg md:text-xl font-medium">Overview</h2>
                <p className="h-[13.5rem] overflow-auto">
                  {property.description}
                </p>
              </div>
              <Divider />
              <div className="flex flex-col gap-y-4 lg:gap-y-6">
                <h2 className="text-lg md:text-xl font-medium">Amenities</h2>
                <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                  {!property.amenities ? (
                    <>No Amenities</>
                  ) : (
                    <>
                      <div className="flex flex-col gap-y-4 lg:gap-y-6">
                        {firstHalfAmenities
                          ?.slice(0, 5)
                          .map((amenity, index) => (
                            <Amenity key={`firstHalfAmenities-${index}`}>
                              {amenity}
                            </Amenity>
                          ))}
                      </div>
                      <div className="flex flex-col gap-y-4 lg:gap-y-6">
                        {secondHalfAmenities
                          ?.slice(0, 5)
                          .map((amenity, index) => (
                            <Amenity key={`secondHalfAmenities-${index}`}>
                              {amenity}
                            </Amenity>
                          ))}
                      </div>
                    </>
                  )}
                </div>
                {amenitiesCount > 10 && (
                  <Button size="default" variant="outline" className="w-fit">
                    Show all
                  </Button>
                )}
              </div>

              <Divider />
              <div className="flex flex-col gap-y-4 lg:gap-y-6">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-lg md:text-xl font-medium">Location</h2>
                  <p className="truncate text-sm text-text-tertiary">
                    {`${property.location.street}, ${property.location.city}, ${property.location.state}`}
                  </p>
                </div>
                <Card className="h-96 flex justify-center items-center shadow-xs">
                  Map
                </Card>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-[28.75rem]">
            <Card className="shadow-xs p-4 lg:p-6 space-y-4">
              <p className="text-display-xs lg:text-display-sm font-medium">
                {displayRate(property)}
              </p>
              <p className="text-sm xl:text-lg grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-y-1 text-fg-quaternary fill-fg-quaternary">
                <span className="flex items-center gap-x-1">
                  <Bed weight="bold" size={16} />
                  <span>{property.beds} Beds</span>
                </span>
                <span className="flex items-center justify-center md:justify-end lg:justify-center gap-x-1">
                  <Bathtub weight="bold" size={16} />
                  <span>{property.baths} Baths</span>
                </span>
                <span className="flex items-center gap-x-1 justify-end md:justify-start lg:justify-end">
                  <Selection weight="bold" size={16} />
                  <span>
                    {new Intl.NumberFormat().format(property.square_feet)}ft²
                  </span>
                </span>
              </p>
              <div className="flex flex-col items-center gap-y-1">
                <Avatar className="w-16 h-16 lg:w-20 lg:h-20">
                  <AvatarImage src={owner?.image} />
                  <AvatarFallback className="text-display-sm">
                    CN
                  </AvatarFallback>
                </Avatar>

                <p className="text-lg lg:text-xl font-medium">
                  {owner?.full_name}
                </p>
              </div>
              {remainingRates.map((rate, index) => (
                <div
                  key={`remainingRates-${index}`}
                  className="flex justify-between"
                >
                  <p className="text-base font-medium text-text-primary">
                    {Object.keys(rate)[0]} rate
                  </p>
                  <p className="text-base text-text-tertiary">
                    {Object.values(rate)[0]}
                  </p>
                </div>
              ))}
              <Button className="w-full" size="lg" variant="default">
                Contact {firstName}
              </Button>
              <Button className="w-full" size="lg" variant="outline">
                Request a tour
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function Amenity({ children }: { children: string }) {
  return (
    <p className="truncate text-sm font-medium text-text-secondary">
      {children}
    </p>
  );
}
