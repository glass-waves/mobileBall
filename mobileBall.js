
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

	}


	edges(){
		var leftEdge = false;
		var rightEdge = false;
		var topEdge = false;
		var bottomEdge = false;



		if(this.location.x <= 5) {
			leftEdge = true;
			}else{leftEdge = false};

		

		if(leftEdge){
			this.velocity.x = 1
		}


		if(this.location.x >= window.innerWidth-5) {
			rightEdge = true;
			}else{rightEdge = false};
		

		if(rightEdge){
			this.velocity.x = -1
		}

\		
		if(this.location.y <= 5) {
			topEdge = true;
			}else{topEdge = false};

		

		if(topEdge){
			this.velocity.y = 1
		}
\		
		if(this.location.y >= window.innerHeight) {
			bottomEdge = true;
			}else{bottomEdge = false;

		}

		if(bottomEdge){
			this.velocity.y = -1
		}

		//this.acceleration.mult(0);


	
}
}