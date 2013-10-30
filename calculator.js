function Calculator() {
var method = {
"+": function(a, b) { return a + b;},
"-": function(a, b) { return a - b;}
}
	this.calculate = function(line){
		var line2 = line.split(' ');
		var plusminus = [];
		var numbers = [];
		

		for (var i=1; i<line2.length; i=i+2){
		
			plusminus.push(line2[i]);
		}

		for (var i=0; i<line2.length; i=i+2){
			numbers.push(line2[i]);
		}

		
		var result = numbers[0];
		numbers.splice(0, 1);
		var num1, num2, op;
		for (var i=0; i<numbers.length; i++){
			num1 = result;
			num2 = numbers[i];
			op = plusminus[i];
			result = method[op](+num1, +num2);
		} 
	
	return result;
	}
	
	this.addMethod = function(name, func) {
	method[name] = func;
	}
}

var calc = new Calculator();
calc.addMethod("/", function(a, b) { return a / b; });
alert(calc.calculate("6 / 2 + 5"));
