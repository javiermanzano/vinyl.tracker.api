module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "window": true,
    "navigator": true,
    "fetch": true,
    "document": true,
    "it": true,
    "describe": true,
    "beforeEach": true,
  },
  "rules": {
    "no-underscore-dangle": 0,
    "import/no-dynamic-require": 0,
    "prefer-promise-reject-errors": 0,
    "global-require": 0
  },
  "overrides": [
    {
      "files": ["test/unit/**/*.test.js"],
      "rules": {
        "no-unused-expressions": 0
      }
    },
  ]
};
