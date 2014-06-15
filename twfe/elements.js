var elements = function ee (e){

	var elm = e;
	by["cntxt"] = e[0];


	return {
		getElm:function(){
			return elm;
		},
		elements: function(el){
			elm = el;
			by["cntxt"] = el[0];
			return this;
		}

	}
};


var by = {
	cntxt: document,
	tag: function(tg){
		var d = this["cntxt"];
		var tmp = d.getElementsByTagName(tg);	
		if (!tmp) return false;
		return tmp;
	},

	css: function(stl){ 
		var d = this["cntxt"];
		var tmp = d.querySelectorAll(stl);
		if (!tmp) return false;
		return tmp;
	},

	attr: function(atr, name){
		var d = this["cntxt"];
		var tmp = d.querySelectorAll('[' + atr + '="' + name +'"]' );
		if (!tmp) return false;
		return tmp;
	}


};

Object.prototype.first = function(){
	return  this.getElm()[0];
} 

Object.prototype.text = function(){
	return this.innerText; 
} 