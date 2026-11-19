import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Tracker API",
      version: "1.0.0",
      description: "API documentation for our Finance Tracker backend",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV == "Development"
            ? "http://localhost:9000"
            : "https://mentorship-task-api.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], // Where your route files live
};

export const swaggerSpec = swaggerJSDoc(options);
