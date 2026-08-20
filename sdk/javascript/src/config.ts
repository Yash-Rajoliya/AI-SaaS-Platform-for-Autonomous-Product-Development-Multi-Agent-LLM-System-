export interface SDKConfig {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
  retries?: number;
  userAgent?: string;
}

export const DEFAULT_CONFIG: Required<
  Omit<SDKConfig, "apiKey">
> = {
  baseUrl: "http://localhost:8080",
  timeout: 30000,
  retries: 3,
  userAgent: "autonomous-ai-sdk/1.0.0"
};