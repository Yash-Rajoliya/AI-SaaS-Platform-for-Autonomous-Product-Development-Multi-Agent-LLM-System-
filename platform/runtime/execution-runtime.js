export class ExecutionRuntime {
  async execute(task) {
    const start = Date.now();

    try {
      const result = await task.handler(task.input);

      return {
        success: true,
        result,
        durationMs: Date.now() - start,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        durationMs: Date.now() - start,
      };
    }
  }
}