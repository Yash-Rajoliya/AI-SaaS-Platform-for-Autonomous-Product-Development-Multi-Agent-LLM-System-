export class MemoryEngine {
  constructor() {
    this.shortTermMemory = new Map();
    this.longTermMemory = new Map();
    this.episodicMemory = [];
  }

  async store(key, value, options = {}) {
    const memory = {
      key,
      value,
      timestamp: new Date().toISOString(),
      importance: options.importance || "medium",
      metadata: options.metadata || {}
    };

    this.shortTermMemory.set(key, memory);

    if (
      options.persist === true ||
      options.importance === "high"
    ) {
      this.longTermMemory.set(key, memory);
    }

    return memory;
  }

  async recall(key) {
    return (
      this.shortTermMemory.get(key) ||
      this.longTermMemory.get(key) ||
      null
    );
  }

  async rememberPattern(pattern) {
    this.episodicMemory.push({
      type: "pattern",
      value: pattern,
      timestamp: new Date().toISOString()
    });

    return true;
  }

  async recentExperiences(limit = 20) {
    return this.episodicMemory.slice(-limit);
  }

  async consolidate() {
    for (const [key, value] of this.shortTermMemory) {
      if (value.importance === "high") {
        this.longTermMemory.set(key, value);
      }
    }

    return {
      consolidated: true,
      totalLongTermMemories:
        this.longTermMemory.size
    };
  }

  async statistics() {
    return {
      shortTerm: this.shortTermMemory.size,
      longTerm: this.longTermMemory.size,
      episodes: this.episodicMemory.length
    };
  }
}