'use strict';

const express = require('express');
const utils = require('./utils');

const app = express();

app.get('/', (req, res) => {
  res.send({status: 'OK'});
});

app.get('/:dateStr', function (req, res) {
  let natural = req.params.dateStr;
  let unix = null;
  const timestamp = utils.toTimestamp(natural);
  (!isNaN(timestamp)) ? unix = timestamp : natural = null;
  
  res.send({unix, natural});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
