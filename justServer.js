var express = require('express')
var app = express()
var path = require("path")
var data =require(path.join(__dirname+'/app/test.json'));
var async=require('async')
var ogmaInstance=require('./app/ogma/build/ogma.min.js')
var ogma=new ogmaInstance();
var fs=require('fs')
app.use(express.static(path.join(__dirname+'/app1/')))

app.get('/', (req, res) =>  res.sendFile(path.join(__dirname+'/app1/index.html')))
app.listen(8888, () => console.log('Example app listening on port 8888!'))
