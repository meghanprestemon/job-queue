/* eslint-disable consistent-return */

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../index');

suite('jobs routes', () => {
  test('POST /jobs', (done) => {
    request(server)
      .post('/jobs')
      .set('Accept', 'application/json')
      .send({
        url: 'https://www.wikipedia.org',
      })
      .expect('Content-Type', /json/)
      .expect(200, { id: 5 }, done);
  });

  test('POST /jobs without url', (done) => {
    request(server)
      .post('/jobs')
      .set('Accept', 'application/json')
      .send({
        url: null,
      })
      .expect('Content-Type', /json/)
      .expect(404, { url: 'undefined' }, done);
  });

  test('GET /jobs/:id', (done) => {
    request(server)
      .get('/jobs/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        status: 200,
        result: '',
      }, done);
  });

  test('GET /jobs/:id still fetching result', (done) => {
    request(server)
      .get('/jobs/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(202, { status: '202 - fetching result' }, done);
  });

  test('GET /jobs/:id without result (bad url)', (done) => {
    request(server)
      .get('/jobs/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        status: 404,
        result: 'error',
      }, done);
  });
});
