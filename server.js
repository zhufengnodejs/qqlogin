var express = require('express');
var request = require('request');
var app = express();
app.use(express.static(__dirname));
app.get('/re',function(req,res){
    console.log(req.url);
    var code = req.query.code;
    var url = 'https://graph.qq.com/oauth2.0/me';
    var qs = {access_token:req.query.code};
    console.log(url);
    request.get({url:url, oauth:{}, qs:qs, json:false}, function (e, r, result) {
        console.log(arguments);
        console.log(result)
    })
    res.end('hello');
});
app.listen(80);