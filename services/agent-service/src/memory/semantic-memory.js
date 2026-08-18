export class SemanticMemory {
  constructor() {
    this.knowledge = new Map();
  }

  index(concept, data) {
    this.knowledge.set(concept, data);
  }

  search(concept) {
    return this.knowledge.get(concept) || null;
  }

  concepts() {
    return [...this.knowledge.keys()];
  }
}