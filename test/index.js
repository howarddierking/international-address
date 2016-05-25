'use strict';

let index = require('../src/index');
let cf = require('../src/countryFormatters');

describe('index', () => {
  it('should select function for fr-fr', () => {
    index.formatter('fr-fr').should.be.a.function;
  });
  it('should select correct function for fr-fr', () => {
    index.formatter('fr-fr').should.equal(cf.formatters.france);
  });
  it('should default to the unitedStates formatter', () => {
    index.formatter('foo').should.equal(cf.formatters.unitedStates);
  });
});
