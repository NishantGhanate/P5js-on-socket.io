
/* step 1: change dir to project location using node cmd 
   step 2: create a file name server.js 
   step 3: in node cmd  type npm init     this will create json file 
   step 4: in node cmd type npm install express --save 
   step 5: npm install socket.io --save   this will add dependecies to json file of server
*/   


var express = require('express');   // import express library 
var socket = require('socket.io'); //import socket.io library server 
var app = express();              // call function express imported from express 
var server = app.listen(8080);   //listen to port 8080 

console.log("Socket is on ");

app.use(express.static('public') ); // import folder name public to host static page

var io = socket(server);          //socket open to server 8080 
io.sockets.on('connection',newConnection);  //event listener to connection event and  trigger newConnection function as new connection is counted

function newConnection(socket)
{
	console.log(' New connection ' + socket.id );  // socket.id will give UID to new connection 
	
	socket.on('mouse',mouseMsg);   //Event listener 'mouse' from client if occured  then trigger mouseMsg fucntion 
	
	function mouseMsg(data)
	{  // console.log(data);
		socket.broadcast.emit('mouse',data);  //send back recieved data in event 'mouse' broadcast that data = java object here
		//io.socket.emit('mouse',data);       // this will include client too 
	}
	
}