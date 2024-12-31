const nav = document.querySelector("nav");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
nav.appendChild(canvas);

// Stel de grootte van het canvas in
function resizeCanvas() {
  canvas.width = nav.offsetWidth;
  canvas.height = nav.offsetHeight;
}

// Parameters voor driehoeken
const triangleGrid = [];
const triangleSize = 10;
const triangleSpacing = 45;
const animationSpeed = 0.019;
const minSizeThreshold = 0.5;

// Helperfunctie om een driehoek te tekenen
function drawTriangle(x, y, size, color, flipped) {
  ctx.save();
  ctx.translate(x, y);
  if (flipped) ctx.rotate(Math.PI);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size, size);
  ctx.lineTo(-size, size);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// Grid van driehoeken genereren
function createTriangleGrid() {
  triangleGrid.length = 0;
  const rows = Math.ceil(canvas.height / triangleSpacing);
  const cols = Math.ceil(canvas.width / triangleSpacing);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * triangleSpacing;
      const y = row * triangleSpacing;
      const randomPhase = Math.random() * Math.PI * 2;
    //   const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    const color = '#AD2A21'
      const flipped = Math.random() < 0.5;
      triangleGrid.push({ x, y, baseSize: triangleSize, phase: randomPhase, color, flipped });
    }
  }
}

// Animatie van driehoeken
function animateTriangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  triangleGrid.forEach((triangle) => {
    const pulsatingSize = triangle.baseSize + Math.sin(triangle.phase) * 10;

    if (pulsatingSize < minSizeThreshold) {
      triangle.flipped = Math.random() < 0.5;
    }

    triangle.phase += animationSpeed;
    drawTriangle(triangle.x, triangle.y, pulsatingSize, triangle.color, triangle.flipped);
  });

  requestAnimationFrame(animateTriangles);
}

// Resizing afhandelen
window.addEventListener("resize", () => {
  resizeCanvas();
  createTriangleGrid();
});

// Initialiseren
resizeCanvas();
createTriangleGrid();
animateTriangles();
