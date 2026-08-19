export class RetryRecovery {
  async recover(fn, attempts = 3) {
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === attempts - 1) throw error;
      }
    }
  }
}