import { PlatformClient } from "./client";

export interface MetricPoint {
  timestamp: string;
  value: number;
}

export interface MetricsResponse {
  metric: string;
  values: MetricPoint[];
}

export interface Trace {
  traceId: string;
  durationMs: number;
  service: string;
}

export class ObservabilityAPI {
  constructor(private readonly client: PlatformClient) {}

  metrics(metric: string) {
    return this.client.request<MetricsResponse>({
      method: "GET",
      url: `/observability/metrics/${metric}`
    });
  }

  traces() {
    return this.client.request<Trace[]>({
      method: "GET",
      url: "/observability/traces"
    });
  }

  trace(traceId: string) {
    return this.client.request<Trace>({
      method: "GET",
      url: `/observability/traces/${traceId}`
    });
  }

  health() {
    return this.client.request<{
      status: string;
      services: Record<string, string>;
    }>({
      method: "GET",
      url: "/observability/health"
    });
  }
}