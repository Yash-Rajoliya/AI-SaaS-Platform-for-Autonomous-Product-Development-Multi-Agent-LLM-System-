export class TokenEfficiencyBenchmark {
  evaluate(records) {
    return records.map(record => ({
      requestId: record.id,
      inputTokens: record.inputTokens,
      outputTokens: record.outputTokens,
      efficiency:
        record.outputTokens /
        record.inputTokens,
    }));
  }
}