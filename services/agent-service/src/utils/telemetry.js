export class Telemetry {
  track(
    event,
    metadata = {},
  ) {
    return {
      event,
      metadata,
      timestamp:
        new Date().toISOString(),
    };
  }

  metric(
    name,
    value,
  ) {
    return {
      name,
      value,
      timestamp:
        new Date().toISOString(),
    };
  }
}

export const telemetry =
  new Telemetry();