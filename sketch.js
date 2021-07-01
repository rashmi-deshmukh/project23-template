var helicopterImg, helicopterSprite, packageSprite,packageImg, bgImg, packageBody;
var boxBottomBody, boxLeftBody, boxRightBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
	bgImg=loadImage("bg.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageImg)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterImg)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 25 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create object boxLeftBody from Box class. 

 	//Create object boxRightBody from Box class. 

 	//Create object boxBottomBody from Box class. 

}


function draw() {
	Engine.update(engine);
	background(bgImg);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	// display boxLeftBody
	// display boxRightBody
  	// display boxBottomBody

	drawSprites(); 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   //make the static property of packageBody as false
		
	 }
}
  
