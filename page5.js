let xpos = 0;
let ypos = 0;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  G = createImg('images/G.png');
  G.class('dragme');

 
  xpos = width/2-100;
  ypos = height/2-100;

  G.position(xpos, ypos);
}

function draw() {
  xpos = mouseX;
  ypos = mouseY;


  if ((xpos > 1350 && xpos < 1450) && (ypos > 150 && ypos < 450)){

    window.location.href = "page7.html";
  }
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}





