export async function retry(
  operation,
  {
    retries = 3,
    delay = 1000,
  } = {},
) {
  let lastError;

  for (
    let attempt = 1;
    attempt <= retries;
    attempt++
  ) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        await new Promise((resolve) =>
          setTimeout(
            resolve,
            delay,
          ),
        );
      }
    }
  }

  throw lastError;
}