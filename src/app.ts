import express from "express";
import quoteRoutes from "./routes/quote.routes";
import { logger } from "./middleware/logger.middleware";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/quotes", quoteRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get("/", (req, res) => {
  res.send("Backend Internship Assignment API");
});

export default app;