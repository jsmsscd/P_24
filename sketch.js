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
	paper=new paper(200,450,40);
	
	
   ground=createSprite(width/2, height-35, width,10);
   ground.shapeColor=("yellow");
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
paper.display();	
 
}
//function keyPressed() {
  //	if (keyCode === UP_ARROW) {

    //	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	//}
//}



