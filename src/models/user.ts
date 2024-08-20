import { IUser, UserModelType } from "@/types";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<IUser, UserModelType>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    full_name: {
      type: String,
    },
    clerk_user_id: {
      type: String,
      required: [true, "Clerk user id is required"],
    },
    image: String,
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true },
);

const UserModel: UserModelType =
  models.User || model<IUser, UserModelType>("User", userSchema);
export default UserModel;
