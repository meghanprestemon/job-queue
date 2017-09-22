const knex = require('../knex');

class JobsRepository {
  static createEntry(entryData) {
    return knex('jobs')
      .insert({
        url: entryData.url,
        response: entryData.response,
        status: entryData.status,
      }, '*');
  }

  static getJobData(url) {
    return knex('jobs')
      .where({ url })
      .first();
  }
}

module.exports = JobsRepository;
