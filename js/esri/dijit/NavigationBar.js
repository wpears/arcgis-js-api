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
define("esri/dijit/NavigationBar","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/kernel dojo/has dojo/query dojo/dom dojo/dom-class dojo/dom-construct esri/dijit/_TouchBase esri/kernel".split(" "),function(g,n,l,p,m,q,u,r,h,d,s,t){g=g(null,{declaredClass:"esri.dijit.NavigationBar",_items:[],constructor:function(a,b){var c;this.container=r.byId(b);this._touchBase=s(this.container,null);this._slideDiv=d.create("div",{},this.container,"first");this.events=[l.connect(this._touchBase,
"onclick",this,this._onClickHandler)];this._items=a.items;h.add(this.container,"esriMobileNavigationBar");var k=d.create("div",{},this._slideDiv);for(c=0;c<this._items.length;c++){var e,f;switch(this._items[c].type){case "img":f=d.create("div",{"class":"esriMobileNavigationItem"},k);e=d.create("img",{src:this._items[c].src.toString(),style:{width:"100%",height:"100%"}},f);break;case "span":f=d.create("div",{"class":"esriMobileNavigationItem"},k);e=d.create("span",{innerHTML:this._items[c].text},f);
break;case "div":f=d.create("div",{"class":"esriMobileNavigationInfoPanel"},k),e=d.create("div",{innerHTML:this._items[c].text},f)}h.add(f,this._items[c].position);this._items[c].className&&h.add(e,this._items[c].className);e._index=c;e._item=this._items[c];this._items[c]._node=e}},startup:function(){this.onCreate(this._items)},destroy:function(){p.forEach(this.events,l.disconnect);this._touchBase=null;m.query("img",this.container).forEach(function(a){a._index=null;a._item=null;d.destroy(a)});this._items=
null;d.destroy(this._slideDiv);d.destroy(this.container);this.container=this._slideDiv=null},getItems:function(){return this._items},select:function(a){this._markSelected(a._node,a)},onSelect:function(a){},onUnSelect:function(a){},onCreate:function(a){},_onClickHandler:function(a){if("img"===a.target.tagName.toLowerCase()){var b=a.target,c=b._item;m.query("img",this.container).forEach(function(a){a!==b&&a._item.toggleGroup===c.toggleGroup&&this._markUnSelected(a,a._item)},this);this._toggleNode(b,
c)}},_toggleNode:function(a,b){"ON"===b.toggleState?(b.toggleState="OFF",b.src&&(a.src=b.src.toString()),this.onUnSelect(b)):(b.toggleState="ON",b.srcAlt&&(a.src=b.srcAlt),this.onSelect(b))},_markSelected:function(a,b){b.toggleState="ON";b.srcAlt&&(a.src=b.srcAlt);this.onSelect(b)},_markUnSelected:function(a,b){"ON"===b.toggleState&&(b.toggleState="OFF",b.src&&(a.src=b.src.toString()),this.onUnSelect(b))}});q("extend-esri")&&n.setObject("dijit.NavigationBar",g,t);return g});