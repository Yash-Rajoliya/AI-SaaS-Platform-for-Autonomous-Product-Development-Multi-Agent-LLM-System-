export class TaskDecomposer {
  decompose(requirements = {}) {
    const features = requirements.features || [];

    return features.map((feature, index) => ({
      id: `TASK-${index + 1}`,
      name: feature,
      priority: "medium",
      status: "pending",
    }));
  }
}