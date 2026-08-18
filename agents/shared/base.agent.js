import { randomUUID } from "crypto";

export class BaseAgent {
  constructor({
    id = randomUUID(),
    name,
    version = "1.0.0",
    logger,
  }) {
    this.id = id;
    this.name = name;
    this.version = version;
    this.logger = logger;
  }

  async initialize() {
    this.logger?.info(`${this.name} initialized`);
  }

  async shutdown() {
    this.logger?.info(`${this.name} shutdown`);
  }

  async execute() {
    throw new Error(
      `${this.constructor.name} must implement execute()`
    );
  }
}