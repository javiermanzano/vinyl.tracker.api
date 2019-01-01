const environment = process.env.VINYL_TRACKER_ENV;

// let googleCloud = require('./googleCloud/dev.json');
let config = require('./dev.json');

// try {
//   googleCloud = require(`./googleCloud/${environment}.json`);
// } catch (err) {
//   console.error('Error while getting google cloud info. Falling back to dev.json');
// }

try {
  config = require(`./${environment}.json`);
} catch (err) {
  console.error('Error while getting config. Falling back to dev.json');
}

module.exports = {
  ...config,
};
