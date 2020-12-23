
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var Op={isStatic:false,restitution:0.3,friction:0.5,density:1.2}
	paper=new Paper(100,200,50,{Op});
	paper= Bodies.circle(100,200,50,{Op});
	World.add(world,paper);

   ground=createSprite(width/2, height-35, width,10);
   ground.shapeColor=("yellow");

   ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb("black"));
  drawSprites();
 
}



