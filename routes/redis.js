var redis = require("redis");
var client = redis.createClient(6379, '127.0.0.1');

exports.get = function (key, cb) {
    client.get(key, function (error, res) {
        var flag = 'flag';
    });
};;

