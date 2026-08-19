export class SchemaRegistry {
  constructor() {
    this.schemas = new Map();
  }

  register(name, schema) {
    this.schemas.set(name, schema);
  }

  get(name) {
    return this.schemas.get(name);
  }
}