export class EvaluatorEngine {
  constructor({
    qualityScoring,
    hallucinationDetector,
    confidenceEngine,
  }) {
    this.qualityScoring = qualityScoring;
    this.hallucinationDetector = hallucinationDetector;
    this.confidenceEngine = confidenceEngine;
  }

  async evaluate(result) {
    const quality =
      await this.qualityScoring.score(result);

    const hallucination =
      await this.hallucinationDetector.detect(result);

    const confidence =
      await this.confidenceEngine.calculate({
        quality,
        hallucination,
      });

    return {
      quality,
      hallucination,
      confidence,
      approved:
        confidence > 0.8 && hallucination < 0.2,
    };
  }
}