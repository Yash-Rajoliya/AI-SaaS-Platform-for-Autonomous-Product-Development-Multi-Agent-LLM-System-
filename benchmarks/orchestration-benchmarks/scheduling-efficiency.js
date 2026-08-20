export class SchedulingEfficiency {
  evaluate(tasks) {
    const completed =
      tasks.filter(t => t.completed);

    return {
      scheduled: tasks.length,
      completed: completed.length,
      efficiency:
        completed.length /
        tasks.length,
    };
  }
}