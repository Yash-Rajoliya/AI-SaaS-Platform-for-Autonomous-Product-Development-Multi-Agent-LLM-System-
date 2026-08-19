export class EventPersistence {
  constructor() {
    this.store = [];
  }

  save(event) {
    this.store.push(event);
  }

  getAll() {
    return this.store;
  }
}