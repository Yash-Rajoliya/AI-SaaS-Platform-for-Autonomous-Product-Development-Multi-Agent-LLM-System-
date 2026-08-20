import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from "axios";

import {
  DEFAULT_CONFIG,
  SDKConfig
} from "./config";

import {
  AuthenticationError,
  NetworkError,
  RateLimitError,
  ServerError
} from "./errors";

import { withRetry } from "./retry";

export class PlatformClient {
  readonly http: AxiosInstance;
  readonly config: SDKConfig;

  constructor(config: SDKConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config
    };

    this.http = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        Authorization: this.config.apiKey
          ? `Bearer ${this.config.apiKey}`
          : undefined,
        "User-Agent":
          this.config.userAgent
      }
    });

    this.installInterceptors();
  }

  private installInterceptors() {
    this.http.interceptors.response.use(
      response => response,
      error => {
        const status = error?.response?.status;

        if (status === 401) {
          throw new AuthenticationError(
            "Unauthorized",
            { status }
          );
        }

        if (status === 429) {
          throw new RateLimitError(
            "Rate limit exceeded",
            { status }
          );
        }

        if (status >= 500) {
          throw new ServerError(
            "Server error",
            { status }
          );
        }

        throw new NetworkError(
          error.message
        );
      }
    );
  }

  async request<T>(
    config: AxiosRequestConfig
  ): Promise<T> {
    return withRetry(
      async () => {
        const response =
          await this.http.request<T>(config);

        return response.data;
      },
      {
        attempts:
          this.config.retries ??
          DEFAULT_CONFIG.retries
      }
    );
  }
}