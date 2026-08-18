export class RepositoryGenerator {
  generate({
    name,
    description,
    visibility = "private",
  }) {
    return {
      name,
      description,
      visibility,
      branches: ["main", "develop"],
      templates: [
        "README.md",
        "LICENSE",
        ".github",
      ],
      generatedAt:
        new Date().toISOString(),
    };
  }
}