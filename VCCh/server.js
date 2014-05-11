var http = require("http");

var opts = require("optimist");

var dObject = require("./chKernel");

http.createServer(function(req, res){
	switch(opts.cmnd){
		pull: function(){
			res.end(dObject.getNewData(date));
			res.end('ok');			
		};
		break;
		push: function(){
			dObject.setNewData(pushData); //идентификация
			res.end('ok');	
		};
		break;
		copy: function(){
			res.end(dObject.getAllData());
		};
		break;
		fixFiles: function(){
			dObject.fixFiles();
			res.end('ok');	
		};
		break;
		doBackup: function(){
			dObject.doBackup();
			res.end('ok');	
		}
		break;
		default: function(){
			console.log("Wrong arg");
			res.end('no');	
		}

	}


}).listen(1337, '127.0.0.1');
