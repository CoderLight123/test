
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

PLAY=1;
END=0;
var game=PLAY;

function preload()
{
	ground=loadImage("g.jpg")
}

function setup() {
	createCanvas(1200, 597);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	//grounda = createSprite(width/2,588,width,19);
	//grounda.shapeColor=("black");

	ball1= new Ball(30,530,30);


	bin1 = createSprite(920,570,125,17);
	bin1.shapeColor=("blue");
	bin2 = createSprite(860,510,17,130);
	bin2.shapeColor=("blue");
	bin3 = createSprite(980,510,17,130);
	bin3.shapeColor=("blue");


	bina =Bodies.rectangle(920,585,125,17 , {isStatic:true} );
	World.add(world, bina);
	binb =Bodies.rectangle(860,510,17,130 , {isStatic:true} );
	World.add(world, binb);
	binc =Bodies.rectangle(980,510,17,130 , {isStatic:true} );
	World.add(world, binc);	

	groundok = new Ground(width/2, 599, 1500, 20 , {isStatic:true} );
 	World.add(world, groundok);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(ground);






  drawSprites();

  ball1.display();
  groundok.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW && (game===PLAY)){

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:155,y:-250});
	game=END;
	}

}

