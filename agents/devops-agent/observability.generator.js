export class ObservabilityGenerator {
  async generate(project) {
    return {
      metrics: true,
      logging: true,
      tracing: true,
      alerts: true,
      dashboards: true,
    };
  }

  generateMonitoringPlan() {
    return {
      prometheus: true,
      grafana: true,
      loki: true,
      tempo: true,
    };
  }
}