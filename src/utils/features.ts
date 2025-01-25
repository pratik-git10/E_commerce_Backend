import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI!, {
      dbName: "e_commerce",
    })
    .then((c) => {
      console.log("DB connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
