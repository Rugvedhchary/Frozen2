
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer;
var plane;
var stone;
var rubber;



function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  
	hammer = new Hammer(200,150);
	
  plane = new Plane(400,590,800,20)
  
  stone = new Stone(300,550,60,60)

  rubber = new Rubber(590,560,10,70)
  rubber.scale = 0.2;

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  plane.display()
  stone.display()
  rubber.display()


  drawSprites();
 
}



