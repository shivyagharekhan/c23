var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxBase
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,35);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width,25, {isStatic:true} );
 	World.add(world, ground);
   boxBase= Bodies.rectangle(width/2,670, 150,20,{isStatic:true})
   World.add(world, boxBase);
   boxl= Bodies.rectangle(325,650, 20,100,{isStatic:true})
   World.add(world, boxl);
   boxr= Bodies.rectangle(475,650, 20,100,{isStatic:true})
   World.add(world, boxr);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(boxBase.position.x,boxBase.position.y,150,20)
  rect(boxl.position.x,boxl.position.y,20,100)
  rect(boxr.position.x,boxr.position.y,20,100)
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}
