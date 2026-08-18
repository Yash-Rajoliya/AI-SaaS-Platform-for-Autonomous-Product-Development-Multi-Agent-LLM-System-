export class PlannerService {
  async generatePlan(request) {
    const {
      title = "Untitled Project",
      description = "",
      requirements = []
    } = request;

    return {
      title,
      description,
      goals: requirements,
      milestones: [
        "Requirements Analysis",
        "Architecture Design",
        "Implementation",
        "Testing",
        "Deployment"
      ],
      estimatedComplexity:
        this.calculateComplexity(requirements),
      generatedAt: new Date().toISOString()
    };
  }

  calculateComplexity(requirements) {
    const count = requirements.length;

    if (count <= 5) return "LOW";
    if (count <= 15) return "MEDIUM";

    return "HIGH";
  }
}