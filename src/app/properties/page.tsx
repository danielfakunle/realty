import PropertiesSearchBar from "@/components/properties-search-bar";
import PropertyCard from "@/components/property-card";
import { Button } from "@/components/ui/button";
import connectDB from "@/config/db";
import PropertyModel from "@/models/property";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default async function PropertiesPage() {
  connectDB();
  const properties = await PropertyModel.find({}).lean();
  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-4 md:pt-6 pb-8 md:pb-12 flex justify-center min-h-dvh">
      <div className="space-y-10 max-w-320 flex-1">
        <div className="space-y-6">
          {/* <Button size="link" variant="link"> */}
          {/*   <ArrowLeft className="fill-text-tertiary" weight="bold" size={16} /> */}
          {/*   <span className="text-sm text-text-tertiary font-medium ml-2"> */}
          {/*     Back to Properties */}
          {/*   </span> */}
          {/* </Button> */}
          <PropertiesSearchBar />
        </div>
        <div className="space-y-6">
          {/* <div className="flex flex-col gap-y-1"> */}
          {/*   <p className="text-sm text-text-tertiary">10 results in</p> */}
          {/*   <p className="text-display-xs font-medium text-text-primary"> */}
          {/*     Boston, MA */}
          {/*   </p> */}
          {/* </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {properties.map((property) => (
              <PropertyCard
                key={property._id!.toString()}
                property={property}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
