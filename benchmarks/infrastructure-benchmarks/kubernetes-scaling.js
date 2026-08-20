export class KubernetesScalingBenchmark {
  analyze(samples) {
    return {
      minReplicas:
        Math.min(...samples),
      maxReplicas:
        Math.max(...samples),
      averageReplicas:
        samples.reduce(
          (a, b) => a + b,
          0,
        ) / samples.length,
    };
  }
}