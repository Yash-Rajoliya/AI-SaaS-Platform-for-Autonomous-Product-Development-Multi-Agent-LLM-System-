export class ExecutionPlanner {
  build(tasks) {
    return tasks.map((task, index) => ({
      order: index + 1,
      task,
      status: "pending",
    }));
  }
}