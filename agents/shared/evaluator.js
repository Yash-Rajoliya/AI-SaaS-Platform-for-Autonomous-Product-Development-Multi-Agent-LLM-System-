export class Evaluator {
  evaluate(result, criteria = []) {
    const scores = criteria.map((criterion) => ({
      criterion: criterion.name,
      score: criterion.evaluate(result),
    }));

    const total =
      scores.reduce((sum, item) => sum + item.score, 0) /
      Math.max(scores.length, 1);

    return {
      score: Number(total.toFixed(2)),
      passed: total >= 80,
      breakdown: scores,
    };
  }
}