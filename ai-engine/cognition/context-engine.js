export class ContextEngine {
  async build(input) {
    return {
      relevance: 0.95,
      source: input.source || "unknown",
      projectId: input.projectId || null,
      metadata: input.metadata || {},
      generatedAt: new Date().toISOString(),
    };
  }
}