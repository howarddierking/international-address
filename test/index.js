'use strict';

let should = require('should');
let af = require('../src/index');

let echoBuilder = function(info){
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

describe('index', () => {
  describe('formatAddress', () => {
    it('should return array of errors when there are validation errors', () => {
      af.formatAddress(produceTwoValidationErrors, echoBuilder, {}).length.should.eql(2);
    });
    it('should return the results of calling the builder when there are no errors', () => {
      let info = {};
      af.formatAddress(produceNoValidationErrors, echoBuilder, info).should.eql(info);
    });
  });

  describe('validateRequired', () => {
    it('should return [] when all required fields are contained in the input object', () => {
      af.validateRequired(['foo', 'bar'], { foo: 'foo-value', bar: 'bar-value' }).should.eql([]);
    });
    it('should return 2 Error objects when 2 fields are missing from the input object', () => {
      af.validateRequired(['foo', 'bar'], {}).length.should.eql(2);
    });
  });

  describe('australiaBuilder', () => {
    it('it should return the expected address format', () => {
      let info = {
        Honorific: 'Mr', 
        FirstName: 'S', 
        SecondName: '', 
        LastName: 'Tan', 
        Address1: '200 Broadway Av',
        Address2: '', 
        City: 'WEST BEACH', 
        State: 'SA', 
        PostalCode: '5024',
        Country: 'AUSTRALIA'
      };
      let expected = 'Mr S Tan\n200 Broadway Av\nWEST BEACH, SA 5024\nAUSTRALIA';
      let actual = af.australiaBuilder(af.multiLineWriter(), info);
      actual.should.eql(expected);
    });
  });
});
