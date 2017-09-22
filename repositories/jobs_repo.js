const knex = require('../knex');

class JobsRepository {
  static createEntry(url, response, status) {
    return knex('jobs')
      .insert({
        url,
        response,
        status,
      }, '*');
  }

  static getJobData(url) {
    return knex('jobs')
      .where({ url })
      .first();
  }
}

module.exports = JobsRepository;
