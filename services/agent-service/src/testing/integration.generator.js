export class IntegrationGenerator {
  generate(flow = {}) {
    return {
      flow: flow.name,
      services: flow.services || [],
      scenarios: [
        "happy-path",
        "failure-path",
        "timeout-path",
      ],
      generatedAt:
        new Date().toISOString(),
    };
  }

  dependencies(flow = {}) {
    return flow.services || [];
  }
}