# international-address
Formatter for international addresses

Based on the following [preferred international address formats](https://msdn.microsoft.com/en-us/library/cc195167.aspx) document.

## Address Info Properties

| Property | Description |
| --- | --- |
| Honorific | _TBD description_ |
| FirstName | _TBD description_ |
| SecondName | _TBD description_ |
| LastName | _TBD description_ |
| CompanyName | _TBD description_ |
| Address1 | _TBD description_ |
| Address2 | _TBD description_ |
| City | _TBD description_ |
| State | _TBD description_ |
| PostalCode | _TBD description_ |
| Country | _TBD description_ |
| Province | _TBD description_ |
| Title | _TBD description_ |
| CountryCode | _TBD description_ |
| Address | _TBD description_ |
| CountryAbbreviation | _TBD description_ |
| Prefecture | _TBD description_ |
| Do | _TBD description_ |
| Si | _TBD description_ |
| Dong | _TBD description_ |
| Gu | _TBD description_ |
| FirstLastName | _TBD description_ |
| SecondLastName | _TBD description_ |
| JobTitle | _TBD description_ |
| Republic | _TBD description_ |
| Region | _TBD description_ |
| Job | _TBD description_ |


## Requirements
* enables multiple matching criteria
  ** country code (https://en.wikipedia.org/wiki/ISO_3166-1)
  ** country name
* Simple for third party to extend
  ** Extensions include adding new country->formatter bindings, new formatters, and replacing existing formatters and bindings
  ** example binding replacement should be one that comprehends the http://schema.org/PostalAddress vocabulary 
