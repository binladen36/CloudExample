var express=require('express');
var app=express();
app.set('view engine','jade');
var port = process.env.PORT || 3000;

//nhan anh o thu muc public
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//su dung saveForm
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res)
{
res.render('index');
});

app.get('/form',function(req,res)
{
res.render('form');
});

app.get('/about',function(req,res)
{
res.render('about');
});


var server=app.listen(port,function() {});