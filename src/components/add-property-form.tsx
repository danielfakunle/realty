"use client";

import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { amenities, formSchema } from "@/config/add-property-form";
import PropertyTypeSelect from "./property-type-select";
import { Checkbox } from "./ui/checkbox";
import { addProperty } from "@/app/actions/add-property";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const testValues = {
  propertyType: "apartment",
  listingName: "Modern Downtown Apartment",
  description:
    "A spacious, sunlit apartment located in the heart of the city. Perfect for young professionals or couples, this loft features high ceilings, an open floor plan, and a contemporary design.",
  location: {
    street: "1234 Main Street",
    city: "Metropolis",
    state: "NY",
    zipcode: "10001",
  },
  beds: 2,
  baths: 2,
  squareFeet: 1200,
  amenities: ["WiFi", "Dishwasher"],
  rates: {
    weekly: 1500,
    monthly: 5000,
    nightly: 250,
  },
  seller_info: {
    name: "Daniel Fak",
    email: "bossybest48@gmail.com",
    phone: "1234567890",
  },
  images: [],
};

const defaultValues = {
  propertyType: "apartment",
  listingName: "",
  description: "",
  location: {
    street: "",
    city: "",
    state: "",
    zipcode: "",
  },
  beds: 0,
  baths: 0,
  squareFeet: 0,
  amenities: [],
  rates: {
    weekly: 0,
    monthly: 0,
    nightly: 0,
  },
  seller_info: {
    name: "",
    email: "",
    phone: "",
  },
  images: [],
};

export default function AddPropertyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const [open, setOpen] = React.useState(false);

  async function convertImagesToBase64(images: File[]) {
    let types: string[] = [];
    const imagePromises = images.map(async (image) => {
      const imageBuffer = await image.arrayBuffer();
      types.push(image.type);
      const imageBase64 = Buffer.from(new Uint8Array(imageBuffer)).toString(
        "base64",
      );

      return imageBase64;
    });

    const imagesBase64 = await Promise.all(imagePromises);
    const imageData = [];
    for (let i = 0; i < imagesBase64.length; i++) {
      imageData.push({ data: imagesBase64[i], type: types[i] });
    }
    return imageData;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let imageData = await convertImagesToBase64(values.images);
    const pojo = await {
      ...JSON.parse(JSON.stringify(values)),
      imageData: imageData,
    };
    await addProperty(pojo);
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset(defaultValues);
      setOpen(false);
    }
  }, [form.formState.isSubmitSuccessful, form]);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Link
          className={buttonVariants({ variant: "link", size: "link" })}
          href="#"
        >
          Add property
        </Link>
      </DialogTrigger>
      <DialogContent className="max-h-192 overflow-auto">
        <DialogHeader>
          <DialogTitle>Add property</DialogTitle>
          <DialogDescription>
            This property will be added as one of your listings and will be
            visible to all users.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-medium">Overview</h3>
                <p className="text-sm text-text-quaternary">
                  Provide general details about the property
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="listingName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <PropertyTypeSelect
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                        className="border-border-secondary shadow-xs h-9 text-sm placeholder:text-text-placeholder"
                        contentClassName="rounded-2xl"
                        viewportClassName="p-4"
                        variant="form"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea className="resize-none h-28" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-medium">Location</h3>
                <p className="text-sm text-text-quaternary">
                  Enter the property’s location details.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location.zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-medium">Specifications</h3>
                <p className="text-sm text-text-quaternary">
                  Include specific details about the property’s size and number
                  of rooms
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="beds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beds</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="baths"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Baths</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="squareFeet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Square Feet</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="amenities"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Amenities</FormLabel>
                    <FormDescription>
                      List the additional features or conveniences that come
                      with the property
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {amenities.map((amenity) => (
                      <FormField
                        key={`amenity-${amenity}`}
                        control={form.control}
                        name="amenities"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={`amenity-${amenity}`}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(amenity)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          amenity,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== amenity,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {amenity}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-medium">Rates</h3>
                <p className="text-sm text-text-quaternary">
                  Provide pricing details based on different rental periods
                  (Leave blank if not applicable).
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="rates.monthly"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rates.weekly"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weekly</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rates.nightly"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nightly</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-medium">Seller Info</h3>
                <p className="text-sm text-text-quaternary">
                  Enter your contact information.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="seller_info.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seller_info.email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seller_info.phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium">Images</h3>
                <p className="text-sm text-text-quaternary">
                  Upload images of the property
                </p>
              </div>
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        {...field}
                        value={undefined}
                        onChange={(event) =>
                          event.target.files
                            ? field.onChange(Array.from(event.target.files))
                            : []
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                disabled={form.formState.isSubmitting}
                size="lg"
                type="submit"
              >
                <ReloadIcon
                  className={cn("hidden mr-2 h-4 w-4 animate-spin", {
                    block: form.formState.isSubmitting,
                  })}
                />
                Add Property
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
