var http = require("http");
var opts = require("optimist");
var dObject = require("./chKernel");
var config = require("./config");


http.createServer(function(req, res){
	/*switch(opts.cmnd){
		case pull: 
			res.end(dObject.getNewData(date));
			res.end('ok');			
		break;
		case push: 
			dObject.setNewData(pushData); //идентификация
			res.end('ok');	
		break;
		case copy: 
			res.end(dObject.getAllData());
		break;
		case fixFiles: 
			dObject.fixFiles();
			res.end('ok');	
		break;
		case doBackup:
			dObject.doBackup();
			res.end('ok');	
		break;
		default:
			console.log("Wrong arg");
			res.end('no');	

	}*/

	
commitCreator = function(cObject){
	return {
		dateOfChange: cObject.dateOfChange || new Date(), //исправить
		userLastChange: cObject.userLastChange || '',
		fork: cObject.fork || 'default',
		changeset: cObject.changeset || ''
	}
}

res.end();

}).listen(config.get('port'), "127.0.0.1");
