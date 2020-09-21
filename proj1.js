let value1 = 0;
let value2 = 0;
let value3 = 255;
let xx = -3;
let yy = -3;
var particles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() { 
  background(210,20,60);
  tint(255,127);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value1 = 0;
    value2 = 255;
    xx = 3;
    yy = -3;
    value3 = 255;
    
  } else if (keyCode === RIGHT_ARROW) {
    value2 = 0;
    value1 = 255;
    xx = -3;
    yy = 3;
    value3 = 255;
  }
  else if (keyCode === UP_ARROW) {
    value2 = random(255);
    value1 = 255;
    xx = 3;
    yy = 3;
    value3 = 255;
  }
  else if (keyCode === DOWN_ARROW) {
    value2 = random(65);
    value1 = 184;
    xx = -3;
    yy = -3;
    value3 = 255;
  }
  else if (keyCode === TAB)
    saveCanvas('myCanvas', 'png');
  else if (keyCode === BACKSPACE || keyCode === DELETE)
    particles.pop();
  else if (keyCode === ENTER)
    value3 = 0;
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}
function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.history = [];

  this.update = function() {
    this.x += random(-4, 4);
    this.y += random(-4, 4);

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += xx;
      this.history[i].y += -yy;
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 80) {
      this.history.splice(100, 0);
    }
  };

  this.show = function() {
    //stroke(20);
    fill(255, 200,0);
    if(mouseIsPressed)
      ellipse(mouseX, mouseY, 30, 30);

    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      fill(value1,random(255),value2,value3);
      ellipse(pos.x, pos.y, i, i);
      vertex(pos.x - 26 , pos.y + 26);
    }
    endShape();
  };
  
}