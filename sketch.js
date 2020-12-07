const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(145,385,20,20);
	bob2 = new Bob(160,385,20,20);
	bob3 = new Bob(185,385,20,20);
	bob4 = new Bob(200,385,20,20);
	bob5 = new Bob(215,385,20,20);
	roof1 = new Roof(200,50,370,10);
	rope1 = new rope1(bob.body,rope.body,bob.Diameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
 
}



