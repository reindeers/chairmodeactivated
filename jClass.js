(function(window) {

	function $(selector, context){
	context = this.context || document;
	var length = context.getElementsByClassName(selector).length;
	var selectors = [];
			for (var i = 0; i< length; i++){
			selectors[i] = context.getElementsByClassName(selector)[i];
		}
			return new F(selectors, length);
	}
	

	function F(selector, length) {
		this.length = length;
		this.selector = selector;
	}
 
	F.prototype = { 
	  hasClass: function(className) { 
	   var len = this.length;
	   for (var i = 0; i< len; i++){
	 		if (this.selector[i].getElementsByClassName(className).length) {
				return true;
			}
			else {
				return false;
			}
		}
	},

	addClass: function(name){ 
		var names = name.split(' ');
		var len = this.length;
		var len2 = names.length;
		
		for (var i = 0; i< len; i++){
		
			for (var j = 0; j < len2; j++){
				var names2 = this.selector[i].className.split(' ');
				var coincidence = false;
				
				for (var z=0; z<names2.length; z++){
					if(names2[z] == name) {
						coincidence = true;
						break; 
					}
				}
				
				var re = new RegExp("(^|\\s)" + names[j] + "(\\s|$)", "g"); 
				if (coincidence) continue; 
				this.selector[i].className = (this.selector[i].className + " " + names[j]).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}
		}
		
		return this;
	},
	
	removeClass: function(name){ 
		var names = name.split(' ');
		var len = this.length;
		var len2 = names.length;
		
		for (var i = 0; i< len; i++){
			for (var j = 0; j < len2; j++){
				var re = new RegExp("(^|\\s)" + names[j] + "(\\s|$)", "g");
				this.selector[i].className = this.selector[i].className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}
		}
		
		return this;
	},

	toggleClass: function(name, swt){ 
		var re = new RegExp("(^|\\s)" + name + "(\\s|$)", "g");
		var len = this.length;
		
		for (var i = 0; i< len; i++){
			var names = this.selector[i].className.split(' ');
			var coincidence = false;
			
			for (var j=0; j<names.length; j++){
				if (names[j] == name){
					coincidence = true;
					break; 
				}
			}

			if (swt == false ) {
				this.selector[i].className = this.selector[i].className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}
			
			else if (swt == true){
				this.selector[i].className = (this.selector[i].className + " " + name).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}
			
			else if (coincidence){
				this.selector[i].className = this.selector[i].className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}

			else {
				this.selector[i].className = (this.selector[i].className + " " + name).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
			}
		}
		return this;
	}

	};
	
	window.$ = $;	

})(window);
