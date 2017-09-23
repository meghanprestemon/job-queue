const express = require('express');
const JobsRepository = require('../repositories/jobs_repo');
const request = require('request');

const router = express.Router();

router.post('/', (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(404).send({ url: undefined });
  }

  JobsRepository.createEntry(url)
    .then(entry => {
      request(`${url}`, (error, response, body) => {
        JobsRepository.addResponse(entry[0].id, body, true)
        .then((updatedEntry) => updatedEntry);
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
        res.status(200).send(entry.response);
      } else {
        res.status(200).send({ status: 'fetching result' });
      }
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});

module.exports = router;
