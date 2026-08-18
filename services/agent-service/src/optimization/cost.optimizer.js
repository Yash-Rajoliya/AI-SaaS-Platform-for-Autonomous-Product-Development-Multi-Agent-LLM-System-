export class CostOptimizer {
  evaluate(resources = []) {
    return resources.map((resource) => ({
      ...resource,
      recommendation:
        resource.utilization < 30
          ? "downsize"
          : "keep",
    }));
  }

  estimateSavings(resources = []) {
    return resources.reduce(
      (sum, item) =>
        sum + (item.potentialSavings || 0),
      0,
    );
  }
}