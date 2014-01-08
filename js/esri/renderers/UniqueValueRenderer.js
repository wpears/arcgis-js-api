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
define("esri/renderers/UniqueValueRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/lang esri/symbols/jsonUtils esri/renderers/Renderer".split(" "),function(d,g,e,k,l,m,h,n){d=d(n,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(b,a,c,e,f){this.values=[];this._symbols={};this.infos=[];b&&!b.declaredClass?(a=b,this.defaultSymbol=(b=a.defaultSymbol)&&(b.declaredClass?b:h.fromJson(b)),this.attributeField=a.field1,this.attributeField2=a.field2,
this.attributeField3=a.field3,this.fieldDelimiter=a.fieldDelimiter,this.defaultLabel=a.defaultLabel,g.forEach(a.uniqueValueInfos,this._addValueInfo,this)):(this.defaultSymbol=b,this.attributeField=a,this.attributeField2=c,this.attributeField3=e,this.fieldDelimiter=f);this._multiple=!!this.attributeField2},addValue:function(b,a){var c=e.isObject(b)?b:{value:b,symbol:a};this._addValueInfo(c)},removeValue:function(b){var a=g.indexOf(this.values,b);-1!==a&&(this.values.splice(a,1),delete this._symbols[b],
this.infos.splice(a,1))},getUniqueValueInfo:function(b){var a=this.attributeField,c=b.attributes,d,f;this._multiple?(b=this.attributeField2,d=this.attributeField3,f=[],a&&f.push(c[a]),b&&f.push(c[b]),d&&f.push(c[d]),a=f.join(this.fieldDelimiter||"")):a=e.isFunction(a)?a(b):c[a];return this._symbols[a]},getSymbol:function(b){return(b=this.getUniqueValueInfo(b))&&b.symbol||this.defaultSymbol},_addValueInfo:function(b){var a=b.value;this.values.push(a);this.infos.push(b);var c=b.symbol;c&&!c.declaredClass&&
(b.symbol=h.fromJson(c));this._symbols[a]=b},toJson:function(){var b=m.fixJson,a=e.mixin(this.inherited(arguments),{type:"uniqueValue",field1:this.attributeField,field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),defaultLabel:this.defaultLabel,uniqueValueInfos:g.map(this.infos||[],function(a){a=e.mixin({},a);a.symbol=a.symbol&&a.symbol.toJson();a.value+="";return b(a)})});return b(a)}});k("extend-esri")&&
e.setObject("renderer.UniqueValueRenderer",d,l);return d});