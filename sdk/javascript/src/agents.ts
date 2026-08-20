import { PlatformClient } from "./client";

export interface Agent {
  id: string;
  name: string;
  type: string;
  status: string;
  version: string;
}

export interface ExecuteAgentRequest {
  prompt: string;
  context?: Record<string, unknown>;
}

export interface AgentExecutionResponse {
  executionId: string;
  status: string;
}

export class AgentsAPI {
  constructor(private readonly client: PlatformClient) {}

  list() {
    return this.client.request<Agent[]>({
      method: "GET",
      url: "/agents"
    });
  }

  get(agentId: string) {
    return this.client.request<Agent>({
      method: "GET",
      url: `/agents/${agentId}`
    });
  }

  execute(
    agentId: string,
    payload: ExecuteAgentRequest
  ) {
    return this.client.request<AgentExecutionResponse>({
      method: "POST",
      url: `/agents/${agentId}/execute`,
      data: payload
    });
  }

  stopExecution(executionId: string) {
    return this.client.request<void>({
      method: "POST",
      url: `/agents/executions/${executionId}/stop`
    });
  }
}