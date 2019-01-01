const releaseType = process.argv[2];
const json = require('../package.json');
json.version = require('semver').inc(json.version, releaseType);

const string = JSON.stringify(json, null, 2);
require('fs').writeFileSync('./package.json', string);
