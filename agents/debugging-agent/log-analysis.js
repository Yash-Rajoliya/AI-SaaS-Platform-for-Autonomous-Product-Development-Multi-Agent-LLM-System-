export class LogAnalysis {
  async analyze(logs = []) {
    const errors = logs.filter((entry) =>
      entry.level?.toLowerCase() === "error"
    );

    return {
      totalLogs: logs.length,
      errors: errors.length,
      topErrors: errors.slice(0, 10),
    };
  }
}