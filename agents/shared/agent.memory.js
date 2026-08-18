export class AgentMemory {
  constructor() {
    this.shortTerm = new Map();
    this.longTerm = new Map();
  }

  remember(key, value) {
    this.shortTerm.set(key, value);
  }

  recall(key) {
    return this.shortTerm.get(key);
  }

  persist(key, value) {
    this.longTerm.set(key, value);
  }

  retrieve(key) {
    return this.longTerm.get(key);
  }

  clear() {
    this.shortTerm.clear();
  }
}