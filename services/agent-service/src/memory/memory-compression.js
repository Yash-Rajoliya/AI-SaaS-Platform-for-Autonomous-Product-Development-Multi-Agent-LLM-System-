export class MemoryCompression {
  compress(records = []) {
    const unique = new Map();

    for (const record of records) {
      unique.set(
        JSON.stringify(record),
        record,
      );
    }

    return [...unique.values()];
  }

  summarize(records = []) {
    return {
      total: records.length,
      compressed: this.compress(records).length,
    };
  }
}