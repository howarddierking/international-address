# international-address
Formatter for international addresses

Based on the following [preferred international address formats](https://msdn.microsoft.com/en-us/library/cc195167.aspx) document.

## Address Info Properties

| Property | Description |
| --- | --- |
| Honorific | _TBD description |
| FirstName | _TBD description |
| SecondName | _TBD description |
| LastName | _TBD description |
| CompanyName | _TBD description |
| Address1 | _TBD description |
| Address2 | _TBD description |
| City | _TBD description |
| State | _TBD description |
| PostalCode | _TBD description |
| Country | _TBD description |
| Province | _TBD description |
| Title | _TBD description |
| CountryCode | _TBD description |
| Address | _TBD description |
| CountryAbbreviation | _TBD description |
| Prefecture | _TBD description |
| Do | _TBD description |
| Si | _TBD description |
| Dong | _TBD description |
| Gu | _TBD description |
| FirstLastName | _TBD description |
| SecondLastName | _TBD description |
| JobTitle | _TBD description |
| Republic | _TBD description |
| Region | _TBD description |
| Job | _TBD description |


## Requirements
* enables multiple matching criteria
  ** country code (https://en.wikipedia.org/wiki/ISO_3166-1)
  ** country name
* Simple for third party to extend
  ** Extensions include adding new country->formatter bindings, new formatters, and replacing existing formatters and bindings
  ** example binding replacement should be one that comprehends the http://schema.org/PostalAddress vocabulary 
