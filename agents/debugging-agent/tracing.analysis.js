export class TracingAnalysis {
  async analyze(traces = []) {
    const slowTraces = traces.filter(
      (trace) => trace.durationMs > 1000
    );

    return {
      totalTraces: traces.length,
      slowTraces: slowTraces.length,
      bottlenecks: slowTraces.slice(0, 10),
    };
  }
}