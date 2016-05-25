'use strict';

let should = require('should');
let countries = require('../src/countryFormatters');

describe('countries', () => {

  describe('australiaWriter', () => {
    it('it should return the expected address format', () => {
      let info = {
        Honorific: 'Mr', 
        FirstName: 'S', 
        LastName: 'Tan', 
        Address1: '200 Broadway Av',
        Address2: '', 
        City: 'WEST BEACH', 
        State: 'SA', 
        PostalCode: '5024',
        Country: 'AUSTRALIA'
      };
      

      let expected = 'Mr S Tan\n200 Broadway Av\nWEST BEACH, SA 5024\nAUSTRALIA';
      let actual = countries.internal.writers.australia(info);
      actual.should.eql(expected);
    });
  });
});
