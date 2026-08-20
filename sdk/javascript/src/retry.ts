export interface RetryOptions {
  attempts: number;
  baseDelay?: number;
}

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions
): Promise<T> {
  let lastError: unknown;

  for (let i = 0; i < options.attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (i < options.attempts - 1) {
        const delay =
          (options.baseDelay ?? 500) * Math.pow(2, i);

        await sleep(delay);
      }
    }
  }

  throw lastError;
}