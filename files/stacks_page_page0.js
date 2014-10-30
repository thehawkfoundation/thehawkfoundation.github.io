
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_16_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_16_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_16_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image Stack v1.6.1 by Joe Workman --//

var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();
var responsiveEnhance = function(img, width, monitor) {
    if (img.length) {
        for (var i=0, len=img.length; i<len; i++) {
            responsiveEnhance(img[i], width, monitor);
        }
    } else {
        if (((' '+img.className+' ').replace(/[\n\t]/g, ' ').indexOf(' large ') == -1) && img.clientWidth > width) {
            var fullimg = new Image();
            addEvent(fullimg, 'load', function(e) {
                img.src = this.src;
                img.className += ' large';
            });
            fullimg.src = img.getAttribute('data-fullsrc');
        }
        if (monitor != false) {
            addEvent(window, 'resize', function(e) {
                responsiveEnhance(img, width, false);
            });
            addEvent(img, 'load', function(e) {
                responsiveEnhance(img, width, false);
            });
        }
    }
};

$(document).ready(function() {
    var image = $('#stacks_in_16_page0 img.imageStyle:first');
    
        var version = parseInt($.browser.version);
        if ( !($.browser.msie && version <= 8)) {
            var source = image.attr('src');
            var responsiveWidth = Math.round(image.attr('width')*0.65);
            responsiveWidth = responsiveWidth > 500 ? 500 : responsiveWidth;
            image.attr('data-fullsrc', source);
            image.attr('src', 'files/thumb_16.png');
            responsiveEnhance(image,responsiveWidth);
        }
    
    
        var width = image.attr('width');
        image.css('max-width', width +'px');
    
});
//-- End Fluid Image Stack --//
	return stack;
})(stacks.stacks_in_16_page0);


// Javascript for stacks_in_217_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_217_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_217_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery.fn.exists=function(){return jQuery(this).length>0;}

	return stack;
})(stacks.stacks_in_217_page0);


