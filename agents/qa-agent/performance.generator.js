export class PerformanceGenerator {
  async generate(project) {
    return {
      framework: "k6",
      targets: {
        rps: 1000,
        latencyP95: "200ms",
      },
    };
  }
}