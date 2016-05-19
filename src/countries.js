'use strict';

let formatting = require('./formatting');

let internal = exports.internal = {};
internal.writers = {};
exports.formatters = {};

/*
Australia 
<Honorific> <FirstName> <SecondName> <LastName> 
[<CompanyName>]
<Address1>
<Address2>
<City>, <State> <PostalCode>
[<Country>]
*/

internal.writers.australia = function(info){ 
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.City}, ${info.State} ${info.PostalCode}
${info.Country}`;
};

exports.formatters.australia = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'City', 'State', 'PostalCode']), 
  internal.writers.australia);

/*
Brazil  
[<CompanyName>]
<Honorific> <FirstName> <SecondName> <LastName>
<Address1>
<PostalCode> <City> <State>
[<Country>]
*/

internal.writers.brazil = function(info){
  return formatting.trimVals`${info.CompanyName}
${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.Address1}
${info.PostalCode} ${info.City} ${info.State}
${info.Country}`;
};

exports.formatters.brazil = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'PostalCode', 'City', 'State']),
  internal.writers.brazil);

/*
Bulgaria  
[<Country>]
<State>
<PostalCode> <City>
<Address1>
<Address2>
[<CompanyName>]
<Honorific> <FirstName> <SecondName> <LastName>
*/

internal.writers.bulgaria = function(info){
  return formatting.trimVals`${info.Country}
${info.State}
${info.PostalCode} ${info.City}
${info.Address1}
${info.Address2}
${info.CompanyName}
${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}`;
};

exports.formatters.bulgaria = formatting.formatAddress(
  formatting.validateRequired(['State', 'PostalCode', 'City', 'Address1', 'Address2', 'Honorific', 'FirstName', 'SecondName', 'LastName']),
  internal.writers.bulgaria);

/*
Canada
(English format)
<Honorific> <FirstName> <LastName>
[<CompanyName>]
<Address1>
<City>, <Province> <PostalCode>
[<Country>]
Note: <PostalCode> has letter number letter number letter number format (X#X #X#).
*/

internal.writers.canadaEnglish = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.City}, ${info.Province} ${info.PostalCode}
${info.Country}`;
};

exports.formatters.canadaEnglish = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'LastName', 'Address1', 'City', 'Province', 'PostalCode']),
  internal.writers.canadaEnglish);

/*
Canada
(French format)
<Honorific> <FirstName> <LastName>
<Address1>
<City> (<Province>)
<PostalCode>
[<Country>]
Note: <PostalCode> has letter number letter number letter number format (X#X #X#).
*/

internal.writers.canadaFrench = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.LastName}
${info.Address1}
${info.City} (${info.Province})
${info.PostalCode}
${info.Country}`;
};

exports.formatters.canadaFrench = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'LastName', 'Address1', 'City', 'Province', 'PostalCode']),
  internal.writers.canadaFrench);

/*
China 
[<Country>]
<Province> <City>
<Address1>
<LastName> <FirstName> <Honorific>
*/

internal.writers.china = function(info){
  return formatting.trimVals`${info.Country}
${info.Province} ${info.City}
${info.Address1}
${info.LastName} ${info.FirstName} ${info.Honorific}`;
};

exports.formatters.china = formatting.formatAddress(
  formatting.validateRequired(['Province', 'City', 'Address1', 'LastName', 'FirstName', 'Honorific']),
  internal.writers.china);

/*
Croatia/Serbia/ Slovenia (former Yugoslavia)  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]
*/

internal.writers.fmrYugoslavia = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.State}
${info.Country}`;
};

exports.formatters.fmrYugoslavia = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City', 'State']),
  internal.writers.fmrYugoslavia);

/*
Czech Republic  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]
*/

