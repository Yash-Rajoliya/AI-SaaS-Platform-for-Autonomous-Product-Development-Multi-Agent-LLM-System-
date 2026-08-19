export class AutonomousRefactoring {
  generatePlan(analysis) {
    const tasks = [];

    if (analysis.technicalDebtScore > 20) {
      tasks.push({
        priority: "high",
        task:
          "Reduce technical debt hotspots",
      });
    }

    analysis.staleModules.forEach(module => {
      tasks.push({
        priority: "medium",
        task: `Refactor module ${module.name}`,
      });
    });

    return {
      generatedAt: new Date().toISOString(),
      tasks,
    };
  }

  prioritize(plan) {
    return [...plan.tasks].sort((a, b) => {
      const priorityMap = {
        high: 3,
        medium: 2,
        low: 1,
      };

      return (
        priorityMap[b.priority] -
        priorityMap[a.priority]
      );
    });
  }
}