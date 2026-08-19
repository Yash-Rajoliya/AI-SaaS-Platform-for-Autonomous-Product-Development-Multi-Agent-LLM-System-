export class PriorityScheduler {
  assign(job) {
    return {
      ...job,
      priority: job.priority ?? "normal",
      assignedAt: new Date().toISOString(),
    };
  }

  sort(jobs) {
    const ranking = {
      critical: 1,
      high: 2,
      normal: 3,
      low: 4,
    };

    return jobs.sort(
      (a, b) => ranking[a.priority] - ranking[b.priority]
    );
  }
}