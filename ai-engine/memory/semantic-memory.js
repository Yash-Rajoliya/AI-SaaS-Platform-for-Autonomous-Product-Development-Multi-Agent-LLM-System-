export class SemanticMemory {
  constructor(vectorMemory) {
    this.vectorMemory = vectorMemory;
  }

  async remember(concept) {
    return this.vectorMemory.upsert(
      concept.id,
      concept.embedding,
      concept
    );
  }

  async recall(queryEmbedding) {
    return this.vectorMemory.search(queryEmbedding);
  }

  async findRelated(queryEmbedding, topK = 5) {
    return this.vectorMemory.search(queryEmbedding, topK);
  }
}