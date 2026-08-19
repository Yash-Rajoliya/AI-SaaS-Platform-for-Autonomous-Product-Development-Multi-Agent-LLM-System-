export class SchedulingAnalytics {
  generate(jobs) {
    return {
      totalJobs: jobs.length,
      completed: jobs.filter(
        (j) => j.status === "completed"
      ).length,
      failed: jobs.filter(
        (j) => j.status === "failed"
      ).length,
      generatedAt: new Date().toISOString(),
    };
  }
}