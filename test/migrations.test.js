process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../knex');

suite('migrations', () => {
  test('jobs columns', (done) => {
    knex('jobs').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'jobs_id_seq\'::regclass)',
          },

          url: {
            type: 'character varying',
            maxLength: 255,
            nullable: false,
            defaultValue: null,
          },

          response: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null,
          },

          status: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: '0',
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()',
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()',
          },
        };

        Object.keys(expected).forEach((column) => {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`,
          );
        });

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
