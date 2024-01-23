var Player
var Platform, Platform2, Platform3, Platform4
var lava
var Jumpboost
var green




function setup() {
  createCanvas(800, 400);
  Player = createSprite(90, 180, 50, 50);
  Player.scale = 0.6;
  Player.shapeColor = "Black";
  Platform = createSprite(100, 410, 15, 70);

  Platform.scale = 6;
  Platform.shapeColor = "Brown";

  Platform2 = createSprite(290, 310, 10, 70);
  Platform2.scale = 6;
  Platform2.shapeColor = "Brown";

  Platform3 = createSprite(500, 510, 10, 70);
  Platform3.scale = 6;
  Platform3.shapeColor = "Brown";

  Platform4 = createSprite(700, 150, 10, 20);
  Platform4.scale = 6;
  Platform4.shapeColor = "Brown";


  green = createSprite(700,90,40,10)
  green.shapeColor = "yellow"

  lava = createSprite(300, 680, 10000, 600)
  lava.shapeColor = "Orange"

  Jumpboost = createSprite(500, 295.5, 40, 10)
  Jumpboost.shapeColor = "green"
}

function draw() {
  background(255, 255, 255);


  background("Gray");

  playerKeys(Player);

  applyGravity(Player);

  lava.velocity.y -= 0.005









  if (Player.collide(Platform) || Player.collide(Platform2) || Player.collide(Platform3) || Player.collide(Platform4)) {
    // If colliding, set the player's y-velocity to 0
    Player.velocity.y = 0;
  } else {
    // If not colliding, apply gravity
    Player.velocity.y += 0.0001;
  }

  drawSprites();

 
}

function applyGravity(Player) {
  // Gravity force
  let gravity = createVector(0, 0.5);

  // Apply gravity to the sprite's velocity
  Player.velocity.add(gravity);

  // Limit the sprite's falling speed
  Player.velocity.limit(30);
}

function playerKeys(Player) {



  if (keyIsDown(LEFT_ARROW)) {
    Player.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    Player.position.x += 5;
  }

  if (keyIsDown(UP_ARROW) && (Player.collide(Platform) || Player.collide(Platform2) || Player.collide(Platform3) || Player.collide(Platform4))) {
    Player.velocity.y = -5;
  } else



    if (Player.overlap(Jumpboost)) {
      Player.velocity.y = -15
    }

    if (Player.overlap(lava)) {
      Player.velocity = 0
      lava.velocity = 0
    }


}