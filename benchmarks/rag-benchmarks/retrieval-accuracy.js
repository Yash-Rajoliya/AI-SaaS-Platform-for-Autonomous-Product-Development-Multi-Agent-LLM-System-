export class RetrievalAccuracy {
  calculate(results) {
    const relevant =
      results.filter(r => r.relevant);

    return {
      total: results.length,
      relevant: relevant.length,
      accuracy:
        relevant.length /
        results.length,
    };
  }
}