import { PlatformClient } from "./client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export class AuthAPI {
  constructor(private readonly client: PlatformClient) {}

  login(payload: LoginRequest) {
    return this.client.request<AuthResponse>({
      method: "POST",
      url: "/auth/login",
      data: payload
    });
  }

  refresh(refreshToken: string) {
    return this.client.request<AuthResponse>({
      method: "POST",
      url: "/auth/refresh",
      data: { refreshToken }
    });
  }

  logout() {
    return this.client.request<void>({
      method: "POST",
      url: "/auth/logout"
    });
  }

  me() {
    return this.client.request<UserProfile>({
      method: "GET",
      url: "/auth/me"
    });
  }
}