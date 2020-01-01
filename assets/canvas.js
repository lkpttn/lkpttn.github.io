let canvas = document.querySelector('.header-canvas');
let context = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let strokeColor = 'rgba(123,150,128, 0.2)';
let bgColor = 'rgba(255, 255, 255, 1.0)';

context.fillStyle = bgColor;
context.fillRect(0, 0, width, height);

context.translate(width / 2, height / 2);

context.strokeStyle = strokeColor;

// Loop circle drawing
for (let i = 0; i < 4; i++) {
  context.beginPath();

  let x = rangeFloor(-1 * (width / 2), width / 2);
  let y = rangeFloor(-1 * (height / 2), height / 2);
  let radius = 5 * rangeFloor(30, 80);
  let startAngle = 0;
  let endAngle = degreeToRadians(10 * rangeFloor(5, 30));
  let anticlockwise = i % 2 !== 0;

  context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  context.stroke();
}

// Lines
for (let i = 0; i < 6; i++) {
  let x = rangeFloor(-1 * (width / 2), width / 2);
  let y = rangeFloor(-1 * (height / 2), height / 2);
  let x2 = x + rangeFloor(-1000, 1000);
  let y2 = y + rangeFloor(-1000, 1000);
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);
  context.stroke();
}

// Helper functions
function rangeFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function degreeToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
