"use server";

import { formSchemaBackEnd } from "@/config/add-property-form";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/db";
import PropertyModel from "@/models/property";
import UserModel from "@/models/user";
import { IProperty } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProperty(values: unknown) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Not signed in");
  }
  const validatedValues = formSchemaBackEnd.safeParse(values);
  if (!validatedValues.success) {
    throw new Error("Invalid form values");
  }
  connectDB();
  const user = await UserModel.findOne({ clerk_user_id: userId });
  if (!user) {
    throw new Error("User not found");
  }

  const imageUploadPromises = validatedValues.data.imageData.map(
    async (image) => {
      const result = await cloudinary.uploader.upload(
        `data:${image.type};base64,${image.data}`,
        { folder: "realty-app" },
      );
      return result.secure_url;
    },
  );

  const imageUrls = await Promise.all(imageUploadPromises);

  const property: Omit<
    IProperty,
    "_id" | "is_featured" | "createdAt" | "updatedAt"
  > = {
    name: validatedValues.data.listingName,
    type: validatedValues.data.propertyType,
    description: validatedValues.data.description,
    location: validatedValues.data.location,
    beds: validatedValues.data.beds,
    baths: validatedValues.data.baths,
    square_feet: validatedValues.data.squareFeet,
    amenities: validatedValues.data.amenities,
    rates: validatedValues.data.rates,
    seller_info: validatedValues.data.seller_info,
    images: imageUrls,
    owner: user._id,
  };
  const newProperty = new PropertyModel(property);
  await newProperty.save();
  revalidatePath("/", "layout");
  redirect(`/properties/${newProperty._id}`);
}
