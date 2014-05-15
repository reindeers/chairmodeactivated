var winston = require('winston');
var path = require('path');

var log = {
	getErrorLogger: function (module){
		var lggr = new (winston.Logger)({
		  	transports: [
		    	new (winston.transports.File)({filename: path.join(__dirname,'somefile.log')} )
		  	]
		});

		lggr.log('info', module);
	},

	getCommitLogger: function (pd){
		var lg = [], cnt = 0;
			for (var ll in pd.changeset){
				lg[cnt] = ll +":	"+ pd.changeset[ll].tip +"	changes: " + 
				pd.changeset[ll].changes +"	date: " + pd.dateOfChange +"	user: " +  pd.userLastChange +"	fork: " +  pd.fork;
				cnt++;
			}

		var lggr = new (winston.Logger)({
		  transports: [
		    new (winston.transports.File)({filename: path.join(__dirname,'somefile.log')} )
		  ]
		});

		lggr.log('info', lg);


	}

}

module.exports = log;