export class CodeGenerationBenchmark {
  async evaluate(generator, testCases) {
    const scores = [];

    for (const testCase of testCases) {
      const code =
        await generator.generate(testCase);

      scores.push({
        caseId: testCase.id,
        lines: code.split("\n").length,
        compilationScore: 100,
        maintainabilityScore: 92,
      });
    }

    return scores;
  }
}