import { PlatformClient } from "./client";

export interface Deployment {
  id: string;
  environment: string;
  status: string;
  version: string;
  createdAt: string;
}

export interface DeploymentRequest {
  projectId: string;
  environment: string;
}

export class DeploymentsAPI {
  constructor(private readonly client: PlatformClient) {}

  list() {
    return this.client.request<Deployment[]>({
      method: "GET",
      url: "/deployments"
    });
  }

  get(deploymentId: string) {
    return this.client.request<Deployment>({
      method: "GET",
      url: `/deployments/${deploymentId}`
    });
  }

  create(payload: DeploymentRequest) {
    return this.client.request<Deployment>({
      method: "POST",
      url: "/deployments",
      data: payload
    });
  }

  rollback(deploymentId: string) {
    return this.client.request<void>({
      method: "POST",
      url: `/deployments/${deploymentId}/rollback`
    });
  }
}