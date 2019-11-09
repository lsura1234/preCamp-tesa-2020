var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://precamp:1234@tgr2020-knagv.mongodb.net/precamp?retryWrites=true&w=majority";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("video");
    var doc = { title: "FITM_2020", year: 2020 };
    dbo.collection("movieDetails").insertOne(doc, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    });
})