import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT || 8080),

  nodeEnv:
    process.env.NODE_ENV || 'development',

  jwtSecret:
    process.env.JWT_SECRET || 'secret',

  authServiceUrl:
    process.env.AUTH_SERVICE_URL,

  agentServiceUrl:
    process.env.AGENT_SERVICE_URL,

  executionServiceUrl:
    process.env.EXECUTION_SERVICE_URL,

  observabilityServiceUrl:
    process.env.OBSERVABILITY_SERVICE_URL,
};