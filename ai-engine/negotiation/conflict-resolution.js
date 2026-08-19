export class ConflictResolution {
  async detect(participants = [], proposal = {}) {
    const conflicts = [];

    const positions = participants.map(
      (participant) => participant.position
    );

    const unique = new Set(positions);

    if (unique.size > 1) {
      conflicts.push({
        type: "opinion-divergence",
        proposal,
      });
    }

    return conflicts;
  }
}