const container = document.querySelector(".container");
const size = document.querySelector("#size");
const reset = document.querySelector("#reset");

makeCanvas(16, 16);
draw();

function sizeCanvas() {
    let size = prompt("Please enter pixel number per side of square canvas: ", "#");
    erase();
    makeCanvas(size, size);
    draw();
}

function makeCanvas(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let pixel = document.createElement("div");
    pixel.id = i + 1;
    container.appendChild(pixel).className = "pixel";
  }
}

function draw() {
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", function () {
        pixel.classList.add("draw");
    });
});
}

function erase() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
            pixel.classList.remove("draw");
    });
    draw();
}

reset.addEventListener("mouseup", erase);
size.addEventListener("mouseup", sizeCanvas);