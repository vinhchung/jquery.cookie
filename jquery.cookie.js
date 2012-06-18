(function ($) {   
   $.cookieHelper = {
        value : '',	
        get: function (name) {
		var cookies = document.cookie.split(';'), cookie, i=-1;
		for(;cookie=cookies[++i] && cookies[i].split('=');) {
		    if($.trim(cookie[0]) === name) {
		        this.value = cookie.length > 2 ? cookie.slice(1).join('=') : cookie[1];
			return this;
		    }
		}
		return;
	},
	set: function (name, value, options) {       	
		if(!name || !value) { return };
		options = $.extend({expires: -1, path: '', domain: ''}, options)
		if (typeof options.expires === 'number') {
			var offset = options.expires, dateTime = options.expires = new Date();
			dateTime.setDate(dateTime.getDate() + offset);
		}		
		return document.cookie = [name + '=' + value, 'expires=' + options.expires, 'domain=' + options.domain, 'path=' + options.path, options.secure ? 'secure' : ''].join(';');
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