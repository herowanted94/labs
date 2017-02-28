
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
// setting canvas full screen 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.strokeStyle = "#FFFAF0"
// end of line is rounded
c.lineJoin = "round";
c.lineCap = "round";
c.lineWidth = 3;

var isDrawing = false;
var lastX = 0;
var lastY = 0;

function draw(e) {

	if(!isDrawing) {
		return; 

	}
	else{
		console.log(e); 
		c.beginPath();
		c.moveTo(lastX, lastY);
		c.lineTo(e.offsetX, e.offsetY);
		c.stroke();

	

		lastX = e.offsetX;
		lastY = e.offsetY;
	}
	
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;

});

function clearCanvas(){
	c.clearRect(0,0, canvas.width, canvas.height);
}

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);