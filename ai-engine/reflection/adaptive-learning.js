export class AdaptiveLearning {
  constructor() {
    this.feedbackHistory = [];
  }

  learn(feedback) {
    this.feedbackHistory.push({
      ...feedback,
      timestamp: Date.now(),
    });

    return this.generateInsights();
  }

  generateInsights() {
    const total =
      this.feedbackHistory.length;

    const positive =
      this.feedbackHistory.filter(
        item => item.score >= 4
      ).length;

    return {
      samples: total,
      satisfactionRate:
        total === 0
          ? 0
          : Number(
              ((positive / total) * 100).toFixed(2)
            ),
    };
  }
}