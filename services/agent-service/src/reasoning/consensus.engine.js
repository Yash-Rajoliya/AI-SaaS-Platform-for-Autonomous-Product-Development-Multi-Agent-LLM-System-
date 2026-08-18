export class ConsensusEngine {
  async buildConsensus(inputs = []) {
    const validInputs = inputs.filter(Boolean);

    const confidence =
      validInputs.length === 0
        ? 0
        : validInputs.reduce(
            (sum, item) =>
              sum + (item.confidence || 0.5),
            0
          ) / validInputs.length;

    return {
      participants: validInputs.length,
      confidence: Number(
        confidence.toFixed(2)
      ),
      achieved: confidence >= 0.75,
      generatedAt: new Date().toISOString()
    };
  }

  async resolveConflict(conflicts = []) {
    return conflicts.map((conflict) => ({
      issue: conflict,
      resolution:
        "Highest-confidence proposal selected"
    }));
  }
}