internal.writers.czech = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.State}
${info.Country}`;
};

exports.formatters.czech = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City', 'State']),
  internal.writers.czech);

/*
Denmark 
[<Honorific> <Title>] <FirstName> [<SecondName>] <LastName>
[<CompanyName>]
<Address1>
<Address2>
[<CountryCode> ]<PostalCode> <City>
[<Country>]
Note: The first and second lines can appear in reverse orderthat is, <CompanyName> on the first line and <Honorific>, etc., on the second. There are two spaces between <PostalCode> and <City>. The postal code is four digits, without a separator. If mail is sent from abroad to Denmark, DK (<CountryCode> plus one hyphen) is added in front of <PostalCode>: DK ####.
*/

internal.writers.denmark = function(info){
  return formatting.trimVals`${info.Honorific} ${info.Title} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.CountryCode} ]${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.denmark = formatting.formatAddress(
  formatting.validateRequired(['FirstName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.denmark);

/*
Finland 
[<Title>] <FirstName> [<SecondName>] <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.
*/

internal.writers.finland = function(info){
  return formatting.trimVals`${info.Title} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.finland = formatting.formatAddress(
  formatting.validateRequired(['FirstName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.finland);

/*
France  
<Honorific> <FirstName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
*/

internal.writers.france = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.france = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.france);

/*
Germany 
[<CompanyName>]
<Honorific> [<Title>] <FirstName> <LastName>
<Address1>
<Address2>
<blank line>
[<CountryCode>] <PostalCode> <City> 
Note: Typically, <Address1> is the department and <Address2> is the street or postbox. The blank line between <Address2> and <CountryCode> and the hyphen between <CountryCode> and <PostalCode> are critical formatting features. The postal code is five digits and has no separator. If mail is sent from abroad to Germany, <CountryCode> plus a hyphen is added in front of the code (as in D XXXXX). The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.
*/

internal.writers.germany = function(info){
  return formatting.trimVals`${info.CompanyName}
${info.Honorific} ${info.Title} ${info.FirstName} ${info.LastName}
${info.Address1}
${info.Address2}

${info.CountryCode} ${info.PostalCode} ${info.City}`;
};

exports.formatters.germany = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.germany);

/*
Greece  
[<Title>] <FirstName> [<SecondName>] <LastName>
<CompanyName>
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: The address format is <Street> <Number>. There are two spaces between <PostalCode> and <City>. The personal name appears first if the letter is of a personal nature, but the company name appears first in a business letter.
*/

internal.writers.greece = function(info){
  return formatting.trimVals`${info.Title} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.greece = formatting.formatAddress(
  formatting.validateRequired(['FirstName', 'LastName', 'CompanyName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.greece);

/*
Hungary
(Typical address for a company)
<Honorific> <LastName> <FirstName> <SecondName>
[<CompanyName>]
<PostalCode> <City>
<Address1>
<Address2>
<State>
[<Country>]
*/

internal.writers.hungaryTypical = function(info){
  return formatting.trimVals`${info.Honorific} ${info.LastName} ${info.FirstName} ${info.SecondName}
${info.CompanyName}
${info.PostalCode} ${info.City}
${info.Address1}
${info.Address2}
${info.State}
${info.Country}`;
};

exports.formatters.hungaryTypical = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'LastName', 'FirstName', 'SecondName', 'PostalCode', 'City', 'Address1', 'Address2', 'State']),
  internal.writers.hungaryTypical);

/*
Hungary
(Official postal standard)
<Honorific> <LastName> <FirstName>
<City>
<Address1>
<PostalCode>
<State>
[<Country>]
*/

internal.writers.hungaryOfficial = function(info){
  return formatting.trimVals`${info.Honorific} ${info.LastName} ${info.FirstName}
${info.City}
${info.Address1}
${info.PostalCode}
${info.State}
${info.Country}`;
};

exports.formatters.hungaryOfficial = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'LastName', 'FirstName', 'City', 'Address1', 'PostalCode', 'State']),
  internal.writers.hungaryOfficial);

/*
Italy 
<Title> <FirstName> <LastName>
[<CompanyName>]
<Address>
[blank line]
[<CountryAbbreviation>] <PostalCode> <City> <Province>
[<Country>]
Note: <Province>, which is represented by two uppercase letters in parentheses, is used only if the city is not a province capital. (The line with <CountryAbbreviation> should use a negative indent.) Numbers (for example, house numbers) are always at the end of <Address>for example, via Palmanova 12. An optional blank line between <Address> and <CountryAbbreviation> makes the address easier to read.
*/

internal.writers.italy = function(info){
  return formatting.trimVals`${info.Title} ${info.FirstName} ${info.LastName}
${info.CompanyName}
${info.Address}

${info.CountryAbbreviation} ${info.PostalCode} ${info.City} ${info.Province}
${info.Country}`;
};

exports.formatters.italy = formatting.formatAddress(
  formatting.validateRequired(['Title', 'FirstName', 'LastName', 'Address', 'PostalCode', 'City', 'Province']),
  internal.writers.italy);

/*
Japan 
[<Country>]
<PostalCode> <Prefecture> <City>
<Address>
<CompanyName>
<LastName> <FirstName> <Honorific>
*/

internal.writers.japan = function(info){
  return formatting.trimVals`${info.Country}
${info.PostalCode} ${info.Prefecture} ${info.City}
${info.Address}
${info.CompanyName}
${info.LastName} ${info.FirstName} ${info.Honorific}`;
};

exports.formatters.japan = formatting.formatAddress(
  formatting.validateRequired(['PostalCode', 'Prefecture', 'City', 'Address', 'CompanyName', 'LastName', 'FirstName', 'Honorific']),
  internal.writers.japan);

/*
Korea 
[<Country>]
<PostalCode>
<Do> <Si> <Dong> <Gu> <Address #>
<CompanyName>
<LastName> <FirstName> <Honorific>
Note: Do means Province, Si means City, Dong means Street, Block, or Village, and Gu means Ward or District. South Korea is divided into nine Do, each of which has its own government.
*/

internal.writers.korea = function(info){
  return formatting.trimVals`${info.Country}
${info.PostalCode}
${info.Do} ${info.Si} ${info.Dong} ${info.Gu} ${info.Address} #>
${info.CompanyName}
${info.LastName} ${info.FirstName} ${info.Honorific}`;
};

exports.formatters.korea = formatting.formatAddress(
  formatting.validateRequired(['PostalCode', 'Do', 'Si', 'Dong', 'Gu', 'Address', 'CompanyName', 'LastName', 'FirstName', 'Honorific']),
  internal.writers.korea);

/*
Latin America
(Typical address used in Spanish speaking countries)
<Honorific> <FirstName> <SecondName> <FirstLastName>
<SecondLastName> 
[<CompanyName>]
<Address>
<PostalCode> <City>
<Province>
[<Country>]
*/

internal.writers.latinAmericaTypical = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.FirstLastName}
${info.SecondLastName} 
${info.CompanyName}
${info.Address}
${info.PostalCode} ${info.City}
${info.Province}
${info.Country}`;
};

exports.formatters.latinAmericaTypical = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'FirstLastName', 'SecondLastName', 'Address', 'PostalCode', 'City', 'Province']),
  internal.writers.latinAmericaTypical);

/*
Malaysia  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State> [<Country>]
*/

internal.writers.malaysia = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.State} ${info.Country}`;
};

