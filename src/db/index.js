const Sequelize = require('sequelize');
const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_LOGGING_ENABLED,
  DATABASE_PASSWORD,
  DATABASE_URL,
} = require('../config');

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_URL,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: DATABASE_LOGGING_ENABLED,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Album = require('../domain/albums/model')(sequelize);

Promise.all([
  Album.sync(),
]);

module.exports = {
  Album,
  database: sequelize,
};
