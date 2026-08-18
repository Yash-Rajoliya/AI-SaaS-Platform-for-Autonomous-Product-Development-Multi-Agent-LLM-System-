export class KubernetesGenerator {
  async generate(project) {
    return {
      namespace: project.slug,
      deployment: `${project.slug}-deployment`,
      service: `${project.slug}-service`,
      ingress: `${project.slug}-ingress`,
      replicas: 3,
    };
  }

  generateDeploymentYaml(serviceName, image) {
    return `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${serviceName}
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ${serviceName}
  template:
    metadata:
      labels:
        app: ${serviceName}
    spec:
      containers:
      - name: ${serviceName}
        image: ${image}
`;
  }
}