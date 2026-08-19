export class Consensus {
  async evaluate(agentResponses = []) {
    if (!agentResponses.length) {
      return {
        consensusReached: false,
        confidence: 0,
      };
    }

    const confidence =
      agentResponses.reduce(
        (sum, item) => sum + (item.confidence || 0),
        0
      ) / agentResponses.length;

    return {
      consensusReached: confidence >= 0.75,
      confidence: Number(confidence.toFixed(2)),
      participants: agentResponses.length,
    };
  }
}