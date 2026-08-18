export class ReleaseGenerator {
  createRelease({
    version,
    changes = [],
  }) {
    return {
      version,
      changelog: changes,
      generatedAt:
        new Date().toISOString(),
      artifacts: [],
    };
  }

  generateNotes(changes = []) {
    return changes
      .map((item) => `- ${item}`)
      .join("\n");
  }
}