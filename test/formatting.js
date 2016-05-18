'use strict';

let should = require('should');
let formatting = require('../src/formatting');

let echoWriter = function(info){
  return info;
};

let produceTwoValidationErrors = function(info){
  return [
    new Error('a validation error'),
    new Error('another validation error')
  ]
};

let produceNoValidationErrors = function(info){
  return [];
};

describe('formatting', () => {
  describe('formatAddress', () => {
    it('should return array of errors when there are validation errors', () => {
      formatting.formatAddress(produceTwoValidationErrors, echoWriter, {}).length.should.eql(2);
    });
    it('should return the results of calling the builder when there are no errors', () => {
      let info = {};
      formatting.formatAddress(produceNoValidationErrors, echoWriter, info).should.eql(info);
    });
  });

  describe('validateRequired', () => {
    it('should return [] when all required fields are contained in the input object', () => {
      formatting.validateRequired(['foo', 'bar'], { foo: 'foo-value', bar: 'bar-value' }).should.eql([]);
    });
    it('should return 2 Error objects when 2 fields are missing from the input object', () => {
      formatting.validateRequired(['foo', 'bar'], {}).length.should.eql(2);
    });
  });
});
