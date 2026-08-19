export class CodebaseEvolution {
  analyze(repository) {
    return {
      staleModules:
        repository.modules?.filter(
          module => module.lastUpdatedDays > 180
        ) || [],

      technicalDebtScore:
        this.calculateDebt(repository),

      recommendations:
        this.generateRecommendations(repository),
    };
  }

  calculateDebt(repository) {
    const issues =
      repository.openIssues || 0;

    const vulnerabilities =
      repository.vulnerabilities || 0;

    return issues + vulnerabilities * 5;
  }

  generateRecommendations(repository) {
    const recommendations = [];

    if (repository.testCoverage < 80) {
      recommendations.push(
        "Increase automated test coverage"
      );
    }

    if (repository.vulnerabilities > 0) {
      recommendations.push(
        "Address security vulnerabilities"
      );
    }

    return recommendations;
  }
}