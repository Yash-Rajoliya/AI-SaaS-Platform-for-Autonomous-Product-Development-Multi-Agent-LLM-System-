export class InfraOptimizer {
  assess(infrastructure = {}) {
    return {
      kubernetes:
        infrastructure.kubernetes
          ? "optimized"
          : "missing",

      autoscaling:
        infrastructure.autoscaling
          ? "enabled"
          : "disabled",

      monitoring:
        infrastructure.monitoring
          ? "configured"
          : "missing",

      recommendations:
        this.generateRecommendations(
          infrastructure
        ),
    };
  }

  generateRecommendations(infra) {
    const recommendations = [];

    if (!infra.autoscaling) {
      recommendations.push(
        "Enable cluster autoscaling"
      );
    }

    if (!infra.monitoring) {
      recommendations.push(
        "Configure Prometheus and Grafana"
      );
    }

    if (!infra.backups) {
      recommendations.push(
        "Implement automated backups"
      );
    }

    return recommendations;
  }
}