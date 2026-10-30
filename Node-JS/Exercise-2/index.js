import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BookRoutes from "./routes/book.js";

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen("/", () => {
  console.log(`This is listening port ${PORT}`);
});

app.use("/books", BookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    () => console.log("MongoDB Connected Successfully ok"),
    app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`)),
  )
  .catch((err) => console.error("❌ DB connection error :", err));
