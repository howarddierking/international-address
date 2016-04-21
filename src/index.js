'use strict';

let _ = require('underscore');
let util = require('util');

let internal = exports.internal = {};

let formatAddress = exports.formatAddress = function(validator, builder, info){
  let validationErrors = validator(info);
  return validationErrors.length > 0 ? validationErrors : builder(info);
};

let validateRequired = exports.validateRequired = function(requiredFields, info){
  return _.filter(_.map(requiredFields, function(requiredField){
    return _.has(info, requiredField) ? null : new Error(util.format('Required field [%s] was not found in address info object', requiredField));
  }), _.negate(_.isNull));
};

/*
Australia 
<Honorific> <FirstName> <SecondName> <LastName> 
[<CompanyName>]
<Address1>
<Address2>
<City>, <State> <PostalCode>
[<Country>]
*/

let australiaBuilder = exports.australiaBuilder = function(formatWriter, info){

  return formatWriter.data(info.Honorific)
    .data(info.FirstName)
    .data(info.SecondName)
    .data(info.LastName)
    .newLine()
    .data(info.CompanyName)
    .newLine()
    .data(info.Address1)
    .newLine()
    .data(info.Address2)
    .newLine()
    .data(info.City, { wordBoundaryR: '' })
    .text(',')
    .data(info.State)
    .data(info.PostalCode)
    .newLine()
    .data(info.Country).value();

    // return formatWriter.for(info).data(['Honorific','FirstName','SecondName','LastName'])
    //   .newLine()
};


internal.isEmptyString = function(val){
  return val === '';
};

internal.trim = function(val){
  return val.trim();
};

internal.isValid = function(val){
  return !(_.isUndefined(val) || _.isNull(val) || _.isNaN(val) || internal.isEmptyString(val));
};


let multiLineWriter = exports.multiLineWriter = function(){
  let wrapper = { _lines: [] };
  
  wrapper.data = function(val, options){
    if(internal.isValid(val))
      return wrapper.text(val, options)
    return wrapper;
  };
  wrapper.newLine = function(){
    wrapper._lines.push('');
    return wrapper;
  };
  wrapper.text = function(val, options = { wordBoundaryL: '', wordBoundaryR: ' ' }){
    let lastLine = wrapper._lines.pop();
    wrapper._lines.push(lastLine + (options.wordBoundaryL || '') + val + (options.wordBoundaryR || ''));
    return wrapper;
  };
  wrapper.value = function(){
    debugger;
    return _.map(_.filter(wrapper._lines, _.negate(internal.isEmptyString)), internal.trim).join('\n');
  };

  return wrapper.newLine();  // push first new line
};

