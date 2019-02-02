const {
  snakeCase,
  camelCase
} = require('./casing');

class Repository {
  constructor(knex, table) {
    this.knex = knex;
    this.table = table;
  }

  get qb() {
    return this.knex(this.table);
  }

  where(filter) {
    if (!filter) {
      return this.qb;
    }

    return this.qb.where(snakeCase(filter));
  }

  normalize(data) {
    return snakeCase(data)
  }

  denormalize(data) {
    return { ...camelCase(data), __type: this.table };
  }

  async create(data) {
    const now = new Date();
    const obj = this.normalize({ createdAt: now, updatedAt: now, ...data });

    const [record] = await this.qb.insert(obj).returning('*');
    return this.denormalize(record);
  }

  async update(filter, data) {
    const now = new Date();
    const changes = this.normalize({ updatedAt: now, ...data });

    return this.where(filter).update(changes);
  }

  async remove(filter) {
    return this.where(filter).delete();
  }

  async findBy(filter) {
    const record = await this.where(filter).first();
    return this.denormalize(record);
  }

  async list(filter) {
    const records = await this.where(filter);
    return records.map(r => this.denormalize(r));
  }
}

module.exports = Repository;
