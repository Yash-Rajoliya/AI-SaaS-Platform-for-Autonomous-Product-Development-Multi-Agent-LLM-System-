export class WorkflowRecoveryManager {
  constructor({
    persistence,
    runner,
    logger,
  }) {
    this.persistence =
      persistence;

    this.runner = runner;

    this.logger = logger;
  }

  async recoverFailedWorkflows() {
    const failed =
      await this.persistence.list({
        state: "FAILED",
      });

    for (const workflow of failed) {
      try {
        await this.runner.resume(
          workflow,
          workflow.lastCheckpoint
        );

        this.logger.info(
          `Recovered workflow ${workflow.id}`
        );
      } catch (error) {
        this.logger.error(
          error,
          `Recovery failed for ${workflow.id}`
        );
      }
    }
  }
}