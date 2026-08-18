import { MemoryEngine } from "./memory-engine.js";
import { ReflectionEngine } from "./reflection-engine.js";
import { SelfImprovementEngine } from "./self-improvement.js";

export class CognitiveEngine {
  constructor() {
    this.memory = new MemoryEngine();
    this.reflection = new ReflectionEngine();
    this.selfImprovement =
      new SelfImprovementEngine();
  }

  async processExecution(executionResult) {
    await this.memory.store(
      `execution:${executionResult.workflowId}`,
      executionResult,
      {
        importance: executionResult.success
          ? "high"
          : "medium",
        persist: true
      }
    );

    const reflection =
      await this.reflection.reflect(
        executionResult
      );

    const lesson =
      await this.selfImprovement.learn(
        reflection
      );

    return {
      execution: executionResult,
      reflection,
      lesson
    };
  }

  async recallWorkflow(workflowId) {
    return this.memory.recall(
      `execution:${workflowId}`
    );
  }

  async generateInsights() {
    const memoryStats =
      await this.memory.statistics();

    const learningStats =
      await this.selfImprovement.statistics();

    const improvements =
      await this.selfImprovement.generateImprovements();

    return {
      memory: memoryStats,
      learning: learningStats,
      suggestedImprovements: improvements,
      generatedAt:
        new Date().toISOString()
    };
  }

  async consolidateKnowledge() {
    return this.memory.consolidate();
  }
}