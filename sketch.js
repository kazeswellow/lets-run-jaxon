var Runner, runner_running, runner_collided;
var path, pathImage;

function preload() {
  runner_running = loadAnimation("Runner-1.png", "Runner-1.png");
  runner_collided = loadImage("power_collided.png");
  pathImage = loadImage("path.png")
}

function setup() {
    createCanvas(600, 200);
    runner = createSprite(50,160,20,50);
    runner.addAnimation("running", runner_running);
    runner.scale = 0.5;
    path = createSprite(200,180,400,20);
    path.addImage("path",pathImage);
    path.x = path.width /2;
    path.velocityX = -4;
}

function draw() {
    drawSprites();
}