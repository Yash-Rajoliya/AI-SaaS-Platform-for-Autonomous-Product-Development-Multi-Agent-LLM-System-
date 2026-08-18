import { ArchitectureGenerator } from "./architecture.generator.js";
import { ScalabilityAnalyzer } from "./scalability.analyzer.js";
import { InfraPlanner } from "./infra.planner.js";

export class ArchitectAgent {
  constructor({
    generator = new ArchitectureGenerator(),
    analyzer = new ScalabilityAnalyzer(),
    infraPlanner = new InfraPlanner(),
  } = {}) {
    this.generator = generator;
    this.analyzer = analyzer;
    this.infraPlanner = infraPlanner;
  }

  async design(requirements) {
    const architecture =
      await this.generator.generate(
        requirements,
      );

    const scalability =
      await this.analyzer.analyze(
        architecture,
      );

    const infrastructure =
      await this.infraPlanner.plan(
        architecture,
      );

    return {
      architecture,
      scalability,
      infrastructure,
    };
  }
}