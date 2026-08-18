export class Logger {
  info(message, metadata = {}) {
    console.info(
      JSON.stringify({
        level: "info",
        message,
        metadata,
        timestamp:
          new Date().toISOString(),
      }),
    );
  }

  warn(message, metadata = {}) {
    console.warn(
      JSON.stringify({
        level: "warn",
        message,
        metadata,
        timestamp:
          new Date().toISOString(),
      }),
    );
  }

  error(
    message,
    error = {},
  ) {
    console.error(
      JSON.stringify({
        level: "error",
        message,
        error,
        timestamp:
          new Date().toISOString(),
      }),
    );
  }
}

export const logger = new Logger();