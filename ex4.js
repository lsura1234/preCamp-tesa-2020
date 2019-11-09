var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://precamp:1234@tgr2020-knagv.mongodb.net/precamp?retryWrites=true&w=majority";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("video");
    dbo.collection("movieDetails").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
})