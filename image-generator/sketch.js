/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */

var width = 640;
var height = 480;

function setup () {
  createCanvas(width, height);
}

function draw () {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
