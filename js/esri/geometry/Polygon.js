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
define("esri/geometry/Polygon","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/lang esri/SpatialReference esri/geometry/Geometry esri/geometry/Point esri/geometry/Extent esri/geometry/mathUtils".split(" "),function(z,p,h,A,m,B,C,D,n,x,y){var r={type:"polygon",rings:null},l=z(D,{declaredClass:"esri.geometry.Polygon",constructor:function(a){h.mixin(this,r);this.rings=[];this._ring=0;a&&(h.isArray(a)?this.rings=h.isArray(a[0][0])?a:[a]:a.rings?h.mixin(this,a):this.spatialReference=
a,this.spatialReference&&(this.spatialReference=new C(this.spatialReference)));this.verifySR()},_extent:null,addRing:function(a){this._extent=this._centroid=null;this._ring=this.rings.length;this.rings[this._ring]=[];h.isArray(a[0])?p.forEach(a,this._addPointArr,this):p.forEach(a,this._addPoint,this);return this},_addPointArr:function(a){this.rings[this._ring].push(a)},_addPoint:function(a){this.rings[this._ring].push([a.x,a.y])},_insertPoints:function(a,b){this._extent=this._centroid=null;this._ring=
b;this.rings[this._ring]||(this.rings[this._ring]=[]);p.forEach(a,this._addPoint,this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.rings.length)||null!==b&&void 0!==a&&(0>b||b>=this.rings[a].length)?!1:!0},getPoint:function(a,b){if(this._validateInputs(a,b))return new n(this.rings[a][b],this.spatialReference)},setPoint:function(a,b,c){if(this._validateInputs(a,b))return this._extent=this._centroid=null,this.rings[a][b]=[c.x,c.y],this},insertPoint:function(a,b,c){if(this._validateInputs(a)&&
B.isDefined(b)&&0<=b&&b<=this.rings[a].length)return this._extent=this._centroid=null,this.rings[a].splice(b,0,[c.x,c.y]),this},removeRing:function(a){if(this._validateInputs(a,null)){this._extent=this._centroid=null;a=this.rings.splice(a,1)[0];var b,c=a.length,d=this.spatialReference;for(b=0;b<c;b++)a[b]=new n(a[b],d);return a}},removePoint:function(a,b){if(this._validateInputs(a,b))return this._extent=this._centroid=null,new n(this.rings[a].splice(b,1)[0],this.spatialReference)},getExtent:function(){var a;
if(this._extent)return a=new x(this._extent),a._partwise=this._partwise,a;a=this.rings;var b=a.length;if(b&&a[0].length){var c,d,e,g,k,f,q,s,l=g=a[0][0][0],h=k=a[0][0][1],m=Math.min,n=Math.max,p=this.spatialReference,r=[],t,u,v,w;for(f=0;f<b;f++){c=a[f];t=u=c[0]&&c[0][0];v=w=c[0]&&c[0][1];s=c.length;for(q=0;q<s;q++)d=c[q],e=d[0],d=d[1],l=m(l,e),h=m(h,d),g=n(g,e),k=n(k,d),t=m(t,e),v=m(v,d),u=n(u,e),w=n(w,d);r.push(new x({xmin:t,ymin:v,xmax:u,ymax:w,spatialReference:p?p.toJson():null}))}this._extent=
{xmin:l,ymin:h,xmax:g,ymax:k,spatialReference:p?p.toJson():null};this._partwise=1<r.length?r:null;a=new x(this._extent);a._partwise=this._partwise;return a}},contains:function(a){var b=this.rings,c,d=!1,e,g,k,f,q,s,l=b.length;c=this.spatialReference;e=a.spatialReference;var h=a.x;a=a.y;c&&(e&&!c.equals(e)&&c._canProject(e))&&(a=c.isWebMercator()?n.lngLatToXY(h,a):n.xyToLngLat(h,a,!0),h=a[0],a=a[1]);for(s=0;s<l;s++){c=b[s];k=c.length;for(q=f=0;q<k;q++)if(f++,f===k&&(f=0),e=c[q],g=c[f],(e[1]<a&&g[1]>=
a||g[1]<a&&e[1]>=a)&&e[0]+(a-e[1])/(g[1]-e[1])*(g[0]-e[0])<h)d=!d}return d},getCentroid:function(){if(null!=this._centroid)return this._centroid;var a,b,c,d,e=[],g,k;p.forEach(this.rings,function(d){a=b=c=0;p.forEach(d,function(e,h){h<d.length-1&&(g=d[h+1],k=e[0]*g[1]-g[0]*e[1],a+=(e[0]+g[0])*k,b+=(e[1]+g[1])*k,c+=k)});0<c&&(c*=-1);e.push([a,b,c/2])});e.sort(function(a,b){return a[2]-b[2]});d=6*e[0][2];return this._centroid=new n(e[0][0]/d,e[0][1]/d,this.spatialReference)},isClockwise:function(a){var b=
0,c,d=a.length,e=h.isArray(a[0])?function(a,b){return a[0]*b[1]-b[0]*a[1]}:function(a,b){return a.x*b.y-b.x*a.y};for(c=0;c<d;c++)b+=e(a[c],a[(c+1)%d]);return 0>=b/2},isSelfIntersecting:function(a){a=a||this;var b,c,d,e,g,k,f,h=a.rings.length,l;for(d=0;d<h;d++){for(b=0;b<a.rings[d].length-1;b++){g=[[a.rings[d][b][0],a.rings[d][b][1]],[a.rings[d][b+1][0],a.rings[d][b+1][1]]];for(c=d+1;c<h;c++)for(e=0;e<a.rings[c].length-1;e++)if(k=[[a.rings[c][e][0],a.rings[c][e][1]],[a.rings[c][e+1][0],a.rings[c][e+
1][1]]],(f=y._getLineIntersection2(g,k))&&!(f[0]===g[0][0]&&f[1]===g[0][1]||f[0]===k[0][0]&&f[1]===k[0][1]||f[0]===g[1][0]&&f[1]===g[1][1]||f[0]===k[1][0]&&f[1]===k[1][1]))return!0}e=a.rings[d].length;if(!(4>=e))for(b=0;b<e-3;b++){l=e-1;0===b&&(l=e-2);g=[[a.rings[d][b][0],a.rings[d][b][1]],[a.rings[d][b+1][0],a.rings[d][b+1][1]]];for(c=b+2;c<l;c++)if(k=[[a.rings[d][c][0],a.rings[d][c][1]],[a.rings[d][c+1][0],a.rings[d][c+1][1]]],(f=y._getLineIntersection2(g,k))&&!(f[0]===g[0][0]&&f[1]===g[0][1]||
f[0]===k[0][0]&&f[1]===k[0][1]||f[0]===g[1][0]&&f[1]===g[1][1]||f[0]===k[1][0]&&f[1]===k[1][1]))return!0}}return!1},toJson:function(){var a={rings:h.clone(this.rings)},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});l.defaultProps=r;l.createEllipse=function(a){var b=a.center.x,c=a.center.y,d=a.longAxis,e=a.shortAxis,g=a.numberOfPoints,k=a.map,f,h,m;a=[];var n=2*Math.PI/g;for(h=0;h<g;h++)f=Math.cos(h*n),m=Math.sin(h*n),f=k.toMap({x:d*f+b,y:e*m+c}),a.push(f);a.push(a[0]);b=new l(k.spatialReference);
b.addRing(a);return b};l.createCircle=function(a){return l.createEllipse({center:a.center,longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,map:a.map})};A("extend-esri")&&(h.setObject("geometry.Polygon",l,m),m.geometry.defaultPolygon=r,m.geometry.createEllipse=l.createEllipse,m.geometry.createCircle=l.createCircle,m.geometry.isClockwise=l.prototype.isClockwise,m.geometry.polygonSelfIntersecting=l.prototype.isSelfIntersecting);return l});