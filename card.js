function getFirstId(array){ 
	var to = array[1].join('');
	var first;
	var length = array[0].length;
	for (var i =0; i< length; i++){
		if (to.indexOf(array[0][i])==-1) {
		 first = array[0][i];
			break;
			
		}
	}
	var res = 0;
	for (var i = 0; i < length; i++){
		if (array[0][i] == first) {res = i};
	}
	return res;
}

function getChaine(array){
	var firstId = getFirstId(array);
	var id = [];
	var length = array[0].length;
	id.push(firstId);
	for (var j = 0; j < length; j++){
		var len = id.length-1;
		var first = array[1][id[len]];
		for (var i =0; i < length; i++){
			if (array[0][i] == first){
				id.push(i);
			}
		}
	}
	return id;
}

function message(array, array2){
	var message = [];
	var length = array.length;
	for (var i = 0; i < length; i++){
		message.push("Take " + array2[2][array[i]] + " "+array2[3][array[i]] + " from "+array2[0][array[i]]+" to "+array2[1][array[i]]+". Seat "+ array2[4][array[i]]+"."); 
	}
	return message;
}
