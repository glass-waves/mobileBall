
var numberOfBalls = 1;
var balls = [];
var width = window.innerWidth;
var height = window.innerHeight;


function setup(){

//translate(-displayWidth/2, -displayHeight/2);

 createCanvas(window.innerWidth, window.innerHeight);

 fullscreen();

for (var i = 0; i < numberOfBalls; i++) {
		balls [i] = new Ball(); 
	}


}





function draw(){

	background(0);
   
   for (var i = 0; i < numberOfBalls; i++) {

 	balls[i].display();
 	balls[i].update();

	}

}


class Ball {

	constructor(){

		
		this.size = random(30, 100);
		this.radius = this.size/2;
		this.location = createVector(400,400);
		this.velocity = createVector(0,0);
		



	}

	display() {

		fill(255);

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
		if(this.location.x < 0 + this.radius || this.location.x > width - this.radius) {
			this.acceleration.x *= -.1;
           this.velocity.x *= -.5;
			}

		if(this.location.y < 0+ this.radius || this.location.y > height - this.radius) {
           this.velocity.y *= -.5;
           this.acceleration.y *= -.1;
			}

		//this.acceleration.mult(0);


	}
}