import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/TaskRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const DBUrl = process.env.DATABASE_URI;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(express.json());

app.use("/api/task", taskRoutes);

app.listen(port, () => {
  console.log(`Connected to port : ${port}`);
});

mongoose
  .connect(DBUrl)
  .then(() => console.log("Successfully connected to DB"))
  .catch((error) => console.log(error.message));
