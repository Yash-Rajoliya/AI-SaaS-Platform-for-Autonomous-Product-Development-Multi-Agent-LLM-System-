export class SprintPlanner {
  create(backlog) {
    const sprintSize = 10;

    const sprints = [];

    for (
      let i = 0;
      i < backlog.length;
      i += sprintSize
    ) {
      sprints.push(
        backlog.slice(i, i + sprintSize)
      );
    }

    return sprints;
  }
}