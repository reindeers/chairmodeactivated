var mongoose    = require('mongoose');
var log = require("./log");
var mngdb = {};

mngdb.prototype.createConnection = function(){

mongoose.connect(config.get('mongoose:uri'));
    var db = mongoose.connection;
    var Schema = mongoose.Schema;

    // Schemas

    var Commit = new Schema({
        dateOfLastChange: { type: Date, default: Date.now },
        userLastChange: { type: String, required: true },
        fork: { type: String, default: "default" },
        changeset: Schema.Types.Mixed
    });

    // validation

    var constCommit = mongoose.model('constCommit', Commit);
};

mngdb.prototype.addCommit =  function(cmt){

    var newCommit = new constCommit(cmt);

    newCommit.save(function (err, res) {
        if (err) return console.error(err);
        console.log(res);
        log(cmt);
    });

}

mngdb.prototype.getAllData =  function(){
    constCommit.find(function (err, res) {
       if (err) return console.error(err);
         console.log(res); //ИЗМЕНИТЬ
    });
}

mngdb.prototype.getNewData =  function(dOLC){
    constCommit.find({ dateOfLastChange: dOLC }, function (err, res) { //ИСПРАВИТЬ
       if (err) return console.error(err);
         console.log(res); //ИЗМЕНИТЬ
    });
}



module.exports.constCommit = mngdb;  


      