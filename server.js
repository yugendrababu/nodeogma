var express = require('express')
var app = express()
var path = require("path")
var data =require(path.join(__dirname+'/app/final.json'));
var async=require('async')
var ogmaInstance=require('./app/ogma/build/ogma.min.js')
var ogma=new ogmaInstance();
var fs=require('fs')
var puppeteer = require('puppeteer');
const phantom = require('phantom');
var renderdata;
app.use(express.static(path.join(__dirname+'/app/')))

app.get('/', (req, res) =>  res.sendFile(path.join(__dirname+'/app/index.html')))


app.get('/test', (req, res) => {
	async.series([
    function(callback){
				// console.log('start');
				// for (var i = 0; i < data.nodes.length; i++) {
				// 	var attributes={
				// 		attributes:{
				// 			"badges": {
				// 				 "bottomRight": {
				// 					 "color": "rgb(79, 76, 192)",
				// 					 "scale": 0.45,
				// 					 "positionScale": 1,
				// 					 //"image": "./img/angular.svg",
				// 					 "threshold": 0.1,
				// 					 "stroke": {
				// 						 "color": "rgb(79, 76, 192)",
				// 						 "width": 2
				// 					 },
				// 					 "text": {
				// 						 "content": '100',
				// 						 "color": "white",
				// 						 "font": "Arial",
				// 						 "style": "none",
				// 						 "scale": 1
				// 					 }
				// 				 },
				// 			 },
				// 			image:{
				// 		  "url": "./img/angular.svg",
				// 		  "scale": 0.5,
				// 		},
				// 		"text": {
			  //       "content": "IMSP.RESLIB",
			  //       "secondary": {
			  //         "content": "JCL"
			  //       }
			  //     },
				// 		"innerStroke": {
				// 	    "width": 2,
				// 	    "color": "rgb(79, 76, 192)",
				// 	    "threshold": 5
				// 	  },
				// 	  "outerStroke": {
				// 	    "width": 2,
				// 	    "color": null,
				// 	    "threshold": 0
				// 	  },
				// 		"shape": "circle",
		    //     "size": 5,
				// 		"color":"#fff"
				//   }
				// }
				// 	//var temp = Object.assign({}, data.nodes[i].data.colors, data.nodes[i],image);
				//
				// 	var id =  data.nodes[i].id;
				// 	var temp = Object.assign({},{data:data.nodes[i].data},attributes,{id:id});
				// 	data.nodes[i]={};
				// 	data.nodes[i]=temp;
				// 	//delete data.nodes[i].data.colors;
				// }


        callback();
    },
    function(callback){
				// var temp=JSON.stringify(data);
				// fs.writeFile('modifiedData.json', temp, 'utf8');
				// console.log(new Date());
				// ogma.setGraph(data);
				// ogma.view.locateGraph();
				// ogma.layouts.forceLink().then(() => {
				// 	//console.log(ogma.getNodes().getAttributes());
				//
				// ogma.export.json().then((data1) => {
				// 	//console.log(data);
				// 	renderdata=data;
				// 	console.log(new Date());
				// 	console.log('done');
				// //	fs.writeFile('final.json',data );
				// 	res.json(test1);
				// });
				// 	//console.log(renderdata);
				//
				// })
				res.json(data);
					console.log('end');
        callback();
    }
],
// optional callback
function(err, results){
    // results is now equal to ['one', 'two']
		console.log('compeleted');
});
})

app.get('/genNodes', (req, res) => {
	ogma.generate.random({
  nodes: 10,
  edges: 5
})
.then(function(graph) {
	fs.writeFile('rawjson.json', JSON.stringify(graph));
	res.json(graph);
  // callback
   ogma.setGraph(graph);
  // document.getElementById('load').parentElement.removeChild(document.getElementById('load'));
   ogma.view.locateGraph();
	 ogma.layouts.forceLink().then(() => {
		 //console.log(ogma.getNodes().getAttributes());
		 	//fs.writeFile('format.json', JSON.stringify(ogma.getNodes().getAttributes()));
	 })

});
});
app.get('/hello', (req, res) => {
//	console.log(renderdata);
res.json(renderdata);
});
// app.get('/gen1', (req, res) => {
//
//
// })

app.listen(9999, () => console.log('Example app listening on port 9999!'))
