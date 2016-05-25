let cf = require('./countryFormatters');

// https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx

// Note: if you find that a mapping is not listed or is incorrect, please submit a pull request and/or formatter

exports.formatters = {
  "bg-BG": cf.formatters.bulgaria,
  "zh-CN": cf.formatters.china,
  "hr-HR": cf.formatters.fmrYugoslavia,
  "cs-CZ": cf.formatters.czech,
  "da-DK": cf.formatters.denmark,
  "nl-NL": cf.formatters.netherlands,
  "en-AU": cf.formatters.australia,
  "en-CA": cf.formatters.canadaEnglish,
  "en-US": cf.formatters.unitedStates,
  "fi-FI": cf.formatters.finland,
  "fr-CA": cf.formatters.canadaFrench,
  "fr-FR": cf.formatters.france,
  "fr-CH": cf.formatters.switzerland,
  "de-DE": cf.formatters.germany,
  "de-CH": cf.formatters.switzerland,
  "el-GR": cf.formatters.greece,
  "hu-HU": cf.formatters.hungaryTypical,
  "it-IT": cf.formatters.italy,
  "it-CH": cf.formatters.switzerland,
  "ja-JP": cf.formatters.japan,
  "ko-KR": cf.formatters.korea,
  "ms-MY": cf.formatters.malaysia,
  "nb-NO": cf.formatters.norwayBusiness,
  "nn-NO": cf.formatters.norwayBusiness,
  "pl-PL": cf.formatters.poland,
  "pt-BR": cf.formatters.brazil,
  "pt-PT": cf.formatters.portugal,
  "ro-RO": cf.formatters.romania,
  "ru-RU": cf.formatters.russia,
  "Cy-sr-SP": cf.formatters.fmrYugoslavia,
  "Lt-sr-SP": cf.formatters.fmrYugoslavia,
  "sl-SI": cf.formatters.fmrYugoslavia,
  "es-AR": cf.formatters.latinAmericaTypical,
  "es-BO": cf.formatters.latinAmericaTypical,
  "es-CL": cf.formatters.latinAmericaTypical,
  "es-CO": cf.formatters.latinAmericaTypical,
  "es-CR": cf.formatters.latinAmericaTypical,
  "es-DO": cf.formatters.latinAmericaTypical,
  "es-EC": cf.formatters.latinAmericaTypical,
  "es-SV": cf.formatters.latinAmericaTypical,
  "es-GT": cf.formatters.latinAmericaTypical,
  "es-HN": cf.formatters.latinAmericaTypical,
  "es-MX": cf.formatters.latinAmericaTypical,
  "es-NI": cf.formatters.latinAmericaTypical,
  "es-PA": cf.formatters.latinAmericaTypical,
  "es-PY": cf.formatters.latinAmericaTypical,
  "es-PE": cf.formatters.latinAmericaTypical,
  "es-PR": cf.formatters.latinAmericaTypical,
  "es-ES": cf.formatters.spain,
  "es-UY": cf.formatters.latinAmericaTypical,
  "es-VE": cf.formatters.latinAmericaTypical,
  "sv-SE": cf.formatters.swedenBusiness,
  "tr-TR": cf.formatters.turkey
};