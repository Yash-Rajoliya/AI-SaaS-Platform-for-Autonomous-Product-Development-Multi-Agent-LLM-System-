export class RepositoryGenerator {
  create({
    name,
    visibility = "private",
  }) {
    return {
      name,
      visibility,
      branches: [
        "main",
        "develop",
      ],
      initialized:
        new Date().toISOString(),
    };
  }
}