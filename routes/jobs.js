const express = require('express');
const JobsRepository = require('../repositories/jobs_repo');

const router = express.Router();

router.post('/', (req, res) => {
  JobsRepository.createEntry(req.body)
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
