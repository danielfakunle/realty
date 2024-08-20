import MobileSearchPanel from "@/components/mobile-search-panel";
import PropertyCard from "@/components/property-card";
import SearchPanel from "@/components/search-panel";
import { Button } from "@/components/ui/button";
import connectDB from "@/config/db";
import PropertyModel from "@/models/property";
import { IProperty } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  connectDB();
  const recentProperties: IProperty[] = await PropertyModel.aggregate([
    { $sample: { size: 4 } },
  ]);
  return (
    <main>
      <section className="bg-utility-gray-900 relative md:static px-0 md:px-10 lg:px-16 xl:px-20 pt-0 md:pt-8 pb-0 md:pb-12 lg:pb-16 flex justify-center">
        <div className="flex flex-col items-center max-w-320 md:space-y-6 flex-1">
          <SearchPanel />
          <div className="h-120 static md:relative w-full md:h-140 lg:h-160 rounded-xl overflow-clip flex flex-col items-center gap-y-6 pt-6 md:pt-0 pb-8 md:pb-12 lg:pb-16 px-4 text-center">
            <MobileSearchPanel />
            <div className="h-full flex flex-col gap-y-6 justify-end items-center relative z-10">
              <h1 className="text-display-sm md:text-display-base lg:text-display-lg font-medium text-text-white">
                Find the perfect rental.
              </h1>
              <Button asChild className="w-fit" size="lg" variant="outline">
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
            <Image
              className="object-cover z-0"
              src="/images/hero-image.png"
              alt="hero image"
              fill
            />
          </div>
        </div>
      </section>
      <section className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-4 md:pt-6 pb-8 md:pb-12 flex justify-center">
        <div className="max-w-320 space-y-6 flex-1">
          <h2 className="text-display-xs md:text-display-sm lg:text-display-base font-medium text-text-primary">
            Recent rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:grid-rows-[1fr_0] overflow-hidden">
            {recentProperties.map((property) => (
              <PropertyCard
                key={property._id!.toString()}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-4 md:pt-6 pb-8 md:pb-12 space-y-6 flex justify-center">
        <div className="relative w-full h-96 md:h-120 lg:h-140 xl:h-160 rounded-xl overflow-clip max-w-320 flex-1">
          <Image
            className="object-cover -z-10"
            fill
            src="/images/property-cta-image.png"
            alt="hero image"
          />
          <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12 xl:p-16 h-full">
            <div className="space-y-4 w-full md:w-1/2">
              <h3 className="w-full text-display-sm md:text-display-base lg:text-display-lg font-medium text-text-white">
                For Property Owners
              </h3>
              <p className="w-full text-base md:text-lg lg:text-xl text-text-white">
                List your properties and reach potential tenants. Rent short or
                long term.
              </p>
            </div>
            <Button className="w-fit" size="lg" variant="outline">
              Add property
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
