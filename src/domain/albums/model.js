const { STRING, INTEGER, DATE } = require('sequelize');

module.exports = (sequelize) => {
  const Album = sequelize.define('albums', {
    band: STRING,
    name: STRING,
    amazonEsUrl: STRING,
    amazonEsPrice: INTEGER,
    amazonUkUrl: STRING,
    amazonUkPrice: INTEGER,
    amazonComUrl: STRING,
    amazonComPrice: INTEGER,
    fnacUrl: STRING,
    fnacPrice: INTEGER,
    lastUpdated: DATE,
  });
  return Album;
};
