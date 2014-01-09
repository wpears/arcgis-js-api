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
define("esri/arcgis/Portal","dojo/_base/declare dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/_base/array dojo/_base/sniff dojo/DeferredList esri/kernel esri/lang esri/request esri/Evented esri/IdentityManager".split(" "),function(f,d,w,k,g,x,B,t,y,z,A){var e={options:{disableIdentityLookup:!0},requestParams:{f:"json"}},h=function(a){function c(c){a[c]||(a[c]=function(){var d=arguments;return k.when(a,function(a){Array.prototype.unshift.call(d,a.results||a);return h(g[c].apply(g,d))})})}
if(!a)return a;a.then&&(a=d.delegate(a));a.total||(a.total=k.when(a,function(a){return y.isDefined(a.total)?a.total:a.length||0}));c("forEach");c("filter");c("map");c("some");c("every");return a},b={useSSL:function(a,c){return-1!==a.indexOf("https:")||e.self&&e.self.allSSL?c.replace("http:","https:"):c},formatUrl:function(a){var c=e.loggedInUser&&e.loggedInUser.credential&&e.loggedInUser.credential.token;return-1!==a.indexOf("null")?null:b.useSSL(window.location.protocol,c?a+(-1!==a.indexOf("?")?
"\x26":"?")+("token\x3d"+c):a)},resultsToTypedArray:function(a,c,b){b=b?b.listings||b.notifications||b.userInvitations||b.tags||b.items||b.groups||b.comments||b.results||b:[];return g.map(b,function(b){b=d.mixin(b,c||{});return a?new a(b):b})},clearFieldsFromObject:function(a,c){var b,e=a.length;if(d.isArray(a))for(b=0;b<e;b++)delete c[a[b]];else for(b in a)delete c[b];return c},requestToTypedArray:function(a,c,e,f,g){return h(b.request(a,c,e).then(d.partial(b.resultsToTypedArray,f,g)))},request:function(a,
c,l){c&&c.portal&&delete c.portal;c=d.mixin(d.mixin({},c||{}),e.requestParams);l=d.mixin(l||{},e.options);return z({url:b.useSSL(window.location.protocol,a.url||a),content:c,callbackParamName:"callback",timeout:l&&l.timeout||0},l)},formatQueryParams:function(a,c,b){a=d.mixin(d.mixin({},a),d.isString(c)?{q:c}:c||{});a.q=!b&&e.extraQuery?"("+a.q+")"+e.extraQuery:a.q;return a}},n=f([],{declaredClass:"esri.arcgis.PortalComment",constructor:function(a){d.mixin(this,a);this.url=this.item.itemUrl+"/comments/"+
this.id;this.created=this.created?new Date(this.created):null}}),p=f([],{declaredClass:"esri.arcgis.PortalRating",constructor:function(a){d.mixin(this,a);this.url=this.item.itemUrl+"/rating";this.created=this.created?new Date(this.created):null}}),m=f([],{declaredClass:"esri.arcgis.PortalItem",constructor:function(a){d.mixin(this,a);this.folderId=this.ownerFolder||this.folderId;this.itemUrl=(this.portal&&this.portal.portalUrl)+"content/items/"+this.id;this.userItemUrl=this.itemUrl.replace("content",
"content/users/"+this.owner+(this.folderId?"/"+this.folderId:""));this.itemDataUrl=b.formatUrl(this.itemUrl+"/data");this.thumbnailUrl=b.formatUrl(this.itemUrl+"/info/"+this.thumbnail);this.created=this.created?new Date(this.created):null;this.uploaded=this.uploaded?new Date(this.uploaded):null;this.modified=this.modified?new Date(this.modified):null},addComment:function(a){var c=d.isString(a)?{comment:a}:a;return b.request(this.itemUrl+"/addComment",c,{usePost:!0}).then(d.hitch(this,function(a){return n(d.mixin(c,
{id:a.commentId,item:this}))}))},updateComment:function(a){if(a&&a.url&&a.comment)return b.request(a.url+"/update",{comment:a.comment},{usePost:!0}).then(function(b){a.id=b.commentId;return a});throw Error();},getComments:function(){return b.requestToTypedArray(this.itemUrl+"/comments",null,null,n,{item:this})},deleteComment:function(a){if(a&&a.url)return b.request(a.url+"/delete",null,{usePost:!0});throw Error();},addRating:function(a){var c=d.isObject(a)?a:{rating:parseFloat(a)};return b.request(this.itemUrl+
"/addRating",c,{usePost:!0}).then(d.hitch(this,function(a){return new p(d.mixin(c,{id:a.ratingId,item:this}))}))},getRating:function(){return b.request(this.itemUrl+"/rating").then(d.hitch(this,function(a){return new p(d.mixin(a,{item:this}))}))},deleteRating:function(){return b.request(this.itemUrl+"/deleteRating",null,{usePost:!0})}}),q=f([],{declaredClass:"esri.arcgis.PortalListing",constructor:function(a){d.mixin(this,a);this.id=this.itemId;this.url=(this.portal&&this.portal.portalUrl)+"content/"+
(this.userItemUrl?"items/":"listings/")+this.itemId;this.commentsUrl=this.url+"/comments";this.created=this.created?new Date(this.created):null;this.banner=this.banner?b.formatUrl(this.url+"/info/"+this.banner):"";this.thumbnail=this.thumbnail?b.formatUrl(this.url+"/info/"+this.thumbnail):"";this.largeThumbnail=this.largeThumbnail?b.formatUrl(this.url+"/info/"+this.largeThumbnail):"";this.avgRating=this.avgRating||0;this.numRatings=this.numRatings||0;this.numComments=this.numComments||0;this.listingProperties=
this.listingProperties||{priceDesc:"",creditsPerTransaction:0,licenseType:"free",trialSupported:!1,trialDuration:0,listingAccess:"private"};for(var c in this.listingProperties)this[c]&&(this.listingProperties[c]=this[c]);this.properties=this.properties||{systemRequirements:"",termsAndConditions:"",version:"1.0"};this.screenshots=g.map(this.screenshots,d.hitch(this,function(a){return b.formatUrl(this.url+"/info/"+a)}));this.vendorName=this.vendor.name;this.vendor.orgPhone=this.vendor.orgPhone;this.vendor.orgEmail=
this.vendor.orgEmail;this.vendor.orgUrl=this.vendor.orgUrl;this.vendor.description=this.vendor.description;this.vendor.thumbnail=this.vendor.thumbnail?this.userItemUrl?b.formatUrl(this.portal.portalUrl+"/accounts/self/resources/"+this.vendor.thumbnail):b.formatUrl(this.url+"/vendorinfo/"+this.vendor.thumbnail):""},getComments:function(){return b.requestToTypedArray(this.commentsUrl,null,null,n,{item:this})},getVendor:function(){return this.vendor}}),r=f([],{declaredClass:"esri.arcgis.PortalProvision",
constructor:function(a){d.mixin(this,a);this.created=this.created?new Date(this.created):null;this.startDate=this.startDate?new Date(this.startDate):null;this.endDate=this.endDate&&-1!==this.endDate?new Date(this.endDate):null;this.listing=a.listing?new q(d.mixin(a.listing,{portal:this.portal})):null}}),s=f([],{declaredClass:"esri.arcgis.PortalGroup",constructor:function(a){d.mixin(this,a);this.url=(this.portal&&this.portal.portalUrl)+"community/groups/"+this.id;this.thumbnailUrl=b.formatUrl(this.url+
"/info/"+this.thumbnail);this.modified=this.modified?new Date(this.modified):null;this.created=this.created?new Date(this.created):null},getMembers:function(){return b.request(this.url+"/users")},queryItems:function(a){a=b.formatQueryParams({},a);a.q="group:"+this.id+(a.q?" "+a.q:"");return this.portal.queryItems(a)}}),u=f([],{declaredClass:"esri.arcgis.PortalFolder",constructor:function(a){d.mixin(this,a);this.url=(this.portal&&this.portal.portalUrl)+"content/users/"+this.username+"/"+this.id;this.created=
this.created?new Date(this.created):null},getItems:function(){return b.requestToTypedArray(this.url,null,null,m,{portal:this.portal,folderId:this.id})}}),v=f([],{declaredClass:"esri.arcgis.PortalUser",constructor:function(a){d.mixin(this,a);this.url=(this.portal&&this.portal.portalUrl)+"community/users/"+this.username;this.userContentUrl=(this.portal&&this.portal.portalUrl)+"content/users/"+this.username;this.thumbnailUrl=b.formatUrl(this.url+"/info/"+this.thumbnail);this.modified=this.modified?new Date(this.modified):
null;this.created=this.created?new Date(this.created):null},getGroups:function(){return h(b.request(this.url).then(d.hitch(this,function(a){return b.resultsToTypedArray(s,{portal:this.portal},a.groups)})))},getNotifications:function(){return b.requestToTypedArray(this.url+"/notifications",null,null,null,{portal:this.portal})},getGroupInvitations:function(){return b.requestToTypedArray(this.url+"/invitations",null,null,null,{portal:this.portal})},getTags:function(){return b.requestToTypedArray(this.url+
"/tags",null,null,null,{portal:this.portal})},getFolders:function(){return h(this.getContent().then(function(a){return a.folders}))},getItems:function(a){return h(this.getContent(a).then(function(a){return a.items}))},getItem:function(a){return b.request(this.portal.portalUrl+"content/items/"+a).then(d.hitch(this,function(a){return new m(d.mixin(a,{portal:this.portal}))}))},getContent:function(a){var c=this.url.replace("community","content")+(a?"/"+a:"");return b.request(c).then(d.hitch(this,function(c){c.folders=
b.resultsToTypedArray(u,{portal:this.portal},c.folders);c.items=b.resultsToTypedArray(m,{portal:this.portal,folderId:a},c.items);return c}))}});f={Portal:f([A],{declaredClass:"esri.arcgis.Portal",onLoad:function(){},constructor:function(a){a=d.isObject(a)?a:{url:a};this.registerConnectEvents();a.self?(e.self=a.self,d.mixin(this,{url:window.location.protocol+"//"+(a.self.urlKey?a.self.urlKey+"."+a.self.customBaseUrl:a.self.portalHostname)}),this.portalUrl=-1!==this.url.indexOf("/sharing")?this.url+
"/":this.url+"/sharing/rest/",a=a.self.user?this.signIn():this.init(this.url)):(a.url&&d.mixin(this,{url:a.url}),a=this.init(this.url));a.then(d.hitch(this,function(){this.emit("ready",this);this.onLoad(this)}))},init:function(a,c){a=(a||this.portalUrl).replace(/\/+$/,"");this.portalUrl=-1!==a.indexOf("/sharing")?a+"/":a+"/sharing/rest/";return this._getSelf(this.portalUrl).then(d.hitch(this,function(a){e.self=d.mixin({},a);if((a=a.user)&&c)a.portal=this,a=new v(a),e.loggedInUser=d.mixin({},d.mixin(a,
{credential:c}));e.self.id&&!1===e.self.canSearchPublic&&(e.extraQuery=" AND orgid:"+e.self.id);d.mixin(this,e.self);this.thumbnailUrl=b.formatUrl(this.portalUrl+"accounts/self/resources/"+this.thumbnail);this.isOrganization=this.access&&this.access.length||!1;this.created=this.created?new Date(this.created):null;this.modified=this.modified?new Date(this.modified):null;return this}))},signIn:function(){if(e&&e.loggedInUser){var a=new k;setTimeout(function(){a.resolve(e.loggedInUser)},0);return a}e.options.disableIdentityLookup=
!1;if(!e.self||!e.self.user)e.self=null;return t.id.getCredential(this.portalUrl).then(d.hitch(this,"init",this.url)).then(function(){return e.loggedInUser},function(a){e.options.disableIdentityLookup=!0;throw a;})},signOut:function(){e.loggedInUser.credential&&e.loggedInUser.credential.destroy();e.loggedInUser=null;e.options.disableIdentityLookup=!0;b.clearFieldsFromObject(e.self,this);e.self=null;return this.init(this.url)},getPortalUser:function(){return e.loggedInUser},addResource:function(a,
c){return b.request(this.portalUrl+"portals/self/addResource",{key:a,text:c},{usePost:!0})},update:function(a){return b.request(this.portalUrl+"portals/self/update",a,{usePost:!0})},queryGroups:function(a){return this._queryPortal(this.portalUrl+"community/groups",b.formatQueryParams({},a),s)},queryItems:function(a){return this._queryPortal(this.portalUrl+"search",b.formatQueryParams({},a),m)},queryListings:function(a){a=b.formatQueryParams({},a,!0);var c="";a.q&&-1<a.q.toLowerCase().indexOf("mylistings:true")?
(a.q=a.q.toLowerCase().replace("mylistings:true",""),c="?mylistings\x3dtrue"):a.q||(a.q='""');return this._queryPortal(this.portalUrl+"content/listings"+c,a,q)},getProvisions:function(){return this.getCustomers().then(d.hitch(this,function(a){return a.purchases}))},getInterests:function(){return this.getCustomers().then(d.hitch(this,function(a){return a.interests}))},getTrials:function(){return this.getCustomers().then(d.hitch(this,function(a){return a.trials}))},getCustomers:function(a){return b.request(this.portalUrl+
"portals/self/customers",{status:a||"all"})},getMyPurchases:function(){return this.getPurchases().then(function(a){return a.purchases})},getMyInterests:function(){return this.getPurchases().then(function(a){return a.interests})},getPurchases:function(){return b.request(this.portalUrl+"portals/self/purchases").then(d.hitch(this,function(a){a.interests=g.map(a.interests,function(a){return d.mixin(a.provision,{listing:a.listing})});a.purchases=g.map(a.purchases,function(a){return d.mixin(a.provision,
{listing:a.listing})});a.trials=g.map(a.trials,function(a){return d.mixin(a.provision,{listing:a.listing})});a.interests=b.resultsToTypedArray(r,{portal:this},a.interests);a.trials=b.resultsToTypedArray(r,{portal:this},a.trials);a.purchases=b.resultsToTypedArray(r,{portal:this},a.purchases);return a}))},queryUsers:function(a){return this._queryPortal(this.portalUrl+"community/users",b.formatQueryParams({sortField:"username"},a),v)},_getSelf:function(a){var c;a=a+"accounts/self?culture\x3d"+w.locale;
e.self?(c=new k,setTimeout(function(){c.resolve(e.self)},0)):c=b.request(a);return c},_queryPortal:function(a,c,e){var f=d.mixin({num:10,start:0,sortField:"title",sortOrder:"asc"},c),g=["start","query","num","nextStart"];a=b.request(a,f).then(d.hitch(this,function(a){a.results=b.resultsToTypedArray(e,{portal:this},a);a.queryParams=d.mixin({},f);a.nextQueryParams=d.mixin(f,{start:a.nextStart});return b.clearFieldsFromObject(g,a)}));a=d.delegate(a);a.queryParams=d.mixin({},f);a.nextQueryParams=k.when(a,
function(a){return a.nextQueryParams});return h(a)}}),PortalFolder:u,PortalGroup:s,PortalItem:m,PortalComment:n,PortalRating:p,PortalUtil:b,PortalResult:h,PortalListing:q};x("extend-esri")&&d.mixin(d.getObject("arcgis",!0,t),f);return f});