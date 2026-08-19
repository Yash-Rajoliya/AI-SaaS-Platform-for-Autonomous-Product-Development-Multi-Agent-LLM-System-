export class RoadmapPlanner {
  generate(prd) {
    return {
      phases: [
        "Discovery",
        "Architecture",
        "Development",
        "Testing",
        "Deployment",
        "Optimization",
      ],
      estimatedWeeks:
        Math.max(4, Math.ceil(prd.features.length / 5)),
    };
  }
}