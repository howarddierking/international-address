'use strict';

let cf = require('./countryFormatters');
let locales = require('./locales');
let R = require('Ramda');

let compareKeyInsensitive = R.curry(function(comp, val, key){
  return key.toUpperCase() === comp.toUpperCase();
});

exports.formatter = function(defaultFormatter, locale){
  if(arguments.length === 1){
    locale = defaultFormatter;
    defaultFormatter = cf.formatters.unitedStates;
  }

  let localeComparer = compareKeyInsensitive(locale);
  let foundFormatter = R.pickBy(localeComparer, locales.formatters);

  return R.defaultTo(defaultFormatter, R.nth(0, R.values(foundFormatter)));
};
