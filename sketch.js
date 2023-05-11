
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(50,50,50,ball_options)
	World.add(world, ball)
	
	ground = new Ground(500,800,1000,100)
	rightside = new Ground (600,700,40,150)
	leftside = new Ground ( 900,700,40,150)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  
 
  ellipse(ball.position.x,ball.position.y,50,50)
  rightside.show();
  leftside.show();
  ground.show();

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-200})
	}
}


