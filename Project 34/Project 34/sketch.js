//Create variables here
var dog, dogImg, happyDogImg, database, foodS, foodStock;

function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on('value', readStock);
  dog = createSprite(250,200,50,50);
  dog.addImage(dogImg);
  //dog.addImage(happyDogImg);
  dog.scale = 0.35;
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  text(foodS, 250, 30, fill(255));
  //add styles here
  dog.display();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
    }
    database.ref('/').update({Food:x});
  }
