export class VectorSearchLatency {
  analyze(searches) {
    return {
      average:
        searches.reduce(
          (a, b) => a + b,
          0,
        ) / searches.length,
      max: Math.max(...searches),
      min: Math.min(...searches),
    };
  }
}