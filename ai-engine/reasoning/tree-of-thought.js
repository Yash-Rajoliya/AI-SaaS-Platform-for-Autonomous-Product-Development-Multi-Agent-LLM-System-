export class TreeOfThought {
  async execute(problem) {
    return {
      root: problem.goal || "undefined",
      branches: [
        {
          path: "Option A",
          score: 0.84,
        },
        {
          path: "Option B",
          score: 0.78,
        },
      ],
      selected: "Option A",
    };
  }
}