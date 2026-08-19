export class SelfImprovement {
  generateActions(reflection) {
    const actions = [];

    if (reflection.score < 70) {
      actions.push({
        priority: "high",
        action:
          "Review planning and execution strategy",
      });
    }

    reflection.lessons.forEach(lesson => {
      actions.push({
        priority: "medium",
        action: lesson,
      });
    });

    return actions;
  }

  improve(reflection) {
    return {
      generatedAt: new Date().toISOString(),
      actions:
        this.generateActions(reflection),
    };
  }
}