let x = 0;
let y = 0;
let xpos = 2200;
let ypos = 970;


function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

}

function draw() {
  displayClue();

  if (xpos < -1500){
    window.location.href = "page6.html";
  }
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function displayClue() {
  removeElements();

  // create an image element in html
  let clue = createImg("images/clue.png");
  // give it an id
  clue.id('clue');

  // position the image
  clue.position(xpos, ypos);

  // controls using arrow keys
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      // plus 5 in the x direction means right
      xpos -= 10;
    }
  }
}
