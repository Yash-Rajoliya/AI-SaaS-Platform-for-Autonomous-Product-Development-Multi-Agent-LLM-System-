export class StateCheckpoint {
  create(state) {
    return {
      state,
      createdAt: new Date().toISOString(),
    };
  }
}