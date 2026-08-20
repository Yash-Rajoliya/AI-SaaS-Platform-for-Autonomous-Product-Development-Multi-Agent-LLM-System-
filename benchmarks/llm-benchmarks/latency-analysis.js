export class LatencyAnalysis {
  analyze(samples) {
    const sorted =
      samples.sort((a, b) => a - b);

    return {
      p50:
        sorted[Math.floor(
          sorted.length * 0.50,
        )],
      p95:
        sorted[Math.floor(
          sorted.length * 0.95,
        )],
      p99:
        sorted[Math.floor(
          sorted.length * 0.99,
        )],
    };
  }
}