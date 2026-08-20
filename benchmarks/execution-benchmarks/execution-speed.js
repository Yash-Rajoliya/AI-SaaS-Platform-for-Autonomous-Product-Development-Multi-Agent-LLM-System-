import { performance } from "node:perf_hooks";

export class ExecutionSpeedBenchmark {
  async benchmark(executor, workloads = []) {
    const results = [];

    for (const workload of workloads) {
      const start = performance.now();

      const result =
        await executor.execute(workload);

      const duration =
        performance.now() - start;

      results.push({
        workloadId: workload.id,
        durationMs: Number(duration.toFixed(2)),
        success: result.success === true,
      });
    }

    const total =
      results.reduce(
        (sum, r) => sum + r.durationMs,
        0,
      );

    return {
      benchmark: "execution-speed",
      totalExecutions: results.length,
      averageLatencyMs:
        total / results.length,
      results,
    };
  }
}