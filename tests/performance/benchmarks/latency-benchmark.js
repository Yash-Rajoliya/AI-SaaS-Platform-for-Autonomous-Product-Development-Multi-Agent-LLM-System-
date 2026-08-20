import { performance } from "node:perf_hooks";

export function benchmarkLatency() {
  const start = performance.now();

  JSON.stringify({
    benchmark: true,
  });

  return performance.now() - start;
}