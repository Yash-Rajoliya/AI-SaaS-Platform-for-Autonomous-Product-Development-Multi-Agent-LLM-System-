export class RedisPerformanceBenchmark {
  benchmark(stats) {
    return {
      averageLatencyMs:
        stats.averageLatency,
      cacheHitRate:
        stats.hits /
        (stats.hits + stats.misses),
      operationsPerSecond:
        stats.opsPerSecond,
    };
  }
}