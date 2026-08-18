export class InfraPlanner {
  async plan(architecture) {
    return {
      cloud: "AWS",
      orchestration:
        "Kubernetes",
      observability: [
        "Prometheus",
        "Grafana",
      ],
      architecture,
    };
  }
}