import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import agentRoutes from "./routes/agent.routes.js";
import reasoningRoutes from "./routes/reasoning.routes.js";
import orchestrationRoutes from "./routes/orchestration.routes.js";

export const app = express();

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(compression());

app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE || "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("combined"));

app.get("/health", (_, res) => {
  res.status(200).json({
    service: "agent-service",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

const prefix = process.env.API_PREFIX || "/api/v1";

app.use(`${prefix}/agents`, agentRoutes);
app.use(`${prefix}/reasoning`, reasoningRoutes);
app.use(`${prefix}/orchestration`, orchestrationRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});