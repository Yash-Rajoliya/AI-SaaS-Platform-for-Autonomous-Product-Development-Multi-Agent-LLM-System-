export class TerraformGenerator {
  async generate(project) {
    return {
      provider: "aws",
      region: "ap-south-1",
      project: project.slug,
    };
  }

  generateVpcConfig() {
    return `
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}
`;
  }
}