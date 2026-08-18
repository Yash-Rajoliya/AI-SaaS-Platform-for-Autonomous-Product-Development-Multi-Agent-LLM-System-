export class ArchitectureGenerator {
  async generate(requirements) {
    return {
      architectureStyle:
        "Microservices",
      boundedContexts:
        requirements.domains || [],
      services: [],
      generatedAt:
        new Date().toISOString(),
    };
  }
}