export class WorkflowPersistence {
  constructor(database) {
    this.database = database;
  }

  async save(workflow) {
    return this.database.upsert("workflows", workflow);
  }

  async get(id) {
    return this.database.findOne("workflows", { id });
  }

  async delete(id) {
    return this.database.delete("workflows", { id });
  }

  async list(filters = {}) {
    return this.database.findMany("workflows", filters);
  }
}