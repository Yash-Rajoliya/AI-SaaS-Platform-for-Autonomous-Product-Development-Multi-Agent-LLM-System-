import cron from "node-cron";

export class CronWorkflowScheduler {
  constructor(engine) {
    this.engine = engine;
  }

  register(cronExpression, workflow) {
    return cron.schedule(
      cronExpression,
      async () => {
        await this.engine.execute(
          workflow
        );
      }
    );
  }
}