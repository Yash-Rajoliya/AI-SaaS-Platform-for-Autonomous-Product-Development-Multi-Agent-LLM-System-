export class ConfidenceEngine {
  async calculate({
    quality,
    hallucination,
  }) {
    const confidence =
      quality * (1 - hallucination);

    return Number(confidence.toFixed(2));
  }
}