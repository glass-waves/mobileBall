
var numberOfBalls = 1;
var balls = [];
var xacc;
var yacc;
//var width = window.innerWidth;
//var height = window.innerHeight;


function setup(){

//translate(-displayWidth/2, -displayHeight/2);

 createCanvas(windowWidth, windowHeight);

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
console.log('xacc'+ xacc);
console.log('yacc' + yacc);
}


class Ball {

	constructor(){

		
		this.size = random(30, 100);
		this.radius = this.size/2;
		this.location = createVector(windowWidth/2,windowHeight/2);
		this.velocity = createVector(0,0);
		



	}

	display() {

		fill(255);

		//translate(-windowWidth/2, -windowHeight/2);

		ellipse(this.location.x, this.location.y, this.size, this.size);
		
		 

	}

	update() {


		// //var ztip = rotationZ;
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


		if(this.location.x < 0 + this.radius || this.location.x > windowWidth - this.radius) {
			this.acceleration.x *= -.8;
           this.velocity.x *= -.8;
			}

		if(this.location.y < 0+ this.radius || this.location.y > windowHeight - this.radius) {
           this.velocity.y *= -.8;
           this.acceleration.y *= -.8;
			}


		//this.location.x.limit()	

		//this.acceleration.mult(0);

		// while(this.location.x < 5){this.velocity.x = 1}
		// while(this.location.x > (windowWidth-5)){this.velocity.x = -1}

		// while(this.location.y < 5){this.velocity.y = 1}
		// while(this.location.y > (windowHeight-5)){this.velocity.y = -1}



	}
}