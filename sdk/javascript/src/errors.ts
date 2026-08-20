export class SDKError extends Error {
  readonly code?: string;
  readonly status?: number;

  constructor(
    message: string,
    options?: {
      code?: string;
      status?: number;
    }
  ) {
    super(message);

    this.name = this.constructor.name;
    this.code = options?.code;
    this.status = options?.status;
  }
}

export class AuthenticationError extends SDKError {}

export class ValidationError extends SDKError {}

export class RateLimitError extends SDKError {}

export class NetworkError extends SDKError {}

export class ServerError extends SDKError {}