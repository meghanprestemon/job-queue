process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
// const { addDatabaseHooks } = require('./utils');

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
            type: 'boolean',
            maxLength: null,
            nullable: false,
            defaultValue: null,
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
