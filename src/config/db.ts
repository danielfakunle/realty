import mongoose from "mongoose";

let connected = false;

export default async function connectDB() {
  mongoose.set("strictQuery", true);

  // If database is already conencted don't connect again
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  // Connnect to MongoDB
  try {
    if (!process.env.MONGODB_URI) throw new Error("Missing MONGODB_URI");
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
}
