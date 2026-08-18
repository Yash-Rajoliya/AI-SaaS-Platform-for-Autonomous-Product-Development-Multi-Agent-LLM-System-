export class BackendGenerator {
  async generate(specification) {
    return {
      framework: "Node.js",
      architecture:
        "Clean Architecture",
      modules:
        specification.modules || [],
    };
  }
}