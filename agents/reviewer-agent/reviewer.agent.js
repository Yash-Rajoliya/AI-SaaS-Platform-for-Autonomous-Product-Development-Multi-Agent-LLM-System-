import { SecurityReview } from "./security.review.js";
import { ScalabilityReview } from "./scalability.review.js";
import { QualityReview } from "./quality.review.js";
import { ArchitectureReview } from "./architecture.review.js";

export class ReviewerAgent {
  constructor({
    security =
      new SecurityReview(),
    scalability =
      new ScalabilityReview(),
    quality = new QualityReview(),
    architecture =
      new ArchitectureReview(),
  } = {}) {
    this.security = security;
    this.scalability =
      scalability;
    this.quality = quality;
    this.architecture =
      architecture;
  }

  async review(artifact) {
    return {
      security:
        await this.security.review(
          artifact,
        ),
      scalability:
        await this.scalability.review(
          artifact,
        ),
      quality:
        await this.quality.review(
          artifact,
        ),
      architecture:
        await this.architecture.review(
          artifact,
        ),
    };
  }
}