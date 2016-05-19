'use strict';

let util = require('util');
let R = require('ramda');

let internal = exports.internal = {};

exports.formatAddress = R.curry(function(validator, builder, info){
  let validationErrors = validator(info);
  return validationErrors.length > 0 ? validationErrors : builder(info);
});

exports.validateRequired = R.curry(function(requiredFields, info){
  return R.filter(R.complement(R.isNil),
    R.map((requiredField) => {
      return R.has(requiredField, info) ? null : new Error(util.format('Required field [%s] was not found in address info object', requiredField));
    }, requiredFields)
  );
});

let second = R.nth(1);

let isValid = R.complement(R.anyPass([R.isEmpty, R.isNil]));

exports.trimVals = function(strings, ...values){
  let pairs = R.zip(strings, values);
  
  let writePairs = R.filter((val) => {
    return isValid(second(val));
  }, pairs);

  return R.reduce((acc, pair) => {
    return acc.concat(R.join('', pair));
  }, '', writePairs);
};
