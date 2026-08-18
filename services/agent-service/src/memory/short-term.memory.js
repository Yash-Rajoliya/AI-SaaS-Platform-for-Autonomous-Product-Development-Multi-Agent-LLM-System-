export class ShortTermMemory {
  constructor(limit = 100) {
    this.limit = limit;
    this.entries = [];
  }

  remember(item) {
    this.entries.push(item);

    if (this.entries.length > this.limit) {
      this.entries.shift();
    }
  }

  recent(count = 10) {
    return this.entries.slice(-count);
  }

  clear() {
    this.entries = [];
  }
}