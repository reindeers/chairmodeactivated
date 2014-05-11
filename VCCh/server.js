var http = require("http");

var opts = require("optimist");

var dObject = require("./chKernel");

http.createServer(function(req, res){
	switch(opts.cmnd){
		pull: function(){
			return dObject.getNewData(date);
		};
		break;
		push: function(){
			dObject.setNewData(pushData); //идентификация
		};
		break;
		copy: function(){
			return dObject.getAllData();
		};
		break;
		fixFiles: function(){
			dObject.fixFiles();
		};
		break;
		doBackup: function(){
			dObject.doBackup();
		}
		break;

	}
	

}).listen(3000);