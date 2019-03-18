
var numberOfBalls = 10;
var balls = [];
var xacc;
var yacc;
var osc1;
var osc2;
var osc3;
var osc4;
var env1;
var env2;
var env3
var env4;
var attackTime = .02;
var decayTime = .1;
var susPercent = .2;
var releaseTime = 1;
var attackLevel = 1;
var releaseLevel = 0;


//var width = window.innerWidth;
//var height = window.innerHeight;


function setup(){

//translate(-displayWidth/2, -displayHeight/2);

 createCanvas(windowWidth, windowHeight);

 fullscreen();

for (var i = 0; i < numberOfBalls; i++) {
		balls [i] = new Ball(); 
	}

env1 = new p5.Envelope();
  env1.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env1.setRange(attackLevel, releaseLevel);

env2= new p5.Envelope();
  env2.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env2.setRange(attackLevel, releaseLevel);

env3 = new p5.Envelope();
  env3.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env3.setRange(attackLevel, releaseLevel);

env4 = new p5.Envelope();
  env4.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env4.setRange(attackLevel, releaseLevel);


osc1 = new p5.Oscillator();
 osc1.setType('sine');
  osc1.start();
  osc1.freq(1000);
  osc1.amp(env1);

osc2 = new p5.Oscillator();
 osc2.setType('sine');
  osc2.start();
  osc2.freq(880);
  osc2.amp(env2);

osc3 = new p5.Oscillator();
 osc3.setType('sine');
  osc3.start();
  osc3.freq(440);
  osc3.amp(env3);

osc4 = new p5.Oscillator();
 osc4.setType('sine');
  osc4.start();
  osc4.freq(400);
  osc4.amp(env4);




}



function draw(){

	background(0);
   
   for (var i = 0; i < numberOfBalls; i++) {

 	balls[i].display();
 	balls[i].playSound();
 	balls[i].update();
 	balls[i].save();

	}

}

function mousePressed() {

  getAudioContext().resume()

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


		this.acceleration = createVector(-yacc,-xacc);


		//add acceleration to velocity vector
		this.velocity.add(this.acceleration);

		// add velocity to location vector
		this.location.add(this.velocity);


		if(this.location.x == 0 + this.radius){
			this.xtip = 0;
			this.acceleration.x *= -1;
			this.velocity.x *= -1;
			
			}

		if(this.location.x == windowWidth - this.radius){
			this.xtip = 0;
			this.acceleration.x *= -1;
			this.velocity.x *= -1;
						}

		if(this.location.y == 0 + this.radius){
			this.ytip = 0;
			this.acceleration.y *= -1;
			this.velocity.y *= -1;
			
			}

		if(this.location.y == windowHeight - this.radius){
			this.ytip = 0;
			this.acceleration.y *= -1;
			this.velocity.y *= -1;
			//while(this.location.y > windowHeight-this.radius)

			}
		}

	playSound() {

		if(this.location.x <= this.radius){
			env1.play();	
		}
		if(this.location.x >= windowWidth - this.radius){
			env2.play();	
		}
		if(this.location.y <= this.radius){
			env3.play();	
		}
		if(this.location.y >= windowHeight - this.radius){
			env4.play();	
		}



}

	save() {

		if(this.location.x < this.radius || this.location.x > windowWidth - this.radius || this.location.y < this.radius || this.location.y > windowHeight - this.radius)
	{this.location = p5.vector.random2D();}

}

	
}