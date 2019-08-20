p5.disableFriendlyErrors = true;
let stars = [];
let speed ; 
let slider ; 
const defaultspeed = 20 ;
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function setup(){
	canvas = createCanvas(windowWidth , windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", -1);
	slider = select('#myRange');
	for (let i = 0 ; i < 800 ; i++){
		star = new Star;
		stars.push(star);
	}
	
}
function draw(){
	background(0);
	speed = slider.value();
	translate(width/2, height/2);
	for (let i = 0 ; i < stars.length ; i++){
		stars[i].show();
		stars[i].update();
	}
}