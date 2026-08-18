import { ThreatAnalysis } from "./threat-analysis.js";
import { ComplianceAnalysis } from "./compliance.analysis.js";
import { VulnerabilityScan } from "./vulnerability.scan.js";

export class SecurityAgent {
  constructor(logger) {
    this.logger = logger;
    this.threatAnalysis = new ThreatAnalysis();
    this.compliance = new ComplianceAnalysis();
    this.vulnerability = new VulnerabilityScan();
  }

  async performAssessment(project) {
    return {
      threats: await this.threatAnalysis.analyze(project),
      compliance: await this.compliance.analyze(project),
      vulnerabilities: await this.vulnerability.scan(project),
    };
  }
}