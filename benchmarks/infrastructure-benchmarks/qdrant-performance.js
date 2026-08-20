export class QdrantPerformanceBenchmark {
  benchmark(metrics) {
    return {
      vectorsIndexed:
        metrics.indexedVectors,
      searchLatencyMs:
        metrics.searchLatency,
      indexingLatencyMs:
        metrics.indexingLatency,
      recall:
        metrics.recall,
    };
  }
}