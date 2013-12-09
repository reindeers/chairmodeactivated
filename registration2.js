var div = document.getElementById('error');
var form = document.forms.registration;
var inp = form.elements.inp;
var regexp = {
	reg: " ",
	email:  function(){
			return reg = /[a-z0-9!$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|ru)\b/;
			},
			
	FIO: 	function(){
			return reg = /^[а-яА-Я]{3,20}\s[а-яА-Я]{3,20}\s[а-яА-Я]{3,20}$/;
			},
			
	index:  function(){
			return reg = /^\d{6}$/; 
			}
}

function isUnique(email){
	var xhr = new XMLHttpRequest();
	var params = encodeURIComponent(email);
	xhr.open("POST", '/email', true)
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xhr.onreadystatechange = function() {
		if (this.readyState != 4) this.responseText;
		}
	xhr.send(params);
}


for (var i=0; i < form.length; i++){

	form[i].onblur = function() {
		if (!(this.value.match(regexp[this.name]()))){
			this.className = 'error';
			div.style.display = 'block';
		}
		
		if ((this.name=="email") && (!isUnique(this.value))){
		console.log(this.name, isUnique(this.value));
			this.className = 'error';
			div.style.display = 'block';
			alert("Такой емейл уже зарегестрирован");
		}
	}
	
	form[i].onfocus = function() {
		if (this.className == 'error') { 
			this.className = '';
			div.style.display = 'none';
		}
	}

}
