export class ReflectionEngine {
  evaluateExecution(execution) {
    const lessons = [];

    if (execution.failedTasks > 0) {
      lessons.push(
        "Improve task decomposition strategy"
      );
    }

    if (execution.duration > execution.targetDuration) {
      lessons.push(
        "Optimize planning accuracy"
      );
    }

    return {
      executionId: execution.id,
      lessons,
      score: this.calculateScore(execution),
    };
  }

  calculateScore(execution) {
    const failurePenalty =
      execution.failedTasks * 10;

    const score = Math.max(
      0,
      100 - failurePenalty
    );

    return score;
  }
}