export class FederatedConsensus {
  evaluate(votes) {
    const approvals = votes.filter(Boolean).length;

    return {
      approved: approvals > votes.length / 2,
      approvals,
      totalVotes: votes.length,
    };
  }
}