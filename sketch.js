
var techs = [];
var stars = [];

var speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 3000; i++) {
    techs[i] = new Tech();
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 25);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < techs.length; i++) {
    techs[i].update();
    techs[i].show();
  }
  for (var i = 0; i < techs.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}