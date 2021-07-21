const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
var score=0;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(790,200,220,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  /*2nd tower
  //level */
  block1$ = new Block(700,175,30,40);
  console.log(block1);
  block2$ = new Block(730,175,30,40);
  block3$ = new Block(760,175,30,40);
  block4$ = new Block(790,175,30,40);
  block5$ = new Block(820,175,30,40);
  block6$ = new Block(850,175,30,40);
  block7$ = new Block(880,175,30,40);
  //level two
  block8$ = new Block(730,135,30,40);
  block9$ = new Block(760,135,30,40);
  block10$ = new Block(790,135,30,40);
  block11$ = new Block(820,135,30,40);
  block12$ = new Block(850,135,30,40);
  //level three
  block13$ = new Block(760,95,30,40);
  block14$ = new Block(790,95,30,40);
  block15$ = new Block(820,95,30,40);
  //top
  block16$ = new Block(790,55,30,40);
  //Polygon
  polygon=Bodies.circle(50,200, 20,); 
  World.add(world, polygon);
  //Slingshot
  slingShot = new SlingShot(this.polygon,{x:100,y:100});
  

}
function draw() {
  Engine.update(engine);
  background(56,44,44); 
  //Screen Text
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("Score  " + score, 50, 50)
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  // Second Tower
  fill("skyblue");
  block1$.display();
  block2$.display();
  block3$.display();
  block4$.display();
  block5$.display();
  block6$.display();
  block7$.display();
  fill("pink");
  block8$.display();
  block9$.display();
  block10$.display();
  block11$.display();
  block12$.display();
  fill("turquoise");
  block13$.display();
  block14$.display();
  block15$.display();
  fill("grey");
  block16$.display();
  //Score Functionality 
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block1$.score();
  block2$.score();
  block3$.score();
  block4$.score();
  block5$.score();
  block6$.score();
  block7$.score();
  block8$.score();
  block9$.score();
  block10$.score();
  block11$.score();
  block12$.score();
  block13$.score();
  block14$.score();
  block15$.score();
  block16$.score();

  //polygon.display();
  imageMode (CENTER);
  image (polygon_img, polygon.position.x, polygon.position.y,40,40);
  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32 && this.polygon.speed < 1){
    Matter.Body.setPosition(this.polygon,{x:50,y:200});
    slingShot.attach(this.polygon);
  }
}
