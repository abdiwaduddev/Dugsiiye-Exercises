import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/auth.js";

import mongoose from "mongoose";

const app = express();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`You running on port ${PORT}`);
});

app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`),
    );
  })
  .catch((err) => {
    console.error("❌ Database connection failed", err.message);
  });
