import { performance } from "node:perf_hooks";

export class EmbeddingPerformance {
  async benchmark(generator, texts) {
    const start = performance.now();

    await generator.embed(texts);

    return {
      documents: texts.length,
      durationMs:
        performance.now() - start,
    };
  }
}