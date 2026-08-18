import { KubernetesGenerator } from "./kubernetes.generator.js";
import { TerraformGenerator } from "./terraform.generator.js";
import { CIGenerator } from "./ci.generator.js";
import { ObservabilityGenerator } from "./observability.generator.js";

export class DeploymentAgent {
  constructor(logger) {
    this.logger = logger;
    this.kubernetes = new KubernetesGenerator();
    this.terraform = new TerraformGenerator();
    this.ci = new CIGenerator();
    this.observability = new ObservabilityGenerator();
  }

  async generateDeploymentStack(project) {
    this.logger.info("Generating deployment stack", {
      project: project.name,
    });

    return {
      kubernetes: await this.kubernetes.generate(project),
      terraform: await this.terraform.generate(project),
      ci: await this.ci.generate(project),
      observability: await this.observability.generate(project),
    };
  }
}