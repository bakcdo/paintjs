const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log(`creating line in (${x}, ${y})`);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
