import crypto from "crypto";

export class VectorMemory {
  constructor({ dimensions = 1536 } = {}) {
    this.dimensions = dimensions;
    this.store = new Map();
  }

  async upsert(id, embedding, metadata = {}) {
    if (!Array.isArray(embedding)) {
      throw new Error("Embedding must be an array");
    }

    this.store.set(id, {
      id,
      embedding,
      metadata,
      updatedAt: new Date().toISOString(),
    });

    return id;
  }

  async search(queryEmbedding, limit = 10) {
    const results = [];

    for (const item of this.store.values()) {
      const score = cosineSimilarity(queryEmbedding, item.embedding);

      results.push({
        score,
        ...item,
      });
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  generateId() {
    return crypto.randomUUID();
  }
}

function cosineSimilarity(a, b) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);

  const normA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const normB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));

  return dot / (normA * normB);
}