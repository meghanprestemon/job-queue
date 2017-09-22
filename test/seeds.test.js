const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
// const { addDatabaseHooks } = require('./utils');

suite('seeds', () => {
  test('jobs rows', (done) => {
    knex('jobs').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [
          {
            id: 1,
            url: 'www.google.com',
            response: '',
            status: true,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC'),
          },
          {
            id: 2,
            url: 'www.massdrop.com',
            response: '',
            status: true,
            created_at: new Date('2016-07-29 14:26:16 UTC'),
            updated_at: new Date('2016-07-29 14:26:16 UTC'),
          },
          {
            id: 3,
            url: 'www.reddit.com',
            response: '',
            status: true,
            created_at: new Date('2016-08-29 14:26:16 UTC'),
            updated_at: new Date('2016-08-29 14:26:16 UTC'),
          },
        ];

        expected.forEach((row, i) => {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`,
          );
        });

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
