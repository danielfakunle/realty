import { Types, HydratedDocument, Model } from "mongoose";

export interface IProperty {
  _id?: Types.ObjectId;
  owner: Types.ObjectId;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities?: string[];
  rates: {
    weekly?: number;
    monthly?: number;
    nightly?: number;
  };
  seller_info: { name: string; email: string; phone: string };
  images: string[];
  is_featured: boolean;
  createdAt: number;
  updatedAt: number;
}

export type PropertyHydratedDocument = HydratedDocument<IProperty>;
export type PropertyModelType = Model<
  IProperty,
  {},
  {},
  {},
  PropertyHydratedDocument // THydratedDocumentType
>;

export interface IUser {
  _id?: Types.ObjectId;
  email: string;
  full_name?: string;
  clerk_user_id: string;
  image: string;
  bookmarks: Types.ObjectId[];
}

export type UserHydratedDocument = HydratedDocument<IUser>;
export type UserModelType = Model<
  IUser,
  {},
  {},
  {},
  UserHydratedDocument // THydratedDocumentType
>;
