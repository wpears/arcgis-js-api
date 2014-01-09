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
define("esri/dijit/editing/Update","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/geometry/jsonUtils esri/OperationBase".split(" "),function(c,d,f,g,e,h){c=c(h,{declaredClass:"esri.dijit.editing.Update",type:"edit",label:"Update Features",constructor:function(a){var b;a=a||{};if(a.featureLayer)if(this._featureLayer=a.featureLayer,a.preUpdatedGraphics){this._preUpdatedGraphicsGeometries=[];this._preUpdatedGraphicsAttributes=[];for(b=0;b<a.preUpdatedGraphics.length;b++)this._preUpdatedGraphicsGeometries.push(a.preUpdatedGraphics[b].geometry.toJson()),
this._preUpdatedGraphicsAttributes.push(a.preUpdatedGraphics[b].attributes);if(a.postUpdatedGraphics){this._postUpdatedGraphics=a.postUpdatedGraphics;this._postUpdatedGraphicsGeometries=[];this._postUpdatedGraphicsAttributes=[];for(b=0;b<a.postUpdatedGraphics.length;b++)this._postUpdatedGraphicsGeometries.push(a.postUpdatedGraphics[b].geometry.toJson()),this._postUpdatedGraphicsAttributes.push(d.clone(a.postUpdatedGraphics[b].attributes))}else console.error("In constructor of 'esri.dijit.editing.Update', postUpdatedGraphics not provided")}else console.error("In constructor of 'esri.dijit.editing.Update', preUpdatedGraphics not provided");
else console.error("In constructor of 'esri.dijit.editing.Update', featureLayer not provided")},performUndo:function(){var a;for(a=0;a<this._postUpdatedGraphics.length;a++)this._postUpdatedGraphics[a].setGeometry(e.fromJson(this._preUpdatedGraphicsGeometries[a])),this._postUpdatedGraphics[a].setAttributes(this._preUpdatedGraphicsAttributes[a]);this._featureLayer.applyEdits(null,this._postUpdatedGraphics,null)},performRedo:function(){var a;for(a=0;a<this._postUpdatedGraphics.length;a++)this._postUpdatedGraphics[a].setGeometry(e.fromJson(this._postUpdatedGraphicsGeometries[a])),
this._postUpdatedGraphics[a].setAttributes(this._postUpdatedGraphicsAttributes[a]);this._featureLayer.applyEdits(null,this._postUpdatedGraphics,null)}});f("extend-esri")&&d.setObject("dijit.editing.Update",c,g);return c});