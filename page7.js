const sketch = document.getElementById("mySketch");

sketch.addEventListener("mousedown", function(event) {
    sketch.style.backgroundColor = "white";
});

sketch.addEventListener("mouseup", function(event) {
    sketch.style.backgroundColor = "black";
});

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

