// Creating variables for the planets
var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
// Creating variables to hold images of the planets
var sunImage,mercuryImage,venusImage,earthImage,marsImage,jupiterImage,saturnImage,uranusImage,neptuneImage;

var dis = 0;

function preload(){
  // Loading the images of the planets
  sunImage = loadImage("images/sun.png");
  mercuryImage = loadImage("images/mercury.png");
  venusImage = loadImage("images/venus.png");
  
}

function setup() {
  createCanvas(500,400);
  // Creating the planets (as Sprites) 
  // Giving each planet their images
  sun = createSprite(0,200,50,50);
  sun.addImage(sunImage);

  mercury = createSprite(250,200,50,50);
  mercury.addImage(mercuryImage);

  venus = createSprite(400,200,50,50);
  venus.addImage(venusImage);

  
}

function draw() {
  // To clear the background
  background(0);  
  // Destroying the planets with the function "Destroy"
  Destroy(mercury,sun);
  Destroy(venus,sun);
  
  // Making the sun grow
  if(frameCount % 20 === 0){
    sun.scale += 0.5;
    dis += 20 + 2;
  };
  
  // Drawing the sprites
  drawSprites();
}

function Destroy(object1,object2){

  if(object1.x - (object2.x + dis) < object2.width/2 + object1.width/2 &&
     (object2.x + dis) - object1.x < object2.width/2 + object1.width/2 &&
     object1.y - object2.y < object2.height/2 + object1.height/2 &&
     object2.y - object1.y < object2.height/2 + object1.height/2 ){
      object1.remove();
     //obj2.shapeColor = "red";
    }
    else{
    //obj2.shapeColor = "blue";
    }

}
