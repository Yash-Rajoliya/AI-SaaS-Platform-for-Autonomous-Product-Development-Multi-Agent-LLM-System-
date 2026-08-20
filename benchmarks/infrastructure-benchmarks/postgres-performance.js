export class PostgresPerformanceBenchmark {
  benchmark(metrics) {
    return {
      averageQueryTimeMs:
        metrics.queryLatency,
      transactionsPerSecond:
        metrics.tps,
      connectionUtilization:
        metrics.connections,
    };
  }
}