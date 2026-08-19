export class HallucinationDetector {
  async detect(output) {
    const unsupportedClaims =
      output.unsupportedClaims || 0;

    const totalClaims =
      output.totalClaims || 1;

    return Number(
      (unsupportedClaims / totalClaims).toFixed(2)
    );
  }
}