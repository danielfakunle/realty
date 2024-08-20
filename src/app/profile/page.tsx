import ListingCard from "@/components/listing-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Plus } from "@phosphor-icons/react/dist/ssr";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import connectDB from "@/config/db";
import PropertyModel from "@/models/property";
import UserModel from "@/models/user";

export default async function Profile() {
  const user = await currentUser();
  connectDB();
  const dbUser = await UserModel.findOne({ clerk_user_id: user?.id }).lean();
  const listings = await PropertyModel.find({ owner: dbUser?._id }).lean();
  console.log(listings);
  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-6 md:pt-8 pb-8 md:pb-12 min-h-dvh flex justify-center">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-320 flex-1">
        <Card className="p-6 lg:p-8 w-full md:w-1/3 flex flex-col items-center gap-y-8 lg:gap-y-12 h-fit">
          <div className="relative">
            <Avatar className="w-28 h-28 lg:w-32 lg:h-32">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback className="text-display-lg">CN</AvatarFallback>
            </Avatar>
            {/* TODO: Edit profile image */}
            {/* <Button */}
            {/*   className="absolute left-1/2 -translate-x-1/2 -bottom-2 text-text-secondary fill-text-secondary space-x-1.5 rounded-full" */}
            {/*   size="sm" */}
            {/*   variant="outline" */}
            {/* > */}
            {/*   <Camera size={12} /> */}
            {/*   <span>Edit</span> */}
            {/* </Button> */}
          </div>
          <div className="flex flex-col w-full gap-y-4">
            <div className="flex justify-between items-start w-full pb-4 border-b border-border-secondary">
              <div>
                <p className="text-base font-medium text-text-primary">Name</p>
                <p className="text-text-tertiary text-sm">{user?.fullName}</p>
              </div>
              {/* TODO: Edit name */}
              {/* <Button size="link" variant="link"> */}
              {/*   Edit */}
              {/* </Button> */}
            </div>
            <div className="flex justify-between items-start w-full pb-4 border-b border-border-secondary">
              <div>
                <p className="text-base font-medium text-text-primary">Email</p>
                <p className="text-text-tertiary text-sm">
                  {user?.emailAddresses[0].emailAddress}
                </p>
              </div>
              {/* TODO: Edit email */}
              {/* <Button size="link" variant="link"> */}
              {/*   Edit */}
              {/* </Button> */}
            </div>
          </div>
        </Card>
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-display-xs font-medium">Your Listings</h1>
            <Button className="space-x-1.5">
              <Plus size={16} />
              <span>Add Property</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {listings.length > 0 ? (
              listings.map((listing) => (
                <ListingCard key={listing._id.toString()} property={listing} />
              ))
            ) : (
              <p className="text-text-tertiary text-lg">No listings</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
