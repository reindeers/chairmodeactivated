function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;
    var temp = new obj.constructor();
    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

var CSC = {
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
}

var dObject = { //рефактор
	dateOfLastChange: '2014-05-04 04:30:00', //реализовать проверку
	count: 1,
	files: {
		0: {
			dateOfLastChange: "2014-05-04 04:00:00",
			userLastChange: "admin",
			fork: "default",
			changeset: {
				"test.txt": {
					tip: "chng",
					data: "om-nom-nom-test", //не сам текст, а отличие от предыдущей версии
				},
				"omnom.txt": {
					tip: "chng",
					data: "om-nom-nom69", 
				}
			}
		},
		
		1: {
			dateOfLastChange: "2014-05-04 04:30:00",
			userLastChange: "admin",
			fork: "default",
			changeset: {
				"test.txt": {
					tip: "chng",
					data: "om-nom-nom-test2", 
				},
				"omnom.txt": {
					tip: "chng",
					data: "om-nom-nom69-2", 
				}
			}
		}
	},
	log: function(pd){ //рефактор
		var lg = [], cnt = 0, flg = require('./log');
		for (var ll in pd.changeset){
			flg[ll] = "'" + ll +":	"+ pd.changeset[ll].tip +"	changes: " + 
			pd.changeset[ll].changes +"	date: " + pd.dateOfChange +"	user: " +  pd.userLastChange +"	fork: " +  pd.fork + "'";
			cnt ++;
		}
		
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
console.log(pushData);
	dObject.files[dObject.count] = clone(pushData); 
	dObject.count = dObject.count+1;
	dObject.dateOfLastChange = pushData.dateOfChange;
	dObject.log(pushData);
}
var commitCreator = function(cObject){
	return {
		dateOfChange: cObject.dateOfChange || new Date(), //исправить
		userLastChange: cObject.userLastChange || '',
		fork: cObject.fork || 'default',
		changeset: cObject.changeset || ''
	}
}

var newCommit = commitCreator({
		dateOfChange: '2014-05-04 04:40:00', 
		userLastChange: 'admin',
		fork: 'default',
		changeset: {
			"test.txt": { 
				tip: 'chng',
				changes: 'om-nom-nom69-222'
			}
		}
	});

	CSC.push(newCommit);
	console.log(CSC.pull("2014-05-04 04:00:00"));
	
	console.log(dObject);