exports.formatters.malaysia = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City', 'State']),
  internal.writers.malaysia);

/*
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
*/

internal.writers.netherlands = function(info){
  return formatting.trimVals`${info.Title} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.netherlands = formatting.formatAddress(
  formatting.validateRequired(['Title', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.netherlands);

/*
Norway
(Postal address for personal correspondence)
[<Job Title>] <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. The name of the city is in capital letters. Honorific titles (Herr, Fru, Fr�ken) are generally not used, but a job title may be used.
*/

internal.writers.norwayPersonal = function(info){
  return formatting.trimVals`${info.JobTitle} ${info.FirstName} ${info.LastName}
${info.Address1}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.norwayPersonal = formatting.formatAddress(
  formatting.validateRequired(['FirstName', 'LastName', 'Address1', 'PostalCode', 'City']),
  internal.writers.norwayPersonal);

/*
Norway
(Typical address for business correspondence)
<CompanyName>
<Address1>
<FirstName> <LastName>
<Address2>
<PostalCode> <City>
[<Country>]
Note: A nonofficial letter to a person in a company is typically written with the person's name at the top of the address.
*/

internal.writers.norwayBusiness = function(info){
  return formatting.trimVals`${info.CompanyName}
${info.Address1}
${info.FirstName} ${info.LastName}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.norwayBusiness = formatting.formatAddress(
  formatting.validateRequired(['CompanyName', 'Address1', 'FirstName', 'LastName', 'Address2', 'PostalCode', 'City']),
  internal.writers.norwayBusiness);

/*
Poland  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]
*/

internal.writers.poland = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.State}
${info.Country}`;
};

exports.formatters.poland = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City', 'State']),
  internal.writers.poland);

/*
Portugal  
<Honorific>, <FirstName>, <SecondName>, <LastName>
[<CompanyName>]
<Address1>
<Address2>
<City>
<PostalCode>
[<Country>]
Note: Example of <PostalCode>: 1600 Lisboa.
*/

