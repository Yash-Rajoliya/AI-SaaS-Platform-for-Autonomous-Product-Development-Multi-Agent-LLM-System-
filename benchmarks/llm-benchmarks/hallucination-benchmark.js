export class HallucinationBenchmark {
  calculateRate(samples) {
    const hallucinations =
      samples.filter(s => s.hallucinated).length;

    return {
      total: samples.length,
      hallucinations,
      rate:
        hallucinations / samples.length,
    };
  }
}