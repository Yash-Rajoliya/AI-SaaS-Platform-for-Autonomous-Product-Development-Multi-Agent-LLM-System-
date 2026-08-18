import http from "http";
import { app } from "./app.js";

export async function bootstrap() {
  const port = Number(process.env.PORT || 4001);

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Agent Service running on port ${port}`);
  });

  const gracefulShutdown = async (signal) => {
    console.log(`${signal} received. Starting graceful shutdown.`);

    server.close(() => {
      console.log("HTTP server stopped.");
      process.exit(0);
    });
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  return server;
}