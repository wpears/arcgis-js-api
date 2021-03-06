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
define("esri/workers/WorkerClient","dojo/Evented dojo/_base/declare dojo/Deferred dojo/_base/lang esri/sniff esri/kernel require".split(" "),function(e,h,f,d,k,l,g){e=h([e],{declaredClass:"esri.workers.WorkerClient",worker:null,returnDeferreds:!1,_queue:null,constructor:function(a,b){a&&this.setWorker(a);this.returnDeferreds=!!b;this._queue={}},setWorker:function(a){var b=g.toUrl(a);b?(b.match(/\.js$/)||(b+=".js"),this.worker&&(a=this.worker,a.removeEventListener("message",d.hitch(this,this._acceptMessage),
!1),a.removeEventListener("error",d.hitch(this,this._errorMessage),!1),this.worker=null),this.worker=new Worker(b),this.worker.addEventListener("message",d.hitch(this,this._acceptMessage),!1),this.worker.addEventListener("error",d.hitch(this,this._errorMessage),!1)):console.error("can not resolve worker path:",a)},postMessage:function(a,b){if(a instanceof Array||"object"!=typeof a)a={data:a};var c=+new Date+Math.floor(1E3*Math.random());a.msgId=c;this._queue[c]=new f;this.worker.postMessage(a,b);
return this.returnDeferreds?this._queue[c]:this._queue[c].promise},terminate:function(){var a=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var b=a.length-1;0<=b;b--)this._queue[a[b]].cancel("terminated"),delete this._queue[a[b]]},addWorkerCallback:function(a,b){var c;c=this._getUrl(a);!1===c?(c=new f,c.reject({message:"Could not load text from "+a})):(c=this.postMessage({action:"add-callback",url:c,cbName:b||"main"}),c.then(d.hitch(this,function(a){a.target=this;this.emit("callback-added",
a)})));return c},importScripts:function(a){Array.isArray(a)||(a=[a]);a=a.map(function(a){return this._getUrl(a)},this);a=this.postMessage({action:"import-script",url:a});a.then(d.hitch(this,function(a){a.target=this;this.emit("scripts-imported",a)}));return a},_acceptMessage:function(a){var b=a.data,c=b.msgId;if(b.status&&"debug"==b.status)console.log(b);else if(c&&c in this._queue){var d=this._queue[c];"progress"==b.status?d.progress(a.data):("error"==b.status?d.reject(a.data):d.resolve(a.data),
delete this._queue[c])}this.emit("message",{message:a.data,event:a,target:this})},_errorMessage:function(a){this.onerror||this.onError?this.onerror?this.onerror(a):this.onError(a):console.log("Worker Error: "+a.message+"\nIn "+a.filename+" on "+a.lineno)},_getUrl:function(a){var b=g.toUrl(a);if(b)b.match(/\.js$/)||(b+=".js");else return console.error("can not resolve path:",a),!1;return b}});k("extend-esri")&&d.setObject("workers.WorkerClient",e,l);return e});