import { E2EGenerator } from "./e2e.generator.js";
import { IntegrationGenerator } from "./integration.generator.js";
import { PerformanceGenerator } from "./performance.generator.js";

export class QAAgent {
  constructor(logger) {
    this.logger = logger;
    this.e2e = new E2EGenerator();
    this.integration = new IntegrationGenerator();
    this.performance = new PerformanceGenerator();
  }

  async generateTestSuite(project) {
    return {
      e2e: await this.e2e.generate(project),
      integration: await this.integration.generate(project),
      performance: await this.performance.generate(project),
    };
  }
}