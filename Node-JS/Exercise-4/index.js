import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import transactionRoutes from "./routes/transaction.js";

const app = express();
app.use(express.json());

import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger.js";
// import { limiter } from "./middlewares/rateLimiter.js";
import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/404.js";
dotenv.config();

const PORT = process.env.PORT || 7000;

// app.use(limiter)

app.use(
  cors({
    origin: [
      "http://localhost:9000",
      "https://mentorship-finance-tracker-api.onrender.com/",
    ],
  }),
);

app.use(logger);
// morgan
if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}
app.use(helmet());

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});

// routes
app.use("/auth", authRoutes);
app.use("/transaction", transactionRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// (swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);

// ✅  Global Error Handler – Catches all thrown errors
app.use(errorHandler);

mongoose
  .connect(
    process.env.NODE_ENV == "Development"
      ? process.env.MONGO_URI_DEV
      : process.env.MONGO_URI_PRO,
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Connection error:", err));
