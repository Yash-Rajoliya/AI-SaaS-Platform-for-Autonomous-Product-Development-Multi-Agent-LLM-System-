export class LongTermMemory {
  constructor() {
    this.knowledgeBase = new Map();
  }

  async store(key, value) {
    this.knowledgeBase.set(key, {
      value,
      createdAt: Date.now(),
    });
  }

  async retrieve(key) {
    return this.knowledgeBase.get(key);
  }

  async exists(key) {
    return this.knowledgeBase.has(key);
  }

  async delete(key) {
    return this.knowledgeBase.delete(key);
  }
}