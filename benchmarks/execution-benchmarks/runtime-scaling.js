export class RuntimeScalingBenchmark {
  evaluate(nodes) {
    const metrics = nodes.map(node => ({
      nodeId: node.id,
      cpuUtilization: node.cpu,
      memoryUtilization: node.memory,
      throughput: node.throughput,
    }));

    const throughput =
      metrics.reduce(
        (sum, n) => sum + n.throughput,
        0,
      );

    return {
      nodeCount: nodes.length,
      aggregateThroughput: throughput,
      scalingEfficiency:
        throughput / nodes.length,
      metrics,
    };
  }
}