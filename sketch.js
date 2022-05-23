function setup() {
  createCanvas(500, 500);
  a1 = loadSound("A1.mp3");
  b1 = loadSound("B1.mp3");
  c1 = loadSound("C2.mp3");
  d1 = loadSound("D2.mp3");
  e1 = loadSound("E2.mp3");
  f1 = loadSound("F2.mp3");
  g1 = loadSound("G2.mp3");
  sounds = [a1, b1, c1, d1, e1, f1, g1]; 
}

function draw() {
  background(100, 100, 255);
  fill(180, 160, 107);
ellipse(250, 250, 220, 220);
  
  fill(102, 72, 56);
  ellipse(232, 250, 20, 25);
  ellipse(300, 270, 20, 25);
  ellipse(210, 190, 20, 25);
  ellipse(300, 180, 20, 25);
  ellipse(210, 320, 20, 25);
  text('click the cookie', 148, 425);
  textSize(30);
  
}

function mousePressed() {
  let d = dist(250, 250, mouseX, mouseY);
      if (d <= 110) {
       var pickSound = random(sounds);
    pickSound.play();
    }
 
  }
  
