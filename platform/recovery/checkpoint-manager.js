export class CheckpointManager {
  constructor() {
    this.store = new Map();
  }

  save(id, state) {
    this.store.set(id, state);
  }

  load(id) {
    return this.store.get(id);
  }
}