import { RootCauseAgent } from "./root-cause.agent.js";
import { LogAnalysis } from "./log-analysis.js";
import { TracingAnalysis } from "./tracing.analysis.js";

export class DebugAgent {
  constructor(logger) {
    this.logger = logger;
    this.rootCause = new RootCauseAgent();
    this.logs = new LogAnalysis();
    this.tracing = new TracingAnalysis();
  }

  async investigate(incident) {
    return {
      logs: await this.logs.analyze(incident.logs),
      traces: await this.tracing.analyze(incident.traces),
      rootCause: await this.rootCause.identify(incident),
    };
  }
}