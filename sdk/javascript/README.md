# Autonomous AI Platform SDK

Official JavaScript/TypeScript SDK.

## Installation

```bash
npm install @autonomous-ai/sdk
```

## Quick Start

```ts
import { PlatformClient } from "@autonomous-ai/sdk";

const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY!,
  baseUrl: "https://api.example.com"
});

const projects = await client.projects.list();

console.log(projects);
```

## Features

- Agent orchestration
- Project management
- Execution monitoring
- Deployment automation
- Observability APIs
- WebSocket realtime updates
- Automatic retries
- Telemetry support

## Authentication

```ts
const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY!,
  baseUrl: "https://api.example.com"
});
```

## License

MIT