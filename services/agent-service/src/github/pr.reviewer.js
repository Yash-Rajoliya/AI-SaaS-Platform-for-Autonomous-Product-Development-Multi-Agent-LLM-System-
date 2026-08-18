export class PRReviewer {
  async review(pullRequest = {}) {
    const findings = [];

    if (
      (pullRequest.changedFiles || 0) > 50
    ) {
      findings.push({
        type: "maintainability",
        message:
          "Pull request is unusually large",
      });
    }

    return {
      approved: findings.length === 0,
      findings,
      reviewedAt:
        new Date().toISOString(),
    };
  }

  async summarize(findings = []) {
    return findings.map(
      (finding) => finding.message,
    );
  }
}