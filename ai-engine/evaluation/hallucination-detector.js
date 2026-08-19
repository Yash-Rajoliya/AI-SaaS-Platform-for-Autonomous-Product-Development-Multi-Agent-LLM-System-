export class HallucinationDetector {
  async detect(output) {
    if (!output) {
      return 0.0;
    }

    // Handle plain string responses by fallback or parsing claim arrays
    if (typeof output === "string") {
      return 0.0;
    }

    const claims = Array.isArray(output.claims) ? output.claims : [];
    const totalClaims = output.totalClaims ?? claims.length;

    // Prevent divide-by-zero or negative claim counts
    if (!totalClaims || totalClaims <= 0) {
      return 0.0;
    }

    const unsupportedClaims =
      output.unsupportedClaims ??
      claims.filter((c) => c && c.supported === false).length;

    const score = unsupportedClaims / totalClaims;

    // Clamp between 0 and 1, rounded to 2 decimal places
    return Number(Math.min(1, Math.max(0, score)).toFixed(2));
  }
}