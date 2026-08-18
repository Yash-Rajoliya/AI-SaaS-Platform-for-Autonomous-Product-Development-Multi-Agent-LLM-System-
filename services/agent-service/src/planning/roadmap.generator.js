export class RoadmapGenerator {
  generate(tasks = []) {
    return {
      quarters: [
        {
          quarter: "Q1",
          initiatives: tasks.slice(0, 5),
        },
        {
          quarter: "Q2",
          initiatives: tasks.slice(5, 10),
        },
      ],
      generatedAt: new Date().toISOString(),
    };
  }
}