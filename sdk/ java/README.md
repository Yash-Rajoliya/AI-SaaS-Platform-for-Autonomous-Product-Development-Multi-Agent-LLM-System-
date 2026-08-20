# Autonomous AI Platform Java SDK

Enterprise Java SDK for interacting with the Autonomous Software Product Development Platform.

## Installation

```xml
<dependency>
    <groupId>com.aiplatform</groupId>
    <artifactId>sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

## Quick Start

```java
Client client = new Client(
    "https://api.platform.ai",
    "api-key"
);

String response =
    client.get("/projects");

System.out.println(response);
```

## Features

- Authentication
- Agent orchestration
- Project execution
- Deployments
- Observability
- Retries
- Telemetry
- Java 21 support