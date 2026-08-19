export class QualityScoring {
  async score(output) {
    const completeness =
      output.content?.length > 500 ? 1 : 0.7;

    const structure =
      output.sections?.length > 3 ? 1 : 0.8;

    return Number(
      ((completeness + structure) / 2).toFixed(2)
    );
  }
}