export class DistributedTransactions {
  async begin(transactionId) {
    return {
      transactionId,
      status: "started",
    };
  }

  async commit(transactionId) {
    return {
      transactionId,
      status: "committed",
    };
  }

  async rollback(transactionId) {
    return {
      transactionId,
      status: "rolled-back",
    };
  }
}