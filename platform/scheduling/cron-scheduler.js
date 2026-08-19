export class CronScheduler {
  constructor() {
    this.jobs = new Map();
  }

  register(name, expression, handler) {
    this.jobs.set(name, {
      expression,
      handler,
      createdAt: Date.now(),
    });
  }

  getJob(name) {
    return this.jobs.get(name);
  }

  listJobs() {
    return [...this.jobs.keys()];
  }
}