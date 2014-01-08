/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/editing/nls/Editor-all_sv",{"dijit/form/nls/validate":{rangeMessage:"V\u00e4rdet ligger utanf\u00f6r intervallet.",invalidMessage:"Angivet v\u00e4rde \u00e4r inte giltigt.",missingMessage:"V\u00e4rdet kr\u00e4vs."},"dijit/_editor/nls/commands":{removeFormat:"Ta bort format",copy:"Kopiera",paste:"Klistra in",selectAll:"Markera allt",insertOrderedList:"Numrerad lista",insertTable:"Infoga/redigera tabell",print:"Skriv ut",underline:"Understruken",foreColor:"F\u00f6rgrundsf\u00e4rg",
htmlToggle:"HTML-k\u00e4llkod",formatBlock:"Styckeformat",newPage:"Ny sida",insertHorizontalRule:"Horisontell linje","delete":"Ta bort",appleKey:"\u2318${0}",insertUnorderedList:"Punktlista",tableProp:"Tabellegenskap",insertImage:"Infoga bild",superscript:"Upph\u00f6jt",subscript:"Neds\u00e4nkt",createLink:"Skapa l\u00e4nk",undo:"\u00c5ngra",fullScreen:"V\u00e4xla helsk\u00e4rm",italic:"Kursiv",fontName:"Teckensnitt",justifyLeft:"V\u00e4nsterjustera",unlink:"Ta bort l\u00e4nk",toggleTableBorder:"V\u00e4xla tabellinjer",
viewSource:"Visa HTML-kod",ctrlKey:"Ctrl+${0}",fontSize:"Teckenstorlek",systemShortcut:"\u00c5tg\u00e4rden ${0} \u00e4r endast tillg\u00e4nglig i webbl\u00e4saren via ett tangentbordskommando. Anv\u00e4nd ${1}.",indent:"Indrag",redo:"G\u00f6r om",strikethrough:"Genomstruken",justifyFull:"Marginaljustera",justifyCenter:"Centrera",hiliteColor:"Bakgrundsf\u00e4rg",deleteTable:"Ta bort tabell",outdent:"Utdrag",cut:"Klipp ut",plainFormatBlock:"Styckeformat",toggleDir:"V\u00e4xla riktning",bold:"Halvfet",
tabIndent:"Tabbindrag",justifyRight:"H\u00f6gerjustera"},"dijit/nls/loading":{loadingState:"L\u00e4ser in...",errorState:"Det har intr\u00e4ffat ett fel."},"dojo/cldr/nls/islamic":{"days-standAlone-short":"S\u00f6 M\u00e5 Ti On To Fr L\u00f6".split(" "),"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"veckodag","dateFormatItem-GyMMMEd":"E d MMM y G","dateFormatItem-MMMEd":"E d MMM",eraNarrow:["AH"],"days-format-short":"s\u00f6 m\u00e5 ti on to fr l\u00f6".split(" "),
"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y G","months-format-wide":"muharram;safar;rabi\u2019 al-awwal;rabi\u2019 al-akhir;jumada-l-ula;jumada-l-akhira;rajab;sha\u2019ban;ramadan;shawwal;dhu-l-ga\u2019da;dhu-l-hijja".split(";"),"dateFormatItem-yyyyQQQ":"G y QQQ","dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"em","dateFormat-full":"EEEE d MMMM y G","dateFormatItem-yyyyMEd":"E, y-MM-dd G","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"FM",
"dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","field-era":"era","months-standAlone-wide":"Muharram;Safar;Rabi\u2019 al-awwal;Rabi\u2019 al-akhir;Jumada-l-ula;Jumada-l-akhira;Rajab;Sha\u2019ban;Ramadan;Shawwal;Dhu-l-ga\u2019da;Dhu-l-hijja".split(";"),"timeFormat-short":"HH:mm","quarters-format-wide":["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"],"timeFormat-long":"HH:mm:ss z","field-year":"\u00e5r","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"timme","months-format-abbr":"muharram;safar;rabi\u2019 al-awwal;rabi\u2019 al-akhir;jumada-l-ula;jumada-l-akhira;rajab;sha\u2019ban;ramadan;shawwal;dhu-l-ga\u2019da;dhu-l-hijja".split(";"),
"timeFormat-full":"'kl'. HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"i dag","field-day-relative+1":"i morgon","dateFormatItem-GyMMMd":"d MMM y G","field-day-relative+2":"i \u00f6vermorgon","dateFormatItem-H":"HH","months-standAlone-abbr":"muharram;safar;rabi\u2019 al-awwal;rabi\u2019 al-akhir;jumada-l-ula;jumada-l-akhira;rajab;sha\u2019ban;ramadan;shawwal;dhu-l-ga\u2019da;dhu-l-hijja".split(";"),"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-standAlone-wide":["1:a kvartalet",
"2:a kvartalet","3:e kvartalet","4:e kvartalet"],"dateFormatItem-Gy":"y G","dateFormatItem-yyyyMMMEd":"E d MMM y G","dateFormatItem-M":"L","days-standAlone-wide":"S\u00f6ndag M\u00e5ndag Tisdag Onsdag Torsdag Fredag L\u00f6rdag".split(" "),"dateFormatItem-yyyyMMM":"MMM y G","dateFormatItem-yyyyMMMd":"d MMM y G","timeFormat-medium":"HH:mm:ss","dateFormatItem-Hm":"HH:mm","quarters-standAlone-abbr":["K1","K2","K3","K4"],eraAbbr:["AH"],"field-minute":"minut","field-dayperiod":"fm/em","days-standAlone-abbr":"S\u00f6n M\u00e5n Tis Ons Tor Fre L\u00f6r".split(" "),
"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"i g\u00e5r","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"f","field-day-relative+-2":"i f\u00f6rrg\u00e5r","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E d/M","dateTimeFormat-full":"{1} {0}","field-day":"dag","days-format-wide":"s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),"field-zone":"tidszon","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})",
"dateFormatItem-y":"y G","months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"field-year-relative+-1":"i fjol","field-month-relative+-1":"f\u00f6rra m\u00e5naden","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{1} {0}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"EM","days-format-abbr":"s\u00f6n m\u00e5n tis ons tors fre l\u00f6r".split(" "),eraNames:["AH"],"days-format-narrow":"SMTOTFL".split(""),"dateFormatItem-yyyyMd":"G y-MM-dd",
"days-standAlone-narrow":"SMTOTFL".split(""),"dateFormatItem-MMM":"LLL","field-month":"m\u00e5nad","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"fm","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-short":"G y-MM-dd","field-second":"sekund","field-month-relative+0":"denna m\u00e5nad","field-month-relative+1":"n\u00e4sta m\u00e5nad","dateFormatItem-Ed":"E d","dateTimeFormats-appendItem-Timezone":"{0} {1}",
"field-week":"vecka","dateFormat-medium":"d MMM y G","field-week-relative+-1":"f\u00f6rra veckan","field-year-relative+0":"i \u00e5r","dateFormatItem-yyyyM":"G y-MM","field-year-relative+1":"n\u00e4sta \u00e5r","dayPeriods-format-narrow-pm":"e","dateFormatItem-yyyyQQQQ":"G y QQQQ","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"MMM y G","dateFormatItem-yyyy":"y G","field-week-relative+0":"denna vecka","field-week-relative+1":"n\u00e4sta vecka"},
"dijit/form/nls/ComboBox":{previousMessage:"Tidigare val",nextMessage:"Fler val"}});