let australiaFormatter = _.partial(formatAddress, 
  _.partial(validateRequired, ['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'City', 'State', 'PostalCode']), 
  australiaBuilder);

let countryCodeFormatters = {
  'AUS': australiaFormatter
};

/*

Brazil  
[<CompanyName>]
<Honorific> <FirstName> <SecondName> <LastName>
<Address1>
<PostalCode> <City> <State>
[<Country>]

Bulgaria  
[<Country>]
<State>
<PostalCode> <City>
<Address1>
<Address2>
[<CompanyName>]
<Honorific> <FirstName> <SecondName> <LastName>

Canada
(English format)
<Honorific> <FirstName> <LastName>
[<CompanyName>]
<Address1>
<City>, <Province> <PostalCode>
[<Country>]
Note: <PostalCode> has letter number letter number letter number format (X#X #X#).

Canada
(French format)
<Honorific> <FirstName> <LastName>
<Address1>
<City> (<Province>)
<PostalCode>
[<Country>]
Note: <PostalCode> has letter number letter number letter number format (X#X #X#).

China [<Country>]
<Province> <City>
<Address1>
<LastName> <FirstName> <Honorific>

Croatia/Serbia/ Slovenia (former Yugoslavia)  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]

Czech Republic  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]

Denmark 
[<Honorific> <Title>] <FirstName> [<SecondName>] <LastName>
[<CompanyName>]
<Address1>
<Address2>
[<CountryCode> ]<PostalCode> <City>
[<Country>]
Note: The first and second lines can appear in reverse orderthat is, <CompanyName> on the first line and <Honorific>, etc., on the second. There are two spaces between <PostalCode> and <City>. The postal code is four digits, without a separator. If mail is sent from abroad to Denmark, DK (<CountryCode> plus one hyphen) is added in front of <PostalCode>: DK ####.

Finland 
[<Title>] <FirstName> [<SecondName>] <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.

France  
<Honorific> <FirstName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]

Germany 
[<CompanyName>]
<Honorific> [<Title>] <FirstName> <LastName>
<Address1>
<Address2>
<blank line>
[<CountryCode>] <PostalCode> <City> 
Note: Typically, <Address1> is the department and <Address2> is the street or postbox. The blank line between <Address2> and <CountryCode> and the hyphen between <CountryCode> and <PostalCode> are critical formatting features. The postal code is five digits and has no separator. If mail is sent from abroad to Germany, <CountryCode> plus a hyphen is added in front of the code (as in D XXXXX). The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.

Greece  [<Title>] <FirstName> [<SecondName>] <LastName>
  <CompanyName>
  <Address1>
  <Address2>
  <PostalCode> <City>
  [<Country>]
  Note: The address format is <Street> <Number>. There are two spaces between <PostalCode> and <City>. The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.

Hungary
(Typical address for a company)
<Honorific> <LastName> <FirstName> <SecondName>
[<CompanyName>]
<PostalCode> <City>
<Address1>
<Address2>
<State>
[<Country>]

Hungary
(Official postal standard)
<Honorific> <LastName> <FirstName>
<City>
<Address1>
<PostalCode>
<State>
[<Country>]

Italy 
<Title> <FirstName> <LastName>
[<CompanyName>]
<Address>
[blank line]
[<CountryAbbreviation>] <PostalCode> <City> <Province>
[<Country>]
Note: <Province>, which is represented by two uppercase letters in parentheses, is used only if the city is not a province capital. (The line with <CountryAbbreviation> should use a negative indent.) Numbers (for example, house numbers) are always at the end of <Address>for example, via Palmanova 12. An optional blank line between <Address> and <CountryAbbreviation> makes the address easier to read.

Japan [<Country>]
<PostalCode> <Prefecture> <City>
<Address>
<CompanyName>
<LastName> <FirstName> <Honorific>

Korea [<Country>]
<PostalCode>
<Do> <Si> <Dong> <Gu> <Address #>
<CompanyName>
<LastName> <FirstName> <Honorific>
Note: Do means Province, Si means City, Dong means Street, Block, or Village, and Gu means Ward or District. South Korea is divided into nine Do, each of which has its own government.

Latin America
(Typical address used in Spanish speaking countries)
<Title/Honorific> <FirstName> <SecondName> <FirstLastName>
<SecondLastName> 
[<CompanyName>]
<Address>
<PostalCode> <City>
<State or Province>
[<Country>]

Malaysia  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State> [<Country>]

Netherlands 
<Title> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
or
[<CompanyName>]
t.a.v. <Title> <FirstName> <SecondName> <LastName>
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: The abbreviation t.a.v. means care of and is followed by one space. There are two spaces between <PostalCode> and <City>.

Norway
(Postal address for personal correspondence)
[<Job Title>] <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. The name of the city is in capital letters. Honorific titles (Herr, Fru, Fr�ken) are generally not used, but a job title may be used.

Norway
(Typical address for business correspondence)
<CompanyName>
<Address1>
<FirstName> <LastName>
<Address2>
<PostalCode> <City>
[<Country>]
Note: A nonofficial letter to a person in a company is typically written with the person's name at the top of the address.

Poland  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]

Portugal  
<Honorific>, <FirstName>, <SecondName>, <LastName>
[<CompanyName>]
<Address1>
<Address2>
<City>
<PostalCode>
[<Country>]
Note: Example of <PostalCode>: 1600 Lisboa.

Romania 
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]

Russia  
[<Country>]
<PostalCode>
[<State or Republic>] [<Region>] <City>
<Address1>
<Address2>
[<CompanyName>]
<LastName>
<FirstName> <SecondName>
Note: The <State or Republic> and <Region> fields are used only if (a) the letter is sent to another state; (b) the city is not the capital of the region (for example, Moscow Region, Zvenigorod); or (c) the letter is sent from another state to a city that is not a regional capital, in which case both the name of the state and the name of the region are indicated (for example, Russia, Moscow Region, Zvenigorod). If <FirstName> and <SecondName> contain only initials followed by periods, it is more appropriate to include these fields on the same line with <LastName> (for example, LastName A. B.).

Spain 
<Honorific> <FirstName> <SecondName> <FirstLastName> 
<SecondLastName>
[<CompanyName>]
<Address>
<PostalCode> <City>
[<Country>]

Sweden
Postal address for personal correspondence  
[<Job Title>] <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. The name of the city may optionally be in capital letters. Honorific titles (Herr, Fru, Fr�ken) are generally not used, but a job title may be used.

Sweden
Typical address for business correspondence
<CompanyName>
<FirstName> <LastName>
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. A nonofficial letter to a person in a company is normally written with the person's name at the top of the address.

Switzerland 
<Honorific> <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]

Turkey  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode>, <City>
[<Country>]

United States <Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<City>, <State> <PostalCode>
[<Country>]
Note: The name of the country is in capital letters.

*/





exports.formatter = function(country){

};

exports.format = function(formatter, addressInfo){

};
