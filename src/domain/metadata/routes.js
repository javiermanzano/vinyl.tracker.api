const express = require('express');
const packageJSON = require('../../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: packageJSON.name,
    version: packageJSON.version,
  });
});

module.exports = router;
