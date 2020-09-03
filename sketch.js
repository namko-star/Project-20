var car, wall, speed, weight, deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  rectMode(CENTER);
  
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(255, 255, 255);

  car.velocityX = speed;
  deformation = (0.5 * weight * speed * speed) / 22500;

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0, 0, 0);  

  if ( (wall.x - car.x) < (car.width+wall.width)/2) {
    car.velocityX = 0;

    if ((car.x + car.width/2) >= (wall.x - wall.width/2)) {
      car.x = wall.x - (wall.width/2) - (car.width/2);
    }
  
    if (deformation < 100) {
      // Green
      car.shapeColor = color(0, 255, 0);
    }

    else if ((100 <= deformation) && (deformation <= 180)) {
      // Yellow
      car.shapeColor = color(230, 230, 0);
    }

    else if (deformation > 180) {
      // Red
      car.shapeColor = color(255, 0, 0);
    }
  }
 
  drawSprites();
}