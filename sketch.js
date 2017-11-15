
var techs = [];

var speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 6000; i++) {
    techs[i] = new Tech();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < techs.length; i++) {
    techs[i].update();
    techs[i].show();
  }
}