import { CronScheduler } from "./cron-scheduler.js";
import { QueueScheduler } from "./queue-scheduler.js";
import { PriorityScheduler } from "./priority-scheduler.js";

export class SchedulerEngine {
  constructor() {
    this.cron = new CronScheduler();
    this.queue = new QueueScheduler();
    this.priority = new PriorityScheduler();
  }

  async schedule(job) {
    const prioritized = this.priority.assign(job);

    return this.queue.enqueue(prioritized);
  }

  async getStatus() {
    return {
      queued: this.queue.size(),
      scheduledAt: new Date().toISOString(),
    };
  }
}