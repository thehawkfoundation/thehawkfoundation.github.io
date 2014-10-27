
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};

// Javascript for stacks_in_118_page2
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_118_page2 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_118_page2 = (function(stack) {

/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 @license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a=e.param(r,t.traditional).split("&"),n=a.length,i=[],o,s;for(o=0;n>o;o++)a[o]=a[o].replace(/\+/g," "),s=a[o].split("="),i.push([decodeURIComponent(s[0]),decodeURIComponent(s[1])]);return i}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(x).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),w&&clearTimeout(w),w=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",l=f.attr("enctype")||f.attr("encoding")||o;c.setAttribute("target",v),(!u||/post/i.test(u))&&c.setAttribute("method","POST"),i!=d.url&&c.setAttribute("action",d.url),d.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),d.timeout&&(w=setTimeout(function(){j=!0,s(D)},d.timeout));var m=[];try{if(d.extraData)for(var p in d.extraData)d.extraData.hasOwnProperty(p)&&m.push(e.isPlainObject(d.extraData[p])&&d.extraData[p].hasOwnProperty("name")&&d.extraData[p].hasOwnProperty("value")?e('<input type="hidden" name="'+d.extraData[p].name+'">').val(d.extraData[p].value).appendTo(c)[0]:e('<input type="hidden" name="'+p+'">').val(d.extraData[p]).appendTo(c)[0]);d.iframeTarget||g.appendTo("body"),x.attachEvent?x.attachEvent("onload",s):x.addEventListener("load",s,!1),setTimeout(t,15);try{c.submit()}catch(h){var y=document.createElement("form").submit;y.apply(c)}}finally{c.setAttribute("action",i),c.setAttribute("enctype",l),r?c.setAttribute("target",r):f.removeAttr("target"),e(m).remove()}}function s(t){if(!y.aborted&&!O){if(M=n(x),M||(a("cannot access response document"),t=k),t===D&&y)return y.abort("timeout"),void S.reject(y,"timeout");if(t==k&&y)return y.abort("server abort"),void S.reject(y,"error","server abort");if(M&&M.location.href!=d.iframeSrc||j){x.detachEvent?x.detachEvent("onload",s):x.removeEventListener("load",s,!1);var r="success",i;try{if(j)throw"timeout";var o="xml"==d.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--F)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;y.responseText=u?u.innerHTML:null,y.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(d.dataType="xml"),y.getResponseHeader=function(e){var t={"content-type":d.dataType};return t[e.toLowerCase()]},u&&(y.status=Number(u.getAttribute("status"))||y.status,y.statusText=u.getAttribute("statusText")||y.statusText);var c=(d.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||d.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)y.responseText=f.value,y.status=Number(f.getAttribute("status"))||y.status,y.statusText=f.getAttribute("statusText")||y.statusText;else if(l){var m=M.getElementsByTagName("pre")[0],p=M.getElementsByTagName("body")[0];m?y.responseText=m.textContent?m.textContent:m.innerText:p&&(y.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==c&&!y.responseXML&&y.responseText&&(y.responseXML=X(y.responseText));try{E=_(y,c,d)}catch(v){r="parsererror",y.error=i=v||r}}catch(v){a("error caught: ",v),r="error",y.error=i=v||r}y.aborted&&(a("upload aborted"),r=null),y.status&&(r=y.status>=200&&y.status<300||304===y.status?"success":"error"),"success"===r?(d.success&&d.success.call(d.context,E,"success",y),S.resolve(y.responseText,"success",y),h&&e.event.trigger("ajaxSuccess",[y,d])):r&&(void 0===i&&(i=y.statusText),d.error&&d.error.call(d.context,y,r,i),S.reject(y,"error",i),h&&e.event.trigger("ajaxError",[y,d,i])),h&&e.event.trigger("ajaxComplete",[y,d]),h&&!--e.active&&e.event.trigger("ajaxStop"),d.complete&&d.complete.call(d.context,y,r),O=!0,d.timeout&&clearTimeout(w),setTimeout(function(){d.iframeTarget?g.attr("src",d.iframeSrc):g.remove(),y.responseXML=null},100)}}}var c=f[0],l,m,d,h,v,g,x,y,b,T,j,w,S=e.Deferred();if(S.abort=function(e){y.abort(e)},r)for(m=0;m<p.length;m++)l=e(p[m]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(d=e.extend(!0,{},e.ajaxSettings,t),d.context=d.context||d,v="jqFormIO"+(new Date).getTime(),d.iframeTarget?(g=e(d.iframeTarget),T=g.attr2("name"),T?v=T:g.attr2("name",v)):(g=e('<iframe name="'+v+'" src="'+d.iframeSrc+'" />'),g.css({position:"absolute",top:"-1000px",left:"-1000px"})),x=g[0],y={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{x.contentWindow.document.execCommand&&x.contentWindow.document.execCommand("Stop")}catch(n){}g.attr("src",d.iframeSrc),y.error=r,d.error&&d.error.call(d.context,y,r,t),h&&e.event.trigger("ajaxError",[y,d,r]),d.complete&&d.complete.call(d.context,y,r)}},h=d.global,h&&0===e.active++&&e.event.trigger("ajaxStart"),h&&e.event.trigger("ajaxSend",[y,d]),d.beforeSend&&d.beforeSend.call(d.context,y,d)===!1)return d.global&&e.active--,S.reject(),S;if(y.aborted)return S.reject(),S;b=c.clk,b&&(T=b.name,T&&!b.disabled&&(d.extraData=d.extraData||{},d.extraData[T]=b.value,"image"==b.type&&(d.extraData[T+".x"]=c.clk_x,d.extraData[T+".y"]=c.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(d.extraData=d.extraData||{},d.extraData[L]=A),d.forceSync?o():setTimeout(o,10);var E,M,F=50,O,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p=[],h,v=this.formToArray(t.semantic,p);if(t.data&&(t.extraData=t.data,h=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);h&&(g=g?g+"&"+h:h),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A=(w||D)&&!k,L;t.iframe!==!1&&(t.iframe||A)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){L=s(v)}):L=s(v):L=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",L);for(var E=0;E<p.length;E++)p[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=this.attr("id"),s=t?i.getElementsByTagName("*"):i.elements,u;if(s&&!/MSIE [678]/.test(navigator.userAgent)&&(s=e(s).get()),o&&(u=e(":input[form="+o+"]").get(),u.length&&(s=(s||[]).concat(u))),!s||!s.length)return a;var c,l,f,m,d,p,h;for(c=0,p=s.length;p>c;c++)if(d=s[c],f=d.name,f&&!d.disabled)if(t&&i.clk&&"image"==d.type)i.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:i.clk_x},{name:f+".y",value:i.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&i.clk){var g=e(i.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:i.clk_x},{name:f+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}),$.fn.replaceAndFadeIn=function(e){return this.each(function(){$(this).empty().hide().append(e).fadeIn("slow")})};




