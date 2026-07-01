import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Internship Assignment API",
      version: "1.0.0",
    },
  },
  apis: [],
};

export const swaggerSpec = swaggerJsdoc(options);