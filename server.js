var express = require('express');
var request = require('request');
var app = express();
app.use(express.static(__dirname));
app.get('/re',function(req,res){
    console.log(req.url);
    var code = req.query.code;
    var url = 'https://graph.qq.com/oauth2.0/me?access_token='+req.query.code;
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
        }
    })
    res.end('hello');
});
app.listen(80);