var log = require("./log");

function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;
    var temp = new obj.constructor();
    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

/*var CSC = {
	copy: function(){
		return dObject.getAllData();
	},
	pull: function(date){
		return dObject.getNewData(date);
	},
	push: function(pushData){
		dObject.setNewData(pushData);
	},
	fixFiles: function(){
		dObject.fixFiles();
	},
	doBackup: function(){
		dObject.doBackup();
	}
}*/

var dObject = { //рефактор
		dateOfLastChange: '', //реализовать проверку
		count: 0,
		files: {}
	}
}

dObject.getAllData = function(){
	return dObject;
}

dObject.getNewData = function(data){
var flag = false;
var tmp = {};
	for (v in dObject.files){
		if (flag){
			tmp[v] = dObject.files[v];
		}
		if (dObject.files[v].dateOfLastChange == data){
			flag = true;
		}
	}
	return tmp;
}

dObject.setNewData = function(pushData){
	dObject.files[dObject.count] = clone(pushData); 
	dObject.count = dObject.count+1;
	dObject.dateOfLastChange = pushData.dateOfChange;
	log(pushData);
}

module.exports = dObject;