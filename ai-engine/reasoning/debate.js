export class Debate {
  async run(argumentsList = []) {
    return {
      positions: argumentsList,
      outcome:
        argumentsList.length > 1
          ? "best-supported-position"
          : "single-position",
      completedAt: new Date().toISOString(),
    };
  }
}