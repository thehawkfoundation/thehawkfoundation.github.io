
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
            image.attr('src', 'files/thumb_16.jpg');
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
	
// Start Shareable stack Javascript code
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

