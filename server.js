var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/re',function(req,res){
    res.end('hello');
});
app.listen(80);