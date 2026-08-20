# Autonomous AI Platform Go SDK

Enterprise-grade Go SDK for the Autonomous Software Product Development Platform.

## Installation

```bash
go get github.com/autonomous-ai/platform-sdk-go
```

## Usage

```go
client := sdk.NewClient(
    "https://api.platform.ai",
    "api-key",
)

projects, err := client.Get("/projects")
```

## Features

- Authentication
- Agent orchestration
- Project execution
- Deployments
- Observability
- Realtime WebSockets
- Retries
- Telemetry