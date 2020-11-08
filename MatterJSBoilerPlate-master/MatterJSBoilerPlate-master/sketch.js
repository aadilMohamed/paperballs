
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperObject = new PaperBall(60,620,40);
	ground = new Ground(400,680,800,20);
	ground1 = new Ground(600,620,20,100)
	ground2 = new Ground(780,620,20,100)
	
		Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-400})
	}
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  ground.display();
  ground1.display();
  ground2.display();
}

