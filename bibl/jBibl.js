function jBibl (element){
	this.element = element;
}

jBibl.prototype = {
jClass: function(name){
this.element.className = name;
return this;
},
jId: function(id){
this.element.id = id;
return this;
}
}