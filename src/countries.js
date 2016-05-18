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
  return formatting.trimVals``;
};

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
${info.Do} ${info.Si} ${info.Dong} ${info.Gu} ${info.Address}#>
${info.CompanyName}
${info.LastName} ${info.FirstName} ${info.Honorific}`;
};

/*
Latin America
(Typical address used in Spanish speaking countries)
<Title/Honorific> <FirstName> <SecondName> <FirstLastName>
<SecondLastName> 
[<CompanyName>]
<Address>
<PostalCode> <City>
<State or Province>
[<Country>]
*/

internal.writers.latinAmericaTypical = function(info){
  let title = info.Title || info.Honorific;
  let prov = info.State || info.Province;

  return formatting.trimVals`${title} ${info.FirstName} ${info.SecondName} ${info.FirstLastName}
${info.SecondLastName} 
${info.CompanyName}
${info.Address}
${info.PostalCode} ${info.City}
${prov}
${info.Country}`;
};

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
  return formatting.trimVals`${info.Job}Title>] ${info.FirstName} ${info.LastName}
${info.Address1}
${info.PostalCode} ${info.City}
${info.Country}`;
};

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
