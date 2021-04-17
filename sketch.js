var car,speed,weight;
var wall,deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite (750,200,10,300);
  speed=random (55,90)
  weight=random(400,1500)
  deformation =  ( (0.5*weight*speed*speed)/22500)
}

function draw() {
  background(255,255,255); 
   console.log (speed)

  car.velocityX = 5;
  if (wall.x - car.x <= car.width/2 + wall.width/2 ) {
    car.velocityX = 0;
   
  if (deformation<100){
    car.shapeColor = "green";
  }
  if (deformation>=100 && deformation<180) {
    car.shapeColor = "yellow";
  }
  if (deformation > 180){
    car.shapeColor = "red";
  }
  }

  else {
    car.shapeColor = "black"
  }
  drawSprites();
}