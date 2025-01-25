import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import { connectDb } from "./utils/features.js";
connectDb();
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
app.use("/api/v1/user", userRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
