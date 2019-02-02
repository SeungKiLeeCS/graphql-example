const hump = require('lodash.camelcase');
const slither = require('lodash.snakecase');
const mapKeys = require('lodash.mapKeys');

function transform(data, fn) {
  if (!data) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(item => transform(item, fn));
  }

  if (typeof data === 'object') {
    return mapKeys(data, (v, k) => fn(k));
  }

  return fn(data);
}

function camelCase(obj) {
  return transform(obj, hump);
}

function snakeCase(obj) {
  return transform(obj, slither);
}

module.exports = {
  camelCase,
  snakeCase
};
