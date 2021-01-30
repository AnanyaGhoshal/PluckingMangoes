const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground, tree, mango1, mango2, mango3, mango4, mango5, boy, stone, slingshot;
var m1,m2,m3,m4,m5,s;


function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,590,1300,20);

	tree = new Tree(1080,600);

	mango1 = new Mango(1050,100,20);
	mango2 = new Mango(1020,250,20);
	mango3 = new Mango(900,230,20);
	mango4 = new Mango(1190,240,20);
	mango5 = new Mango(1200,150,20);

  boy = new Boy(250,530);
  
  stone = new Stone(100,530);

  slingshot = new Slingshot(stone.body,{x:170,y:450});

  m1 = createSprite(10,2,50,50);
  m1.visible = false;
  m2 = createSprite(10,2,50,50);
  m2.visible = false;
  m3 = createSprite(10,2,50,50);
  m3.visible = false;
  m4 = createSprite(10,2,50,50);
  m4.visible = false;
  m5 = createSprite(10,2,50,50);
  m5.visible = false;
  s= createSprite(20,20,50,50);
  s.visible = false;
		
}

function draw() {

  background(230);
  //Add code for displaying text here!

  text("Press SPACEkEY to Try Again",20,20);

  Engine.update(engine);  

  m1.x = mango1.body.position.x;
  m1.y = mango1.body.position.y;

  m2.x = mango2.body.position.x;
  m2.y = mango2.body.position.y;

  m3.x = mango3.body.position.x;
  m3.y = mango3.body.position.y;

  m4.x = mango4.body.position.x;
  m4.y = mango4.body.position.y;

  m5.x = mango5.body.position.x;
  m5.y = mango5.body.position.y;

  s.x = stone.body.position.x;
  s.y = stone.body.position.y;


  if(m1.isTouching(s)){

    Matter.Body.setStatic(mango1.body,false);


  }

if( m2.isTouching(s)){

  Matter.Body.setStatic(mango2.body,false);

}

if(m3.isTouching(s)){

  Matter.Body.setStatic(mango3.body,false);


}

if( m4.isTouching(s)){

  Matter.Body.setStatic(mango4.body,false);

}

if(m5.isTouching(s)){

  Matter.Body.setStatic(mango5.body,false);


}

  
  


  //detectollision(stone,mango1);
  //detectollision(stone,mango2);
  //detectollision(stone,mango3);
  //detectollision(stone,mango4);
  //detectollision(stone,mango5);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  slingshot.display();

  drawSprites();
  
  
  
  

  
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingshot.fly();
  
}

function keyPressed(){

  if(keyDown = "space"){

    Matter.Body.setPosition(stone.body,{x:100,y:530});
    slingshot = new Slingshot(stone.body,{x:170,y:450});


  }
}

//function detectollision(lstone,lmango){
//
//  mangoBodyPosition = lmango.body.position;
//  stoneBodyPosition = lstone.body.position;
//
//  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
//
//  if(distance<=lmango.r+lstone.r){
//
//    Matter.Body.setStatic(lmango.body,false);
//    
//
//  }
//
//
//
//}
//




