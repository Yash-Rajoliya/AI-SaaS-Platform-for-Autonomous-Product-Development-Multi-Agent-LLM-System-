# AI Platform Python SDK

Enterprise SDK for interacting with the Autonomous AI Platform.

## Installation

```bash
pip install ai-platform-sdk
```

## Usage

```python
from ai_platform_sdk import Client

client = Client(
    api_key="YOUR_API_KEY",
    base_url="https://api.platform.ai"
)

projects = client.projects.list()

print(projects)
```

## Features

- Authentication
- Agent execution
- Project management
- Deployments
- Observability
- Realtime events
- Automatic retries
- OpenTelemetry integration