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
require({cache:{"url:esri/dijit/templates/Geocoder.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.GeocoderContainerClass}" role\x3d"presentation"\x3e\n    \t\x3cdiv class\x3d"${_css.GeocoderClass}" data-dojo-attach-point\x3d"containerNode" role\x3d"presentation"\x3e\n    \t\t\x3cdiv title\x3d"${_i18n.widgets.Geocoder.main.searchButtonTitle}" tabindex\x3d"0" class\x3d"${_css.searchButtonClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"submitNode" role\x3d"button"\x3e\x3c/div\x3e\n    \t\t\x3cdiv aria-haspopup\x3d"true" id\x3d"${id}_menu_button" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuButtonTitle}" tabindex\x3d"0" class\x3d"${_css.geocoderMenuArrowClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"geocoderMenuArrowNode" role\x3d"button" aria-expanded\x3d"false"\x3e\x3c/div\x3e\n    \t\t\x3cinput aria-haspopup\x3d"true" id\x3d"${id}_input" tabindex\x3d"0" placeholder\x3d"" value\x3d"${value}" autocomplete\x3d"off" type\x3d"text" data-dojo-attach-point\x3d"inputNode" role\x3d"textbox"\x3e\n    \t\t\x3cdiv tabindex\x3d"0" class\x3d"${_css.clearButtonClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"clearNode" role\x3d"button"\x3e\x3c/div\x3e\n    \t\t\x3cdiv class\x3d"${_css.GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\n    \t\x3c/div\x3e\n    \t\x3cdiv class\x3d"${_css.resultsContainerClass}" data-dojo-attach-point\x3d"resultsNode" aria-labelledby\x3d"${id}_input" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\n    \t\x3cdiv class\x3d"${_css.geocoderMenuClass}" data-dojo-attach-point\x3d"geocoderMenuNode" role\x3d"presentation"\x3e\n    \t\t\x3cdiv class\x3d"${_css.geocoderMenuHeaderClass}"\x3e\n    \t\t\t${_i18n.widgets.Geocoder.main.geocoderMenuHeader}\n    \t\t\t\x3cdiv role\x3d"button" data-dojo-attach-point\x3d"geocoderMenuCloseNode" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuCloseTitle}" tabindex\x3d"0" class\x3d"${_css.geocoderMenuCloseClass}"\x3e\x3c/div\x3e\n    \t\t\t\x3cdiv class\x3d"${_css.GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\n    \t\t\x3c/div\x3e\n    \t\t\x3cdiv data-dojo-attach-point\x3d"geocoderMenuInsertNode" aria-labelledby\x3d"${id}_menu_button" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\n    \t\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/Geocoder","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/event dojo/dom-attr dojo/dom-class dojo/dom-style dojo/dom-construct dojo/json dojo/keys dojo/on dojo/query dojo/i18n!esri/nls/jsapi dojo/text!esri/dijit/templates/Geocoder.html dojo/uacss dijit/a11yclick dijit/_TemplatedMixin dijit/focus esri/kernel esri/SpatialReference esri/graphic esri/request esri/dijit/_EventedWidget esri/geometry/Point esri/geometry/Extent esri/tasks/locator esri/geometry/scaleUtils".split(" "),
function(p,f,q,m,e,h,l,A,t,d,k,r,s,B,C,n,D,u,E,v,w,F,G,x,y,z,H){p=p([G,D],{declaredClass:"esri.dijit.Geocoder",templateString:B,_eventMap:{select:["result"],"find-results":["results"],"auto-complete":["results"],"geocoder-select":["geocoder"],clear:!0,"enter-key-select":!0,load:!0},constructor:function(a,c){this._css={GeocoderContainerClass:"esriGeocoderContainer",GeocoderClass:"esriGeocoder",GeocoderMultipleClass:"esriGeocoderMultiple",GeocoderIconClass:"esriGeocoderIcon",GeocoderActiveClass:"esriGeocoderActive",
GeocoderResultsOpenClass:"esriGeocoderResultsOpen",GeocoderMenuOpenClass:"esriGeocoderMenuOpen",loadingClass:"esriGeocoderLoading",resultsContainerClass:"esriGeocoderResults",resultsItemClass:"esriGeocoderResult",resultsItemEvenClass:"esriGeocoderResultEven",resultsItemOddClass:"esriGeocoderResultOdd",resultsItemFirstClass:"esriGeocoderResultFirst",resultsItemLastClass:"esriGeocoderResultLast",resultsPartialMatchClass:"esriGeocoderResultPartial",searchButtonClass:"esriGeocoderSearch",clearButtonClass:"esriGeocoderReset",
hasValueClass:"esriGeocoderHasValue",geocoderMenuClass:"esriGeocoderMenu",geocoderMenuHeaderClass:"esriGeocoderMenuHeader",geocoderMenuCloseClass:"esriGeocoderMenuClose",activeMenuClass:"esriGeocoderMenuActive",geocoderMenuArrowClass:"esriGeocoderMenuArrow",geocoderSelectedClass:"esriGeocoderSelected",geocoderSelectedCheckClass:"esriGeocoderSelectedCheck",GeocoderClearClass:"esriGeocoderClearFloat"};this.options={autoComplete:!1,arcgisGeocoder:!0,value:"",theme:"simpleGeocoder",activeGeocoderIndex:0,
maxLocations:6,minCharacters:3,searchDelay:300,geocoderMenu:!0,autoNavigate:!0,showResults:!0,map:null,activeGeocoder:null,geocoders:null,zoomScale:1E4};var b=f.mixin({},this.options,a);this.set("autoComplete",b.autoComplete);this.set("arcgisGeocoder",b.arcgisGeocoder);this.set("value",b.value);this.set("theme",b.theme);this.set("activeGeocoderIndex",b.activeGeocoderIndex);this.set("maxLocations",b.maxLocations);this.set("minCharacters",b.minCharacters);this.set("searchDelay",b.searchDelay);this.set("geocoderMenu",
b.geocoderMenu);this.set("autoNavigate",b.autoNavigate);this.set("showResults",b.showResults);this.set("map",b.map);this.set("activeGeocoder",b.activeGeocoder);this.set("geocoders",b.geocoders);this.set("zoomScale",b.zoomScale);this.set("results",[]);this._i18n=s;this._deferreds=[];this._defaultSR=new v(4326);this.watch("value",this._updateValue);this.watch("theme",this._updateTheme);this.watch("activeGeocoder",this._setActiveGeocoder);this.watch("activeGeocoderIndex",this._setActiveGeocoderIndex);
this.watch("geocoders",this._updateGeocoder);this.watch("arcgisGeocoder",this._updateGeocoder);this.watch("geocoderMenu",this._updateGeocoder);this.watch("map",this._setupEvents);this.domNode=c},startup:function(){if(this._geocoders.length)if(this.domNode)if(this.get("map"))if(this.get("map").loaded)this._init();else k.once(this.get("map"),"load",f.hitch(this,function(){this._init()}));else this._init();else console.log("domNode is undefined."),this.destroy();else console.log("No geocoders defined."),
this.destroy()},postCreate:function(){this.inherited(arguments);this.own(k(this.submitNode,n,f.hitch(this,this._findThenSelect)));this.own(k(this.geocoderMenuArrowNode,n,f.hitch(this,this._toggleGeolocatorMenu)));this.own(k(this.inputNode,n,f.hitch(this,this._inputClick)));this.own(k(this.clearNode,n,f.hitch(this,this.clear)));this.own(k(this.geocoderMenuCloseNode,n,f.hitch(this,this._hideGeolocatorMenu)));this._updateGeocoder();this._setupEvents();this.get("value")&&this._checkStatus();this._hideMenus()},
destroy:function(){this._removeEvents();A.empty(this.domNode);this.inherited(arguments)},clear:function(){this.onClear();e.set(this.inputNode,"value","");this.set("value","");this.set("results",[]);h.remove(this.containerNode,this._css.hasValueClass);e.set(this.clearNode,"title","");this._hideMenus();this._hideLoading()},show:function(){l.set(this.domNode,"display","block")},hide:function(){l.set(this.domNode,"display","none")},find:function(a){var c=new q;if(a)if("string"===typeof a)this._queryDeferred(a).then(function(a){c.resolve(a)});
else if("object"===typeof a&&a.hasOwnProperty("geometry")){var b;switch(a.geometry.type){case "extent":b=a.geometry.getCenter();break;case "multipoint":b=a.geometry.getExtent().getCenter();break;case "point":b=a.geometry;break;case "polygon":b=a.geometry.getExtent().getCenter();break;case "polyline":b=a.geometry.getExtent().getCenter()}b&&this._reverseGeocodePoint(b,a.geometry).then(function(b){b.results[0]&&(a.hasOwnProperty("attributes")&&b.results[0].feature.setAttributes(f.mixin(b.results[0].feature.attributes,
a.attributes)),a.hasOwnProperty("infoTemplate")&&b.results[0].feature.setInfoTemplate(a.infoTemplate),a.hasOwnProperty("symbol")&&b.results[0].feature.setSymbol(a.symbol));c.resolve(b)},function(a){c.reject(a)})}else"object"===typeof a&&"point"===a.type?this._reverseGeocodePoint(a).then(function(a){c.resolve(a)},function(a){c.reject(a)}):a instanceof Array&&2===a.length?(b=new x(a,new v({wkid:4326})),this._reverseGeocodePoint(b).then(function(a){c.resolve(a)},function(a){c.reject(a)})):c.reject("Invalid find type");
else this._queryDeferred(this.get("value")).then(function(a){c.resolve(a)});return c.promise},focus:function(){u.focus(this.inputNode)},blur:function(){u.curNode&&u.curNode.blur();this.inputNode.blur();this._hideMenus()},select:function(a){this.onSelect(a);this._hideMenus();this._hideLoading();this.get("autoNavigate")&&(a&&a.hasOwnProperty("extent")&&this.get("map"))&&this.get("map").setExtent(a.extent)},onSelect:function(){},onFindResults:function(){},onAutoComplete:function(){},onGeocoderSelect:function(){},
onClear:function(){},onEnterKeySelect:function(){},onLoad:function(){},_init:function(){this.set("loaded",!0);this.onLoad()},_queryDeferred:function(a){var c=new q;this._query({delay:0,search:a}).then(f.hitch(this,function(a){this.onFindResults(a);c.resolve(a)}),f.hitch(this,function(a){this.onFindResults(a);c.reject(a)}));return c.promise},_reverseGeocodePoint:function(a,c){var b=new q;if(a&&this.get("activeGeocoder")){var g=c||a;this._reverseTask=new z(this.get("activeGeocoder").url);this._reverseTask.outSpatialReference=
this._defaultSR;this.get("map")&&(this._reverseTask.outSpatialReference=this.get("map").spatialReference);var d=this.get("activeGeocoder").distance||1500;this._reverseTask.locationToAddress(a,d,f.hitch(this,function(a){a={results:[this._hydrateResult(a)],geometry:g};this.onFindResults(a);b.resolve(a)}),f.hitch(this,function(a){b.reject(a)}))}else b.reject("no point or active geocoder defined");return b.promise},_setEsriGeocoder:function(){this.get("arcgisGeocoder")?("object"===typeof this.get("arcgisGeocoder")?
this._arcgisGeocoder=this.get("arcgisGeocoder"):this._arcgisGeocoder={},this._arcgisGeocoder.hasOwnProperty("suggest")||(this._arcgisGeocoder.suggest=!0),this._arcgisGeocoder.url||(this._arcgisGeocoder.url=location.protocol+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),this._arcgisGeocoder.name||(this._arcgisGeocoder.name=s.widgets.Geocoder.esriGeocoderName),this._arcgisGeocoder.hasOwnProperty("localSearchOptions")||(this._arcgisGeocoder.localSearchOptions={minScale:3E5,distance:5E4}),
this.set("arcgisGeocoder",this._arcgisGeocoder)):this.set("arcgisGeocoder",!1)},_setActiveGeocoder:function(){this.set("activeGeocoder",this._geocoders[this.get("activeGeocoderIndex")]);this._updatePlaceholder()},_setGeocoderList:function(){var a=[];this.get("arcgisGeocoder")&&(a=a.concat([this._arcgisGeocoder]));this.get("geocoders")&&this.get("geocoders").length&&(a=a.concat(this.get("geocoders")));this._geocoders=a},_updateGeocoder:function(){this.set("activeGeocoderIndex",0);this._setEsriGeocoder();
this._setGeocoderList();this._setActiveGeocoder();this._insertGeocoderMenuItems()},_updatePlaceholder:function(){this._placeholder="";this.get("activeGeocoder")&&this.get("activeGeocoder").placeholder&&(this._placeholder=this.get("activeGeocoder").placeholder);e.set(this.inputNode,"placeholder",this._placeholder);e.set(this.submitNode,"title",this._placeholder)},_updateValue:function(a,c,b){this._ignoreUpdateValue||(e.set(this.inputNode,"value",b),this._checkStatus())},_updateTheme:function(a,c,b){h.remove(this.domNode,
c);h.add(this.domNode,b)},_setActiveGeocoderIndex:function(a,c,b){this.set("activeGeocoderIndex",b);this._setActiveGeocoder();this._hideMenus();this._insertGeocoderMenuItems();a={attr:this.get("activeGeocoder"),oldVal:c,newVal:b};this.onGeocoderSelect(a)},_query:function(a){a||(a={delay:0});a.search||(a.search=this.get("value"));var c=new q;this._deferreds.push(c);this._queryTimer=setTimeout(f.hitch(this,function(){this._performQuery(c,a)}),a.delay);return c.promise},_performQuery:function(a,c){if(c.search){this._hideGeolocatorMenu();
this._showLoading();var b,g=this.get("activeGeocoder").outFields||"",d="";this.get("activeGeocoder").prefix&&(d+=this.get("activeGeocoder").prefix);d+=c.search;this.get("activeGeocoder").suffix&&(d+=this.get("activeGeocoder").suffix);b=this.get("maxLocations")||6;if(this.get("activeGeocoder").suggest){var e=this._defaultSR;this.get("map")&&(e=this.get("map").spatialReference);b={text:d,maxLocations:b,outSR:e.wkid||t.stringify(e.toJson()),f:"json"};if(this.get("map")&&(this.get("activeGeocoder").localSearchOptions&&
this.get("activeGeocoder").localSearchOptions.hasOwnProperty("distance")&&this.get("activeGeocoder").localSearchOptions.hasOwnProperty("minScale"))&&(d=this.get("map").extent.getCenter().normalize(),e=this.get("map").getScale(),!this.get("activeGeocoder").localSearchOptions.minScale||e&&e<=parseFloat(this.get("activeGeocoder").localSearchOptions.minScale)))b.location=t.stringify(d.toJson()),b.distance=this.get("activeGeocoder").localSearchOptions.distance;c.magicKey&&(b.magicKey=c.magicKey);g&&(b.outFields=
g);this.get("activeGeocoder").sourceCountry&&(b.sourceCountry=this.get("activeGeocoder").sourceCountry);this.get("activeGeocoder").searchExtent&&(g={xmin:this.get("activeGeocoder").searchExtent.xmin,ymin:this.get("activeGeocoder").searchExtent.ymin,xmax:this.get("activeGeocoder").searchExtent.xmax,ymax:this.get("activeGeocoder").searchExtent.ymax,spatialReference:this.get("activeGeocoder").searchExtent.spatialReference.toJson()},b.bbox=t.stringify(g));g="/find";c.autoComplete&&this.get("activeGeocoder").suggest&&
(g="/suggest");g=this.get("activeGeocoder").url+g;c.autoComplete&&(this.get("activeGeocoder").suggest&&this.get("activeGeocoder").suggestUrl)&&(g=this.get("activeGeocoder").suggestUrl);F({url:g,content:b,handleAs:"json",callbackParamName:"callback",load:f.hitch(this,function(b){this._receivedResults(b.suggestions||b.locations,a,c)})})}else b={address:{},maxLocations:b},c.magicKey&&(b.magicKey=c.magicKey),this.get("activeGeocoder").singleLineFieldName?b.address[this.get("activeGeocoder").singleLineFieldName]=
d:b.address["Single Line Input"]=d,g&&(b.outFields=[g]),this.get("activeGeocoder").searchExtent&&(b.searchExtent=this.get("activeGeocoder").searchExtent),this._task=new z(this.get("activeGeocoder").url),this._task.outSpatialReference=this._defaultSR,this.get("map")&&(this._task.outSpatialReference=this.get("map").spatialReference),this._task.addressToLocations(b,f.hitch(this,function(b){this._receivedResults(b,a,c)}),f.hitch(this,function(b){this._receivedResults(b,a,c)}))}else this._hideLoading(),
a.reject("no search to perform")},_showResults:function(){this._hideGeolocatorMenu();var a="";if(this.get("results")&&this.get("results").length&&this.resultsNode){var c=this.get("value"),b,d=RegExp("("+c+")","gi"),a=a+'\x3cul role\x3d"presentation"\x3e';for(b=0;b<this.get("results").length&&5>b;++b){var f=this.get("results")[b].text||this.get("results")[b].name,e=this._css.resultsItemClass+" ",e=0===b%2?e+this._css.resultsItemOddClass:e+this._css.resultsItemEvenClass;0===b?e+=" "+this._css.resultsItemFirstClass:
b===this.get("results").length-1&&(e+=" "+this._css.resultsItemLastClass);a+='\x3cli data-text\x3d"'+f+'" data-item\x3d"true" data-index\x3d"'+b+'" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+e+'"\x3e'+f.replace(d,'\x3cstrong class\x3d"'+this._css.resultsPartialMatchClass+'"\x3e'+c+"\x3c/strong\x3e")+"\x3c/li\x3e"}a+="\x3c/ul\x3e";this.resultsNode&&(this.resultsNode.innerHTML=a);this._autoCompleteEvent();this._showResultsMenu()}else this.resultsNode&&(this.resultsNode.innerHTML=a),this._hideResultsMenu()},
_autoComplete:function(){this._query({delay:this.get("searchDelay"),autoComplete:!0,search:this.get("value")}).then(f.hitch(this,function(a){this.onAutoComplete(a);this.get("showResults")&&this._showResults(a)}))},_receivedResults:function(a,c){this._hideLoading();var b=this._hydrateResults(a);this.set("results",b);b={results:b,value:this.get("value")};c.resolve(b)},_showLoading:function(){h.add(this.containerNode,this._css.loadingClass)},_hideLoading:function(){h.remove(this.containerNode,this._css.loadingClass)},
_showGeolocatorMenu:function(){h.add(this.containerNode,this._css.activeMenuClass);h.add(this.domNode,this._css.GeocoderMenuOpenClass);l.set(this.geocoderMenuNode,"display","block");e.set(this.geocoderMenuInsertNode,"aria-hidden","false");e.set(this.geocoderMenuArrowNode,"aria-expanded","true")},_hideGeolocatorMenu:function(){h.remove(this.containerNode,this._css.activeMenuClass);h.remove(this.domNode,this._css.GeocoderMenuOpenClass);l.set(this.geocoderMenuNode,"display","none");e.set(this.geocoderMenuInsertNode,
"aria-hidden","true");e.set(this.geocoderMenuArrowNode,"aria-expanded","false")},_toggleGeolocatorMenu:function(){this._hideResultsMenu();"block"===l.get(this.geocoderMenuNode,"display")?this._hideGeolocatorMenu():this._showGeolocatorMenu()},_showResultsMenu:function(){h.add(this.containerNode,this._css.GeocoderActiveClass);h.add(this.domNode,this._css.GeocoderResultsOpenClass);l.set(this.resultsNode,"display","block");e.set(this.resultsNode,"aria-hidden","false")},_hideResultsMenu:function(){l.set(this.resultsNode,
"display","none");h.remove(this.containerNode,this._css.GeocoderActiveClass);h.remove(this.domNode,this._css.GeocoderResultsOpenClass);e.set(this.resultsNode,"aria-hidden","true")},_hideMenus:function(){this._hideGeolocatorMenu();this._hideResultsMenu()},_insertGeocoderMenuItems:function(){if(this.get("geocoderMenu")&&this._geocoders&&1<this._geocoders.length){var a,c="",b;a='\x3cul role\x3d"presentation"\x3e';for(b=0;b<this._geocoders.length;b++){c=this._css.resultsItemClass+" ";c=0===b%2?c+this._css.resultsItemOddClass:
c+this._css.resultsItemEvenClass;b===this.get("activeGeocoderIndex")&&(c+=" "+this._css.geocoderSelectedClass);0===b?c+=" "+this._css.resultsItemFirstClass:b===this._geocoders.length-1&&(c+=" "+this._css.resultsItemLastClass);var d=this._geocoders[b].name||s.widgets.Geocoder.main.untitledGeocoder;a+='\x3cli data-index\x3d"'+b+'" data-item\x3d"true" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+c+'"\x3e';a+='\x3cdiv class\x3d"'+this._css.geocoderSelectedCheckClass+'"\x3e\x3c/div\x3e';a+=d;a+='\x3cdiv class\x3d"'+
this._css.GeocoderClearClass+'"\x3e\x3c/div\x3e';a+="\x3c/li\x3e"}this.geocoderMenuInsertNode.innerHTML=a+"\x3c/ul\x3e";this._geocoderMenuEvent();l.set(this.geocoderMenuNode,"display","none");l.set(this.geocoderMenuArrowNode,"display","block");h.add(this.containerNode,this._css.GeocoderMultipleClass)}else this.geocoderMenuInsertNode.innerHTML="",l.set(this.geocoderMenuNode,"display","none"),l.set(this.geocoderMenuArrowNode,"display","none"),h.remove(this.containerNode,this._css.GeocoderMultipleClass)},
_checkStatus:function(){this.get("value")?(h.add(this.containerNode,this._css.hasValueClass),e.set(this.clearNode,"title",s.widgets.Geocoder.main.clearButtonTitle)):this.clear()},_autoCompleteEvent:function(){var a=r('[data-item\x3d"true"]',this.resultsNode);this._acEvent&&this._acEvent.remove();this._acEvent=k(a,"click, keydown",f.hitch(this,function(c){clearTimeout(this._queryTimer);var b=parseInt(e.get(c.currentTarget,"data-index"),10),g=e.get(c.currentTarget,"data-text");"click"===c.type||"keydown"===
c.type&&c.keyCode===d.ENTER?(e.set(this.inputNode,"value",g),this.set("value",g),this.get("results")&&this.get("results")[b]&&(this.get("results")[b].name?this.select(this.get("results")[b]):(c=this.get("results")[b].text,b=this.get("results")[b].magicKey||null,this._query({delay:0,search:c,magicKey:b}).then(f.hitch(this,function(a){this.select(a.results[0])}))))):"keydown"===c.type&&c.keyCode===d.UP_ARROW?(m.stop(c),b-=1,0>b?this.inputNode.focus():a[b].focus()):"keydown"===c.type&&c.keyCode===d.DOWN_ARROW?
(m.stop(c),b+=1,b>=a.length?this.inputNode.focus():a[b].focus()):c.keyCode===d.ESCAPE&&this._hideMenus()}))},_geocoderMenuEvent:function(){var a=r('[data-item\x3d"true"]',this.geocoderMenuInsertNode);this._gmEvent&&this._gmEvent.remove();this._gmEvent=k(a,"click, keydown",f.hitch(this,function(c){var b=parseInt(e.get(c.currentTarget,"data-index"),10);"click"===c.type||"keydown"===c.type&&c.keyCode===d.ENTER?(this._setActiveGeocoderIndex(null,null,b),this._hideGeolocatorMenu()):"keydown"===c.type&&
c.keyCode===d.UP_ARROW?(m.stop(c),c=b-1,0>c?this.geocoderMenuArrowNode.focus():a[c].focus()):"keydown"===c.type&&c.keyCode===d.DOWN_ARROW?(m.stop(c),c=b+1,c>=a.length?this.geocoderMenuArrowNode.focus():a[c].focus()):c.keyCode===d.ESCAPE&&this._hideGeolocatorMenu()}))},_removeEvents:function(){var a;if(this._events&&this._events.length)for(a=0;a<this._events.length;a++)this._events[a].remove();this._acEvent&&this._acEvent.remove();this._gmEvent&&this._gmEvent.remove();this._events=[]},_setupEvents:function(){this._removeEvents();
var a=k(document,"click",f.hitch(this,function(a){this._hideResultsMenu(a)}));this._events.push(a);a=k(this.inputNode,"keyup",f.hitch(this,function(a){this._inputKeyUp(a)}));this._events.push(a);a=k(this.inputNode,"keydown",f.hitch(this,function(a){this._inputKeyDown(a)}));this._events.push(a);a=k(this.geocoderMenuArrowNode,"keydown",this._geocoderMenuButtonKeyDown());this._events.push(a);this.get("map")&&(a=k(this.get("map"),"click",f.hitch(this,function(){this.blur()})),this._events.push(a));this._geocoderMenuEvent();
this._autoCompleteEvent()},_findThenSelect:function(){this.find().then(f.hitch(this,function(a){a.results&&a.results.length&&(this.select(a.results[0]),this.onEnterKeySelect())}))},_inputKeyUp:function(a){if(a){clearTimeout(this._queryTimer);var c=this.inputNode.value;this._ignoreUpdateValue=!0;this.set("value",c);this._ignoreUpdateValue=!1;var b=0;c&&(b=c.length);if(a.keyCode===a.copyKey||a.ctrlKey||a.shiftKey||a.metaKey||a.altKey||a.keyCode===a.ALT||a.keyCode===a.CTRL||a.keyCode===a.META||a.keyCode===
a.shiftKey||a.keyCode===d.UP_ARROW||a.keyCode===d.DOWN_ARROW||a.keyCode===d.LEFT_ARROW||a.keyCode===d.RIGHT_ARROW)return a;a&&a.keyCode===d.ENTER?(this._cancelDeferreds(),this._findThenSelect()):a&&a.keyCode===d.ESCAPE?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):this.get("autoComplete")&&b>=this.get("minCharacters")?this._autoComplete():this._hideMenus();this._checkStatus()}},_cancelDeferreds:function(){if(this._deferreds.length){for(var a=
0;a<this._deferreds.length;a++)this._deferreds[a].cancel("stop query");this._deferreds=[]}},_inputKeyDown:function(a){var c=r('[data-item\x3d"true"]',this.resultsNode);a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.UP_ARROW?(m.stop(a),(a=c.length)&&c[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(m.stop(a),c[0]&&c[0].focus())},_geocoderMenuButtonKeyDown:function(a){var c=r('[data-item\x3d"true"]',this.geocoderMenuInsertNode);a&&a.keyCode===d.UP_ARROW?(m.stop(a),this._showGeolocatorMenu(),
(a=c.length)&&c[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(m.stop(a),this._showGeolocatorMenu(),c[0]&&c[0].focus())},_inputClick:function(){this._hideGeolocatorMenu();this.get("value")||(this.clear(),this._hideMenus());this._checkStatus()},_hydrateResult:function(a){var c=this._defaultSR;this.get("map")&&(c=this.get("map").spatialReference);var b={};if(a.hasOwnProperty("text")&&a.hasOwnProperty("magicKey"))return a;if(a.hasOwnProperty("extent"))b.extent=new y(a.extent),b.extent.setSpatialReference(new v(c)),
a.hasOwnProperty("name")&&(b.name=a.name),a.hasOwnProperty("feature")&&(b.feature=new w(a.feature),(a=b.feature.geometry)&&a.setSpatialReference(c));else if(a.hasOwnProperty("location")){c=new x(a.location.x,a.location.y,c);this.get("map")?this.get("map").getScale()>this.get("zoomScale")?b.extent=H.getExtentForScale(this.get("map"),this.get("zoomScale")).centerAt(c):b.extent=this.get("map").extent.centerAt(c):b.extent=new y({xmin:c.x-0.25,ymin:c.y-0.25,xmax:c.x+0.25,ymax:c.y+0.25,spatialReference:{wkid:4326}});
a.hasOwnProperty("address")&&"string"===typeof a.address?b.name=a.address:a.hasOwnProperty("address")&&"object"===typeof a.address&&a.address.hasOwnProperty("Address")?b.name=a.address.Address:b.name="";var d={};a.hasOwnProperty("attributes")&&(d=a.attributes);a.hasOwnProperty("score")&&(d.score=a.score);b.feature=new w(c,null,d,null)}return b},_hydrateResults:function(a){var c=[];if(a&&a.length){var b=0;for(b;b<a.length;b++){var d=this._hydrateResult(a[b]);c.push(d)}}return c}});C("extend-esri")&&
f.setObject("dijit.Geocoder",p,E);return p});