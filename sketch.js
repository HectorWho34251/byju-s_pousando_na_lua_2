var bg_img, lander_img;
var lander;
var g = 0.05;
var vy = 0;
var thrust, leftThrust, rightThrust;

function preload() {
 bg_img = loadImage("assets/misc/bg_sur.png");
 lander_img = loadImage("assets/nave/normal.png");
 thrust = loadAnimation("assets/nave/b_thrust_1.png", "assets/nave/b_thrust_2.png", "assets/nave/b_thrust_3.png");
 leftThrust = loadAnimation("assets/nave/left_thruster_1.png", "assets/nave/left_thruster_2.png");
 rightThrust = loadAnimation("assets/nave/right_thruster_1.png", "assets/nave/right_thruster_2.png");
}

function setup() {
  createCanvas(1000, 700);

  frameRate(80);

  lander = createSprite(100, 50, 30, 30);
  lander.addImage(lander_img);
  lander.scale = 0.2;
  lander.setCollider("rectangle", 0, 0, 200, 200);

  rectMode(CENTER);
  textSize(15);

}

function draw() {
  background(51);
  image(bg_img, 0, 0);

  //configurações do texto
  push();
  fill(255);
  text("Velocidade Vertical: "+round(vy), 800, 75);
  pop();

  //descida
  vy += g;
  lander.position.y += vy;


  drawSprites();
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    //impulso para cima
    upwardThrust();
  }
}


function upwardThrust() {
  vy = -1;
}