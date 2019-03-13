
var numberOfBalls = 1;
var balls = [];



function setup(){

 createCanvas(displayWidth, displayHeight, WEBGL);

for (var i = 0; i < numberOfBalls; i++) {
		balls [i] = new Ball(); 
	}

}





function draw(){

	background(255);
   
   for (var i = 0; i < numberOfBalls; i++) {

 	balls[i].display();
 	balls[i].update();

	}

}


class Ball {

	constructor(){

		
		this.size = random(30, 100);
		this.radius = this.size/2;
		this.location = createVector(displayWidth/2,displayHeight/2);
		this.velocity = createVector(0,0);
		



	}

	display() {

		fill(0);

		//translate(-windowWidth/2, -windowHeight/2);

		ellipse(this.location.x, this.location.y, this.size, this.size);
		
		 

	}

	update() {


		//var ztip = rotationZ;
		var xtip = rotationX;
		var ytip = rotationY;


		//var zacc = map(ztip, -180, 180, -1, 1);
		var xacc = map(xtip, -180, 180, 1, -1);
		var yacc = map(ytip, -90, 90, 1, -1);

		this.acceleration = createVector(xacc,yacc);


		//add acceleration to velocity vector
		this.velocity.add(this.acceleration);

		// add velocity to location vector
		this.location.add(this.velocity);


 		// if head hits the side of canvas, reverse velocity
		if(this.location.x < 0 + this.radius || this.location.x > displayWidth - this.radius) {
           this.velocity.x *= -1;
			}

		if(this.location.y < 0 + this.radius || this.location.y > displayHeight - this.radius) {
           this.velocity.y *= -1;
			}

		//this.acceleration.mult(0);


	}
}