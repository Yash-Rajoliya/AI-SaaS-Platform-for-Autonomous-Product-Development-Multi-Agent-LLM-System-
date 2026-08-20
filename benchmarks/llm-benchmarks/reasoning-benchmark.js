import { performance } from "node:perf_hooks";

export class ReasoningBenchmark {
  async run(reasoningEngine, scenarios = []) {
    const results = [];

    for (const scenario of scenarios) {
      const start = performance.now();

      const output =
        await reasoningEngine.solve(scenario);

      const duration =
        performance.now() - start;

      results.push({
        scenario: scenario.id,
        durationMs: duration,
        confidence: output.confidence ?? 0,
        success: output.success ?? false,
      });
    }

    return {
      benchmark: "reasoning",
      totalCases: results.length,
      averageLatency:
        results.reduce(
          (a, b) => a + b.durationMs,
          0,
        ) / results.length,
      results,
    };
  }
}