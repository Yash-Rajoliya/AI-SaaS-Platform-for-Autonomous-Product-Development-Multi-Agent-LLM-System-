export class Telemetry {
  track(event, metadata = {}) {
    console.info("telemetry:event", {
      event,
      metadata,
      timestamp: Date.now(),
    });
  }

  error(error, metadata = {}) {
    console.error("telemetry:error", {
      error,
      metadata,
      timestamp: Date.now(),
    });
  }
}

export const telemetry = new Telemetry();