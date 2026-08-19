import { Arbitration } from "./arbitration.js";
import { ConflictResolution } from "./conflict-resolution.js";

export class NegotiationEngine {
  constructor() {
    this.arbitration = new Arbitration();
    this.conflictResolution = new ConflictResolution();
  }

  async negotiate(participants, proposal) {
    const conflicts =
      await this.conflictResolution.detect(
        participants,
        proposal
      );

    const result =
      await this.arbitration.resolve(conflicts);

    return {
      proposal,
      conflicts,
      resolution: result,
    };
  }
}