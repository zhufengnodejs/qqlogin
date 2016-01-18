var express = require('express');
var request = require('request');
var querystring = require('querystring');
var app = express();
app.use(express.static(__dirname));
var appId = '101283445';
app.get('/re',function(req,res){
    console.log(req.url);
    var url = 'https://graph.qq.com/oauth2.0/token';
    var qs = {
        grant_type:'authorization_code',
        client_id:appId,
        client_secret:'abeba99edf2d36aa3b89043072d6e826',
        code:req.query.code,
        redirect_uri:'http://qq.zhufengpeixun.cn/re'
    };
    request.get({url:url, oauth:{}, qs:qs, json:true}, function (e, r, result) {
        result = querystring.parse(result);
        var access_token = result.access_token;
        var accessUrl = 'https://graph.qq.com/oauth2.0/me';
        request.get({url:accessUrl, oauth:{}, qs:{access_token:access_token}, json:false}, function (e, r, result) {
            console.log(result);
            var openId = result.match(/"openid":"([\s\S]+)"/)[1];
            var clientId = result['client_id'];
            var getInfoUrl = 'https://graph.qq.com/user/get_user_info';
            var qs = {
                access_token:  access_token,
                oauth_consumer_key:appId,
                openid:openId
            };
            request.get({url:getInfoUrl, oauth:{}, qs:qs, json:false}, function (e, r, result) {
                result = querystring.parse(result);
                console.log(result);
            })
        })
    })
    res.end('hello');
});
app.listen(80);