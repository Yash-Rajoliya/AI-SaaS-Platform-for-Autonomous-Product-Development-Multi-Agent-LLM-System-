export class RerankingBenchmark {
  evaluate(before, after) {
    return {
      baselineScore: before,
      rerankedScore: after,
      improvement:
        ((after - before) / before) * 100,
    };
  }
}