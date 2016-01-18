var express = require('express');
var request = require('request');
var app = express();
app.use(express.static(__dirname));
app.get('/re',function(req,res){
    console.log(req.url);
    var code = req.query.code;
    var url = 'https://graph.qq.com/oauth2.0/token';
    var qs = {
        grant_type:'authorization_code',
        client_id:'101283445',
        client_secret:'abeba99edf2d36aa3b89043072d6e826',
        code:req.query.code,
        redirect_uri:'http://qq.zhufengpeixun.cn/re'
    };
    request.get({url:url, oauth:{}, qs:qs, json:false}, function (e, r, user) {
        console.log(user)
    })
    res.end('hello');
});
app.listen(80);