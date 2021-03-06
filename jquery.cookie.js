/*!
* jQuery Cookie Plugin
* https://github.com/vinhchung/jquery.cookie
*
* Copyright 2012, Vinh Chung
* Licensed under the MIT
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {   
   $.cookieHelper = {
        value : '',	
        get: function (name) {
		var cookies = document.cookie.split(';'), cookie, i=-1, this.value = '';
		for(;cookie=cookies[++i] && cookies[i].split('=');) {
		    if($.trim(cookie[0]) === name) {
		        this.value = cookie.length > 2 ? cookie.slice(1).join('=') : cookie[1];
			return this;
		    }
		}
		return this;
	},
	set: function (name, value, options) {       	
		if(!name || !value) { return };
		options = $.extend({expires: -1, path: '/', domain: ''}, options)
		if (typeof options.expires === 'number') {
			var offset = options.expires, dateTime = options.expires = new Date();
			dateTime.setDate(dateTime.getDate() + offset);
		}		
		return document.cookie = [name + '=' + value, options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''].join('');;
	},
	attr: function (name) {
	    var pairs = this.value.split('&'), keyvaluepair, pair, i=-1;
	    if(pairs.length > 1) {
	        for(;pair = pairs[++i];){
	             keyvaluepair = pair.split('=');
		     if($.trim(keyvaluepair[0]) === name) {
		         return keyvaluepair[1];
		     }
		}
	    }
	    return undefined;
	}
   }

})(jQuery);