//Вариант только на сложение\вычитание.

function Calculator() {
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

		for (var i=0; i<numbers.length; i++){
			if (plusminus[i] == '+'){
				result += +numbers[i];
			}
			if (plusminus[i] == '-'){
				result -= +numbers[i];
			}
			
		} 
		alert(result);
	}
	this.addMethod = function(
}

var calc = new Calculator();
calc.addMethod("/", function(a, b) { return a / b; });
alert(calc.calculate("5 - 7 + 12"));
