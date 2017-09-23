const express = require('express');
const JobsRepository = require('../repositories/jobs_repo');
const request = require('request');

const router = express.Router();

router.post('/', (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(404).send({ url: 'undefined' });
  }

  JobsRepository.createEntry(url)
    .then(entry => {
      request(`${url}`, (error, response, body) => {
        if (error) {
          JobsRepository.addResponse(entry[0].id, body, 404)
            .then((updatedEntry) => updatedEntry);
        } else {
          JobsRepository.addResponse(entry[0].id, body, 200)
            .then((updatedEntry) => updatedEntry);
        }
      });
      res.status(200).send({ id: entry[0].id });
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(404).send({ id: undefined })
  }

  JobsRepository.getJobData(id)
    .then(entry => {
      if (entry.status) {
        res.status(200).send({
          status: entry.status,
          result: entry.response
        });
      } else {
        res.status(202).send({ status: '202 - fetching result' });
      }
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});

module.exports = router;
