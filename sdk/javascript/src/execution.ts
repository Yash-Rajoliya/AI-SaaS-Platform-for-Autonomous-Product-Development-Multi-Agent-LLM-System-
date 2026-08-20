import { PlatformClient } from "./client";

export interface Execution {
  id: string;
  projectId: string;
  status: string;
  startedAt: string;
  finishedAt?: string;
}

export interface ExecutionLogs {
  executionId: string;
  logs: string[];
}

export class ExecutionAPI {
  constructor(private readonly client: PlatformClient) {}

  list() {
    return this.client.request<Execution[]>({
      method: "GET",
      url: "/executions"
    });
  }

  get(executionId: string) {
    return this.client.request<Execution>({
      method: "GET",
      url: `/executions/${executionId}`
    });
  }

  cancel(executionId: string) {
    return this.client.request<void>({
      method: "POST",
      url: `/executions/${executionId}/cancel`
    });
  }

  logs(executionId: string) {
    return this.client.request<ExecutionLogs>({
      method: "GET",
      url: `/executions/${executionId}/logs`
    });
  }
}