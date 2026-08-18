export class E2EGenerator {
  async generate(project) {
    return {
      framework: "playwright",
      scenarios: [
        "authentication",
        "project creation",
        "deployment workflow",
      ],
      project: project.slug,
    };
  }
}