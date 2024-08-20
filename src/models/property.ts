import { IProperty, PropertyModelType } from "@/types";
import { model, models, Schema } from "mongoose";

const propertySchema = new Schema<IProperty, PropertyModelType>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
      },
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [String],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      type: {
        name: String,
        email: String,
        phone: String,
      },
      required: true,
    },
    images: { type: [String], required: true },
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
const PropertyModel: PropertyModelType =
  models.Property ||
  model<IProperty, PropertyModelType>("Property", propertySchema);
export default PropertyModel;
