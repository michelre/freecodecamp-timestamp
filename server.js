'use strict';

const express = require('express');
const utils = require('./utils');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send({status: 'OK'});
});

app.get('/:dateStr', (req, res) => {
  let natural = req.params.dateStr;
  let unix = null;
  const timestamp = utils.toTimestamp(natural);
  (!isNaN(timestamp)) ? unix = timestamp : natural = null;
  
  res.send({unix, natural});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
