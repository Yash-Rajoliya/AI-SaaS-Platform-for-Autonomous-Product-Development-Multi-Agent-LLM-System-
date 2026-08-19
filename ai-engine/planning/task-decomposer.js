export class TaskDecomposer {
  decompose(feature) {
    return [
      `Design ${feature}`,
      `Implement ${feature}`,
      `Test ${feature}`,
      `Document ${feature}`,
      `Deploy ${feature}`,
    ];
  }
}