let canvas = document.querySelector('.header-canvas');
let context = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let bgColor = 'rgba(0,0,0,1)';
let strokeColor = 'rgba(255, 255, 255, ';

// Create the bg before changing the origin
context.fillStyle = bgColor;
context.fillRect(0, 0, width, height);

context.translate(width / 2, height / 2);

// Helper functions
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Circle
context.beginPath();
context.strokeStyle = strokeColor + 0.8;
// context.arc(0, 0, 300, 0, 10, 0);
context.stroke();

// Loop circle drawing
// Run this two times
for (let i = 0; i < 2; i++) {
  // Run  this two times for every i loop
  for (let j = 0; j < 2; j++) {
    context.beginPath();

    let x = rand(-1 * (width / 2), width / 2);
    let y = rand(-1 * (height / 2), height / 2);
    let radius = 5 * rand(30, 80);
    let startAngle = 0;
    let endAngle = radians(10 * rand(5, 30));
    let anticlockwise = i % 2 !== 0;

    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.strokeStyle = strokeColor + (0.6 - Math.random());
    context.stroke();
  }
}

// Drawing lines

// Vertical
// We want them to always start off the canvas and move towards the center
for (let i = 0; i < 2; i++) {
  let x = rand(-1 * (width / 2), width / 2);
  let y = i % 2 !== 0 ? -1 * (height / 2) : height / 2;
  context.beginPath();
  // Start at the top or bottom of the canvas
  context.moveTo(x, y);
  // Draw the line component towards the middle
  context.lineTo(0 + rand(-100, 100), 0 + rand(-100, 100));

  context.strokeStyle = strokeColor + (0.6 - Math.random());
  context.stroke();
}

// Diagonal
for (let i = 0; i < 2; i++) {
  let x = i % 2 !== 0 ? -1 * (width / 2) : width / 2;
  let y = rand(-1 * (height / 4 + 200), height / 4 + 200);
  context.beginPath();
  // Start off the edge of the canvas and move to the opposite edge
  context.moveTo(x, y);
  // Draw the line component off the right side of the canvas
  context.lineTo(y, x);

  console.log('Drawing a line from ' + x + ', ' + y + ' to ' + y + ', ' + x);

  context.strokeStyle = strokeColor + (0.6 - Math.random());
  context.stroke();
}
