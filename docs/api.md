# API Documentation

## Base URL

https://api.platform.ai

---

## Authentication

Bearer JWT

Authorization: Bearer <token>

---

## Projects

### Create Project

POST /v1/projects

### Get Project

GET /v1/projects/{id}

### Update Project

PUT /v1/projects/{id}

### Delete Project

DELETE /v1/projects/{id}

---

## Executions

### Start Execution

POST /v1/executions

### Execution Status

GET /v1/executions/{id}

### Cancel Execution

DELETE /v1/executions/{id}

---

## Agents

GET /v1/agents

POST /v1/agents/execute

GET /v1/agents/{id}

---

## Observability

GET /v1/metrics

GET /v1/traces

GET /v1/logs

---

## Governance

GET /v1/compliance

GET /v1/audit

GET /v1/policies