var winston = require('winston');
var path = require('path');

var log = {
getErrorLogger: function (module){
/*	path = module.filename.split('/').slice(-2).join('/');
	return new winston.Logger({
		transports: [
			new winston.transports.console({
				label: path
			})
		]
	})*/
},

getCommitLogger: function (pd){
	var lg = [], cnt = 0;
		for (var ll in pd){
			lg[cnt] = ll //+":	"+ pd.changeset[ll].tip +"	changes: " + 
			//pd.changeset[ll].changes +"	date: " + pd.dateOfChange +"	user: " +  pd.userLastChange +"	fork: " +  pd.fork;
			cnt++;
		}

var lggr = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({filename: path.join(__dirname,'somefile.log')} )
    // if you need auth do this: new (winston.transports.Couchdb)({ 'user': 'admin', 'pass': 'admin', 'host': 'localhost', 'db': 'logs' })
  ]
});

lggr.log('info', pd);


}

}
//var getLogger = {getELogger: getErrorLogger(), getCLogger: getCommitLogger()};

module.exports = log;