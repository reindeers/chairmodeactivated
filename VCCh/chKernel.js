//комментарии
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
	doBackup: function(){
		dObject.doBackup();
	}
}

var dObject = { //временно
	dateOfLastChange: '2014-05-04 04:30:00', //реализовать проверку
	count: 2,
	files: {
		1: {
			dateOfLastChange: "2014-05-04 04:00:00",
			userLastChange: "admin",
			fork: "default",
			"test.txt": {
				tip: "chng",
				data: "om-nom-nom-test", 
			},
			"omnom.txt": {
				tip: "chng",
				data: "om-nom-nom69", 
			},
		},
		
		2: {
			dateOfLastChange: "2014-05-04 04:30:00",
			userLastChange: "admin",
			fork: "default",
			"test.txt": {
				tip: "chng",
				data: "om-nom-nom-test2", 
			},
			"omnom.txt": {
				tip: "chng",
				data: "om-nom-nom69-2", 
			},
		}
	},
	log: function(){
		//лог
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
	dObject.files[3] = pushData; //исправить, чтобы копировать рекурсивно вложенный объект
	dObject.count = dObject.count+1;
	dObject.dateOfLastChange = pushData.dateOfChange;
}
var commitCreator = function(cObject){
	return {
		dateOfChange: cObject.dateOfChange || new Date(), //исправить
		userLastChange: cObject.userLastChange || '',
		fork: cObject.fork || 'default',
	}
}

var newCommit = commitCreator({
		dateOfChange: '2014-05-04 04:40:00', //формат согласовать с форматом бд
		userLastChange: 'admin',
		fork: 'default',
		"test.txt": { 
			tip: 'chng',
			changes: 'om-nom-nom69-222'
		}
	});
