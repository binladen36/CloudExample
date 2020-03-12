//use express module
var express=require('express');
//create an obj of the express module
var app=express();
//setting the view engine to Jade
app.set('view engine','jade');
//set the port 3000
var port = process.env.PORT || 3000;

//link path in public folder
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//create a callback function
app.get('/',function(req,res)
{
res.render('index');
});

//create a login page function
app.get('/form',function(req,res)
{
res.render('form');
});

//create a about page function
app.get('/about',function(req,res)
{
res.render('about');
});

app.get('/head',function(req,res)
{
res.render('head');
});

//make server listen to the port
var server=app.listen(port,function() {});