/*! *********************************************
	
	VARS

	BOOTSNAP3 CONTACT v.3.0.0
	COPYRIGHT: 2014; Yabdab,Inc.
	MODIFIED: 2014-05-13 13:24:48

@preserve	
********************************************** */

// Selectors
var stack_selector	= "#stacks_in_118_page2";
var form_selector	= "#stacks_in_118_page2-contact";
var cancel_selector	= "#stacks_in_118_page2-cancel";
var submit_selector	= "#stacks_in_118_page2-submit";
var status_selector	= "#stacks_in_118_page2-status";
var autoreplymsg_selector = "#stacks_in_118_page2-auto-reply-msg";
var close_btn		= ".close";
var assetpath		= "files";
var required_class	= "required";

// String Vars
var name_label 		= "Name";
var email_label 	= "Email";
var message_label	= "Message";
var subject			= "Website Message";
var submit_button	= "Send";
var cancel_button	= "Cancel";
var success_msg		= "Thank you for your message";
var error_msg		= "Sorry but your message could not be sent, try again later";
var processing_msg 	= "Processing ...";
var human_question	= "Are you human?";
var human_answer	= "Yes";






/*! *********************************************
	
	BRAINS

	BOOTSNAP3 CONTACT v.3.0.0
	COPYRIGHT: 2014; Yabdab,Inc.
	MODIFIED: 2014-05-13 13:33:23

@preserve	
********************************************** */
function bs3_contact(e){e(document).ready(function(){function s(){setTimeout(function(){window.scrollTo(0,1)},100)}function o(){var s=e(this),o=s.attr("action");e(submit_selector).addClass("disabled").html(processing_msg),e(this).ajaxSubmit({url:o,type:"post",data:{auto_reply_msg:i},success:t,timeout:1e4,error:r})}function t(o,t,r,a){"success"==o?(e(form_selector).resetForm(),s(),e(submit_selector).removeClass("disabled").html(submit_button),e(status_selector).replaceAndFadeIn('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+success_msg+"</div>"),e(form_selector).find(".form-group").removeClass("has-error"),e(form_selector).find(".form-control-feedback").removeClass("glyphicon glyphicon-remove")):(e(submit_selector).removeClass("disabled").val(submit_button),e(status_selector).replaceAndFadeIn('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+error_msg+"</div>"))}function r(){alert("Oops! Something went wrong!")}function a(s){if(!s||9!=s.keyCode){var o=e(this).closest("div.form-group"),t=/^\s*$/.test(this.value);return t?(o.addClass("has-error"),o.find(".form-control-feedback").addClass("glyphicon glyphicon-remove")):(o.removeClass("has-error"),o.find(".form-control-feedback").removeClass("glyphicon glyphicon-remove")),e(this).hasClass("email")&&!l(this.value)&&(o.addClass("has-error"),o.find(".form-control-feedback").addClass("glyphicon glyphicon-remove"),t=!0),e(this).hasClass("human")&&this.value.toLowerCase()!=human_answer.toLowerCase()&&(o.addClass("has-error"),o.find(".form-control-feedback").addClass("glyphicon glyphicon-remove"),t=!0),!t}}function l(e){var s=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;return s.test(e)?!0:!1}var i=e(autoreplymsg_selector).text();e(form_selector).on("submit",function(){var t=[];e("."+required_class,this).each(function(){if(!a.apply(this)){var s=e(this).closest(".form-group").children("label"),o=s.attr("title")||s.text();o="<li>"+o+"</li>",t.push(o.match(/[^:]*/)[0])}}),e.unique(t);var r=0==t.length;return r&&o.apply(this),s(),!1}),e(cancel_selector).on("click",function(){e(form_selector).resetForm(),s(),e(status_selector).html(""),e(submit_selector).removeClass("disabled").html(submit_button),e(form_selector).find(".form-group").removeClass("has-error"),e(form_selector).find(".form-control-feedback").removeClass("glyphicon glyphicon-remove").removeClass("glyphicon glyphicon-ok")}),e(document).on("focus",".form-group",function(s){e(this).removeClass("has-error"),e(this).find(".form-control-feedback").removeClass("glyphicon glyphicon-remove")}),e(document).on("focus",".form-group",function(s){e(this).removeClass("has-error"),e(this).find(".form-control-feedback").removeClass("glyphicon glyphicon-remove")})})}bs3_contact($);

	return stack;
})(stacks.stacks_in_118_page2);


