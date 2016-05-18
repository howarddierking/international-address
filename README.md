# international-address
Formatter for international addresses

Based on the following [preferred international address formats](https://msdn.microsoft.com/en-us/library/cc195167.aspx) document.

## Address Info Properties

Honorific
FirstName
SecondName
LastName
CompanyName
Address1
Address2
City
State
PostalCode
Country
Province
Title
CountryCode
Address
CountryAbbreviation
Prefecture
Do
Si
Dong
Gu
FirstLastName
SecondLastName
JobTitle
Republic
Region
Job


## Requirements
* enables multiple matching criteria
  ** country code (https://en.wikipedia.org/wiki/ISO_3166-1)
  ** country name
* Simple for third party to extend
  ** Extensions include adding new country->formatter bindings, new formatters, and replacing existing formatters and bindings
  ** example binding replacement should be one that comprehends the http://schema.org/PostalAddress vocabulary 
