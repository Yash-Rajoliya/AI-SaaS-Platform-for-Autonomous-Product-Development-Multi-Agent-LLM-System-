export class CIGenerator {
  async generate(project) {
    return {
      workflow: `${project.slug}-ci`,
      stages: ["lint", "test", "build", "deploy"],
    };
  }

  generateGithubWorkflow() {
    return `
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
`;
  }
}