internal.writers.portugal = function(info){
  return formatting.trimVals`${info.Honorific}, ${info.FirstName}, ${info.SecondName}, ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.City}
${info.PostalCode}
${info.Country}`;
};

exports.formatters.portugal = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'City', 'PostalCode']),
  internal.writers.portugal);

/*
Romania 
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode> <City>
<State>
[<Country>]
*/

internal.writers.romania = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.State}
${info.Country}`;
};

exports.formatters.romania = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City', 'State']),
  internal.writers.romania);

/*
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
*/

internal.writers.russia = function(info){
  return formatting.trimVals`${info.Country}
${info.PostalCode}
${info.State}or Republic>] ${info.Region} ${info.City}
${info.Address1}
${info.Address2}
${info.CompanyName}
${info.LastName}
${info.FirstName} ${info.SecondName}`;
};

exports.formatters.russia = formatting.formatAddress(
  formatting.validateRequired(['PostalCode', 'City', 'Address1', 'Address2', 'LastName', 'FirstName', 'SecondName']),
  internal.writers.russia);

/*
Spain 
<Honorific> <FirstName> <SecondName> <FirstLastName> 
<SecondLastName>
[<CompanyName>]
<Address>
<PostalCode> <City>
[<Country>]
*/

internal.writers.spain = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.FirstLastName} 
${info.SecondLastName}
${info.CompanyName}
${info.Address}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.spain = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'FirstLastName', 'SecondLastName', 'Address', 'PostalCode', 'City']),
  internal.writers.spain);

/*
Sweden
Postal address for personal correspondence  
[<Job Title>] <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. The name of the city may optionally be in capital letters. Honorific titles (Herr, Fru, Fr�ken) are generally not used, but a job title may be used.
*/

internal.writers.swedenPersonal = function(info){
  return formatting.trimVals`${info.JobTitle} ${info.FirstName} ${info.LastName}
${info.Address1}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.swedenPersonal = formatting.formatAddress(
  formatting.validateRequired(['FirstName', 'LastName', 'Address1', 'PostalCode', 'City']),
  internal.writers.swedenPersonal);

/*
Sweden
Typical address for business correspondence
<CompanyName>
<FirstName> <LastName>
<Address1>
<Address2>
<PostalCode> <City>
[<Country>]
Note: There are two spaces between <PostalCode> and <City>. A nonofficial letter to a person in a company is normally written with the person's name at the top of the address.
*/

internal.writers.swedenBusiness = function(info){
  return formatting.trimVals`${info.CompanyName}
${info.FirstName} ${info.LastName}
${info.Address1}
${info.Address2}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.swedenBusiness = formatting.formatAddress(
  formatting.validateRequired(['CompanyName', 'FirstName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.swedenBusiness);

/*
Switzerland 
<Honorific> <FirstName> <LastName>
<Address1>
<PostalCode> <City>
[<Country>]
*/

internal.writers.switzerland = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.LastName}
${info.Address1}
${info.PostalCode} ${info.City}
${info.Country}`;
};

exports.formatters.switzerland = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'LastName', 'Address1', 'PostalCode', 'City']),
  internal.writers.switzerland);

/*
Turkey  
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<PostalCode>, <City>
[<Country>]
*/

internal.writers.turkey = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.PostalCode}, ${info.City}
${info.Country}`;
};

exports.formatters.turkey = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'PostalCode', 'City']),
  internal.writers.turkey);

/*
United States 
<Honorific> <FirstName> <SecondName> <LastName>
[<CompanyName>]
<Address1>
<Address2>
<City>, <State> <PostalCode>
[<Country>]
Note: The name of the country is in capital letters.
*/

internal.writers.unitedStates = function(info){
  return formatting.trimVals`${info.Honorific} ${info.FirstName} ${info.SecondName} ${info.LastName}
${info.CompanyName}
${info.Address1}
${info.Address2}
${info.City}, ${info.State} ${info.PostalCode}
${info.Country}`;
};

exports.formatters.unitedStates = formatting.formatAddress(
  formatting.validateRequired(['Honorific', 'FirstName', 'SecondName', 'LastName', 'Address1', 'Address2', 'City', 'State', 'PostalCode']),
  internal.writers.unitedStates);