// Javascript for stacks_in_218_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_218_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_218_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
// Start Shareable stack Javascript code//Calls the stack into action$(document).ready(function() {/*Created into a stack (rapidweaver addon) by StackManiac. Original plugin: socialShare by Tolga Erin*///The sharing code(function($){  $.fn.extend({    socialShare: function(options) {      var defaults = {        social: '',        title: document.title,        shareUrl: window.location.href,        description: $('meta[name="description"]').attr('content'),        animation: 'launchpad', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain        chainAnimationSpeed: 100,        whenSelect: false,        selectContainer: 'body',        blur: false      };      var options = $.extend(true,defaults, options);      var beforeDivs = '<div class="arthref arthrefSocialShare"><div class="overlay '+options.animation+'"><div class="icon-container"><div class="centered"><ul>';      var afterDivs = '</ul></div></div></div></div>';      return this.each(function() {          var o = options;          var obj = $(this);          if(o.whenSelect) {            $(o.selectContainer).mouseup(function(e) {              var selection = getSelected();              if(selection && (selection = new String(selection).replace(/^\s+|\s+$/g,''))) {                options.title = selection;              }            });          }          obj.click(function() {            createContainer();            if(o.blur) { $('.arthrefSocialShare').find('.overlay').addClass('opaque'); $('body').children().not('.arthref, script').addClass('blurred'); }            $('.arthrefSocialShare').find('.overlay').css('display','block');            setTimeout(function(){              $('.arthrefSocialShare').find('.overlay').addClass('active');              $('.arthrefSocialShare').find('ul').addClass('active');              if(o.animation=='chain') chainAnimation($('.arthrefSocialShare').find('li'),o.chainAnimationSpeed,'1');            },0);          });          $( document ).on( "click touchstart", ".arthrefSocialShare .overlay", function( e ) {            destroyContainer(o);          });          $( document ).on( "keydown", function( e ) {            if( e.keyCode == 27 ) destroyContainer(o);          });          $( document ).on( "click touchstart", ".arthrefSocialShare li", function( e ) {            e.stopPropagation();          });      });      function getSelected() {        if(window.getSelection) { return window.getSelection(); }        else if(document.getSelection) { return document.getSelection(); }        else {          var selection = document.selection && document.selection.createRange();          if(selection.text) { return selection.text; }            return false;        }        return false;      };      function chainAnimation(e,s,o) {        var $fade = $(e);        $fade.each(function( i ){            $(this).delay(i * s).fadeTo(s,o);        });      };      function createContainer(){        var siteSettings = {        'blogger': { text: 'Blogger', className: 'aBlogger', url: 'http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}' },        'delicious': { text: 'Delicious', className: 'aDelicious', url: 'http://del.icio.us/post?url={u}&amp;title={t}' },        'digg': { text: 'Digg', className: 'aDigg', url: 'http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}' },        'facebook': { text: 'Facebook', className: 'aFacebook', url: 'http://www.facebook.com/sharer.php?u={u}&amp;t={t}' },        'friendfeed': { text: 'FriendFeed', className: 'aFriendFeed', url: 'http://friendfeed.com/share?url={u}&amp;title={t}' },        'google': { text: 'Google+', className: 'aGooglePlus', url: 'https://plus.google.com/share?url={u}' },        'linkedin': { text: 'LinkedIn', className: 'aLinkedIn', url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source=' },        'myspace': { text: 'MySpace', className: 'aMySpace', url: 'http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}' },        'pinterest': { text: 'Pinterest', className: 'aPinterest', url: 'http://pinterest.com/pin/create/button/?url={u}&amp;description={d}' },        'reddit': { text: 'Reddit', className: 'aReddit', url: 'http://reddit.com/submit?url={u}&amp;title={t}' },        'stumbleupon': { text: 'StumbleUpon', className: 'aStumbleUpon', url: 'http://www.stumbleupon.com/submit?url={u}&amp;title={t}' },        'tumblr': { text: 'Tumblr', className: 'aTumblr', url: 'http://www.tumblr.com/share/link?url={u}&name={t}&description={d}' },        'twitter': { text: 'Twitter', className: 'aTwitter', url: 'http://twitter.com/home?status={t}%20{u}' },        'windows': { text: 'Windows', className: 'aWindows', url: 'http://profile.live.com/badge?url={u}' },        'yahoo': { text: 'Yahoo', className: 'aYahoo', url: 'http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}' }        };        var sites = options.social.split(',');        var listItem = '';        for (var i = 0; i <= sites.length-1; i++) {          siteSettings[ sites[i] ]['url'] = siteSettings[ sites[i] ]['url'].replace('{t}',encodeURIComponent(options.title)).replace('{u}',encodeURI(options.shareUrl)).replace('{d}',encodeURIComponent(options.description));          listItem += '<li><a href="'+siteSettings[ sites[i] ]['url'] +'" target="_blank" rel="nofollow" class="'+siteSettings[ sites[i] ]['className'] +'"><span></span></a><span>'+siteSettings[ sites[i] ]['text'] +'</span></li>';        };        $('body').append(beforeDivs+listItem+afterDivs);      }      function destroyContainer(o) {        if(o.blur) $('body').children().removeClass('blurred');        $('.arthrefSocialShare').find('.overlay').removeClass('active');        $('.arthrefSocialShare').find('ul').removeClass('active');        setTimeout(function(){          $('.arthrefSocialShare').find('.overlay').css('display','none');          $('.arthrefSocialShare').remove();        },300);      }    }  });})(jQuery);$(document).ready(function () {		$('.stacks_in_218_page0shareable').socialShare({			social: 'facebook,google,linkedin,twitter',			whenSelect: true,			selectContainer: '.shareable',			animation: 'launchpad',			blur: true,			title: document.title,        	shareUrl: window.location.href		});	});	});// End Shareable stack Javascript code
	return stack;
})(stacks.stacks_in_218_page0);


// Javascript for stacks_in_224_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_224_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_224_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery.fn.exists=function(){return jQuery(this).length>0;}

	return stack;
})(stacks.stacks_in_224_page0);


