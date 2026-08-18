export class LongTermMemory {
  constructor() {
    this.store = new Map();
  }

  save(key, value) {
    this.store.set(key, {
      value,
      timestamp: Date.now(),
    });
  }

  recall(key) {
    return this.store.get(key)?.value ?? null;
  }

  forget(key) {
    this.store.delete(key);
  }
}