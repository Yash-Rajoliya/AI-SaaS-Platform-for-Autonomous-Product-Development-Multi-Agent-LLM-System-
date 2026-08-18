import { BackendGenerator } from "./backend.generator.js";
import { FrontendGenerator } from "./frontend.generator.js";
import { MicroserviceGenerator } from "./microservice.generator.js";

export class DeveloperAgent {
  constructor({
    backend = new BackendGenerator(),
    frontend = new FrontendGenerator(),
    microservice =
      new MicroserviceGenerator(),
  } = {}) {
    this.backend = backend;
    this.frontend = frontend;
    this.microservice = microservice;
  }

  async generate(specification) {
    return {
      backend:
        await this.backend.generate(
          specification,
        ),
      frontend:
        await this.frontend.generate(
          specification,
        ),
      services:
        await this.microservice.generate(
          specification,
        ),
    };
  }
}