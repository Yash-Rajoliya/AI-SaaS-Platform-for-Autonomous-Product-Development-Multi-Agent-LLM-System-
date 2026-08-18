export class IntegrationGenerator {
  async generate(project) {
    return {
      framework: "jest",
      services: [
        "agent-service",
        "execution-service",
        "observability-service",
      ],
      project: project.slug,
    };
  }
}