import { trace } from "@opentelemetry/api";

export class Telemetry {
  private tracer = trace.getTracer(
    "autonomous-ai-sdk"
  );

  async traceOperation<T>(
    operation: string,
    fn: () => Promise<T>
  ): Promise<T> {
    const span = this.tracer.startSpan(operation);

    try {
      const result = await fn();

      span.setAttribute(
        "operation.success",
        true
      );

      return result;
    } catch (error) {
      span.recordException(error as Error);

      span.setAttribute(
        "operation.success",
        false
      );

      throw error;
    } finally {
      span.end();
    }
  }
}

export const telemetry = new Telemetry();