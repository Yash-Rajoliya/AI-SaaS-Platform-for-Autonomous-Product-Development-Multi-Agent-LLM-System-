import { PlatformClient } from "./client";

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
}

export interface ProjectListResponse {
  items: Project[];
  total: number;
}

export class ProjectsAPI {
  constructor(private readonly client: PlatformClient) {}

  list() {
    return this.client.request<ProjectListResponse>({
      method: "GET",
      url: "/projects"
    });
  }

  get(projectId: string) {
    return this.client.request<Project>({
      method: "GET",
      url: `/projects/${projectId}`
    });
  }

  create(payload: CreateProjectRequest) {
    return this.client.request<Project>({
      method: "POST",
      url: "/projects",
      data: payload
    });
  }

  update(
    projectId: string,
    payload: Partial<CreateProjectRequest>
  ) {
    return this.client.request<Project>({
      method: "PUT",
      url: `/projects/${projectId}`,
      data: payload
    });
  }

  delete(projectId: string) {
    return this.client.request<void>({
      method: "DELETE",
      url: `/projects/${projectId}`
    });
  }
}