export class CoordinationRegistry {
  constructor() {
    this.nodes = new Map();
  }

  register(node) {
    this.nodes.set(node.id, node);
  }

  get(id) {
    return this.nodes.get(id);
  }

  list() {
    return [...this.nodes.values()];
  }
}