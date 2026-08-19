export class CostOptimizer {
  constructor({ logger } = {}) {
    this.logger = logger;
  }

  analyze(resources = []) {
    const totalCost = resources.reduce(
      (sum, resource) => sum + (resource.monthlyCost || 0),
      0
    );

    const recommendations = resources
      .filter(resource => resource.utilization < 0.4)
      .map(resource => ({
        resourceId: resource.id,
        recommendation: "rightsizing",
        potentialSavings: Number(
          ((resource.monthlyCost || 0) * 0.3).toFixed(2)
        ),
      }));

    return {
      totalCost,
      estimatedSavings: recommendations.reduce(
        (sum, item) => sum + item.potentialSavings,
        0
      ),
      recommendations,
    };
  }

  optimize(resources = []) {
    const report = this.analyze(resources);

    this.logger?.info?.(
      "Cost optimization completed",
      report
    );

    return report;
  }
}