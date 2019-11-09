var mqtt   = require('mqtt');
var client = mqtt.connect('mqtt://167.99.68.69');
 
client.on('connect', function () {
    console.log("MQTT Connected.");
    client.subscribe('test');
})

client.on('message', function (topic, message) {
     console.log(topic.toString() + " => " + message.toString())
})