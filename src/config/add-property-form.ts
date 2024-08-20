import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];

export const formSchema = z.object({
  propertyType: z.string().min(2).max(50),
  listingName: z
    .string()
    .min(2, { message: "Must have at least two characters" })
    .max(50, { message: "Must have at most 50 characters" }),
  description: z
    .string()
    .min(2, { message: "Must have at least two characters" })
    .max(2000, { message: "Must have at most 2000 characters" }),
  location: z.object({
    street: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    city: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    state: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    zipcode: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
  }),
  beds: z.coerce.number().min(0, { message: "Must have at least one bed" }),
  baths: z.coerce.number().min(0, { message: "Must have at least one bath" }),
  squareFeet: z.coerce
    .number()
    .min(1, { message: "Must have at least one square foot" }),
  amenities: z.string().array(),
  rates: z
    .object({
      weekly: z.coerce.number(),
      monthly: z.coerce.number(),
      nightly: z.coerce.number(),
    })
    .refine(({ weekly, monthly, nightly }) => weekly + monthly + nightly > 0, {
      message: "Must have at least one rate",
      path: ["monthly"],
    })
    .transform((data) => ({
      ...data,
      weekly:
        data.weekly === undefined || data.weekly <= 0 ? undefined : data.weekly,
      monthly:
        data.monthly === undefined || data.monthly <= 0
          ? undefined
          : data.monthly,
      nightly:
        data.nightly === undefined || data.nightly <= 0
          ? undefined
          : data.nightly,
    })),
  seller_info: z
    .object({
      name: z
        .string()
        .min(2, { message: "Must have at least two characters" })
        .max(50, { message: "Must have at most 50 characters" }),
      email: z.string().email(),
      phone: z
        .string()
        .min(10, { message: "Invalid phone number" })
        .max(10, { message: "Invalid phone number" }),
    })
    .required(),
  images: z
    .instanceof(File)
    .array()
    .refine((images) => images.length > 0, "Must have at least one image")
    .refine((images) => {
      for (const image of images) {
        if (image.size > MAX_UPLOAD_SIZE) {
          return false;
        }
      }
      return true;
    }, "Each file must be less than 3MB")
    .refine((images) => {
      for (const image of images) {
        if (!ACCEPTED_FILE_TYPES.includes(image.type)) {
          return false;
        }
      }
      return true;
    }, "Each image must be a PNG or JPG"),
});

export const formSchemaBackEnd = z.object({
  propertyType: z.string().min(2).max(50),
  listingName: z
    .string()
    .min(2, { message: "Must have at least two characters" })
    .max(50, { message: "Must have at most 50 characters" }),
  description: z
    .string()
    .min(2, { message: "Must have at least two characters" })
    .max(2000, { message: "Must have at most 2000 characters" }),
  location: z.object({
    street: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    city: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    state: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
    zipcode: z
      .string()
      .min(2, { message: "Must have at least two characters" })
      .max(50, { message: "Must have at most 50 characters" }),
  }),
  beds: z.coerce.number().min(0, { message: "Must have at least one bed" }),
  baths: z.coerce.number().min(0, { message: "Must have at least one bath" }),
  squareFeet: z.coerce
    .number()
    .min(1, { message: "Must have at least one square foot" }),
  amenities: z.string().array(),
  rates: z
    .object({
      weekly: z.coerce.number(),
      monthly: z.coerce.number(),
      nightly: z.coerce.number(),
    })
    .partial(),
  seller_info: z
    .object({
      name: z
        .string()
        .min(2, { message: "Must have at least two characters" })
        .max(50, { message: "Must have at most 50 characters" }),
      email: z.string().email(),
      phone: z
        .string()
        .min(10, { message: "Invalid phone number" })
        .max(10, { message: "Invalid phone number" }),
    })
    .required(),
  imageData: z
    .object({
      data: z.string(),
      type: z.string(),
    })
    .array(),
});

export const amenities = [
  "WiFi",
  "Free Parking",
  "24/7 Security",
  "Dishwasher",
  "Balcony/Patio",
  "Full Kitchen",
  "Swimming Pool",
  "Wheelchair Accessible",
  "Gym/Fitness Center",
  "Smart TV",
  "Washer/Dryer",
  "Hot Tub",
  "Elevator Access",
  "Air Conditioning",
  "Coffee Maker",
];
