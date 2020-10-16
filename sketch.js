var bullet, wall;
var speed, weight;
var deformation;
var thickness;

function setup() {


createCanvas(1600,400);

speed= (55,100,200);
weight = (400,1500);
thickness = (22,83, 100);

bullet =  createSprite(50, 200, 60, 20);
bullet.velocityX = (55,100,200);

wall =  createSprite(1500,200,(22,83,100), height/2);




}

function draw() {
  background(255,255,255);

if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation =0.5 * weight * speed* speed/22509;
  if(deformation>180){
    wall.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    wall.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    wall.shapeColor = color(0,255,0);
  }
}


  drawSprites();
}