export class SprintPlanner {
  createSprint(tasks = [], capacity = 20) {
    const selected = [];
    let points = 0;

    for (const task of tasks) {
      const estimate = task.points || 3;

      if (points + estimate > capacity) {
        break;
      }

      selected.push(task);
      points += estimate;
    }

    return {
      sprintCapacity: capacity,
      committedPoints: points,
      tasks: selected,
    };
  }
}