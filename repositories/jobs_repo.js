const knex = require('../knex');

class JobsRepository {
  static createEntry(url) {
    return knex('jobs')
      .insert({ url }, '*');
  }

  static addResponse(id, response, status) {
    return knex('jobs')
      .where({ id: id })
      .update({ response, status });
  }

  static getJobData(id) {
    return knex('jobs')
      .where({ id })
      .first();
  }
}

module.exports = JobsRepository;
