'use strict';

let cf = require('./countryFormatters');
let locales = require('./locales');
let R = require('Ramda');

let caseInsensitiveComparer = R.curry(function(x, y){
  return x.toUpperCase() === y.toUpperCase();
});

// (k -> Boolean) -> {k: v} -> v | undefined
let propBy = function(pred, object){
  let w = R.wrap(pred, (fn, val, key) => pred(key));
  let t = R.pickBy(w, object);
  return R.nth(0, R.values(t));
};

exports.formatter = function(defaultFormatter, locale){
  if(arguments.length === 1){
    locale = defaultFormatter;
    defaultFormatter = cf.formatters.unitedStates;
  }

  let v = propBy(caseInsensitiveComparer(locale), locales.formatters); 
  return R.defaultTo(defaultFormatter, v);
};
