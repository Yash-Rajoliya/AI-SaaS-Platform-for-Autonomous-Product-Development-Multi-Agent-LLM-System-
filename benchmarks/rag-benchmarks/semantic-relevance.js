export class SemanticRelevance {
  score(results) {
    const total =
      results.reduce(
        (sum, r) => sum + r.score,
        0,
      );

    return {
      average:
        total / results.length,
    };
  }
}