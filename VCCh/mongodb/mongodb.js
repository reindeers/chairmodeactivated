var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas



var Commit = new Schema({
    dateOfLastChange: { type: Date, default: Date.now },
    userLastChange: { type: String, required: true },
    fork: { type: String, default: "default" },
    changeset: { type: Object, required: true  }
});

// validation

var constCommit = mongoose.model('constCommit', Commit);

module.exports.constCommit = constCommit;


      