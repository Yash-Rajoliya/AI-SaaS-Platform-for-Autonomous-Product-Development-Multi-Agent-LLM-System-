export class RetryManager {
  constructor(maxRetries = 3) {
    this.maxRetries = maxRetries;
  }

  async execute(fn) {
    let attempt = 0;

    while (attempt < this.maxRetries) {
      try {
        return await fn();
      } catch (error) {
        attempt++;

        if (attempt >= this.maxRetries) {
          throw error;
        }
      }
    }
  }
}