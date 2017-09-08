var socket;


function setup()
{
	createCanvas(windowWidth,windowHeight);
	background(10);
	
	socket=io.connect('http://localhost:8080' ||" http://127.0.0.1:8080"); // client open to sever communation
	socket.on('mouse',newDrawing); //recieve broadcosted mouse cordinate in event 'mouse' and trigger function newDrawing		
	
}
 
 function newDrawing(data)  
 {
	noStroke();
	fill(250,0,100);
    ellipse(data.x, data.y, 35, 35);  // parsing java object 
 }
  



 function mouseDragged()
 {
	console.log('Sending mouse co-ord' + mouseX + ' ,  '+ mouseY);
	 
	var data = 
	{
		x:mouseX  , y:mouseY   // java object
		
	}
	
    socket.emit('mouse',data);  // event trigger code 'mouse' from client to server  
	
	noStroke();
	fill(100,250,0);
    ellipse(mouseX, mouseY, 35, 35); 
 }

