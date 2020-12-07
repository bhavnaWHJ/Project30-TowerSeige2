const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var base1,base2,base3,ground;
var box1,box2,box3,box4,box5,box6,box7;
var pantagon;
var backgroundImg;

function preload(){

  backgroundImg = loadImage("background5.jpg");
}

function setup(){

  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  base1 = new Ground(800,550,300,20);
  base2 = new Ground(1150,350,300,20);
  //base3 = new Ground(700,200,300,20);
  ground = new Ground(750,780,1500,20);
  pantagon = new Pantagon(200,650,50,50);
  slingshot = new Slingshot(pantagon.body,{x:200,y:500});

  //level1
  //base1
  box1 = new Box(680,540);
  box2 = new Box(720,540);
  box3 = new Box(760,540);
  box4 = new Box(800,540);
  box5 = new Box(840,540);
  box6 = new Box(880,540);
  box7 = new Box(920,540);

  //base2
  box19 = new Box(1030,340);
  box20 = new Box(1070,340);
  box21 = new Box(1110,340);
  box22 = new Box(1150,340);
  box23 = new Box(1190,340);
  box24 = new Box(1230,340);
  box25 = new Box(1270,340);
  

  //level2
  //base1
  box8 = new Box(700,500);
  box9 = new Box(740,500);
  box10 = new Box(780,500);
  box11= new Box(820,500);
  box12= new Box(860,500);
  box13= new Box(900,500);

  //base2
  box26 = new Box(1050,300);
  box27 = new Box(1090,300);
  box28 = new Box(1130,300);
  box29 = new Box(1170,300);
  box30 = new Box(1210,300);
  box31 = new Box(1250,300);

  //level3
  box14 = new Box(720,460);
  box15 = new Box(760,460);
  box16 = new Box(800,460);
  box17 = new Box(840,460);
  box18 = new Box(880,460);

  box32 = new Box(1070,260);
  box33 = new Box(1110,260);
  box34 = new Box(1150,260);
  box35 = new Box(1190,260);
  box36 = new Box(1230,260);


  Engine.run(engine);

}

function draw(){

  background(backgroundImg);
  push()
  strokeWeight(2);
  stroke("black");
  fill("red");
  textSize(30);
 
  text("Drag the YELLOW STONE and release it to launch it towards the blocks",200,50);
  pop();

  base1.display();
  base2.display();
  //base3.display();
  ground.display();
  pantagon.display();
  slingshot.display();
  fill("yellow");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  fill("blue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();


  fill("green");
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

}

function mouseDragged(){

  Matter.Body.setPosition(pantagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

  slingshot.fly();
}

function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(pantagon.body,{x:200,y:500});
    slingshot.attach(pantagon.body);
  }
}
