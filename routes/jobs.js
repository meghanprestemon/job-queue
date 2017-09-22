const express = require('express');
const JobsRepository = require('../repositories/jobs_repo');
const request = require('request');

const router = express.Router();

router.post('/', (req, res) => {
  const url = req.body.url;
  const response = request(`${url}`, (error, response, body) => body);
  const status = response ? true : false;

  if (!url) {
    return res.status(404).send({ url: undefined });
  }

  JobsRepository.createEntry(url, response, status)
    .then(entry => {
      res.status(200).send(entry[0]);
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  const url = req.body.url;

  JobsRepository.getJobData(url)

});

module.exports = router;
