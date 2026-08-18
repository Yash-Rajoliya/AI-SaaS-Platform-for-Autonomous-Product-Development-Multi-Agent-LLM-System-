import dotenv from "dotenv";
import { bootstrap } from "./src/bootstrap.js";

dotenv.config();

bootstrap().catch((error) => {
  console.error("Fatal startup error:", error);
  process.exit(1);
});