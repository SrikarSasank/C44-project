var bg_img

function preload() {
  bg_img = loadImage("./assets/bg.png");

}

function setup(){

canvas = createCanvas(1900,1000);

}

function draw() {
  background("black");
  image(bg_img,0,0,windowWidth,windowHeight)



}