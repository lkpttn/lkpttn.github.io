var canvas = document.querySelector('.header-canvas');
var context = canvas.getContext('2d');

var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);

var cx = width;
var cy = height / 2;
var increment = 15;
var radius = -100;
var alpha = 1.0;
var numCircle = 100;

context.fillStyle = '#fffbf3';
context.fillRect(0, 0, width, height);

for (let i = 0; i < numCircle; i++) {
  circleDots(i * 6, radius, 15, i * 20, alpha);
  radius = radius + increment;
  alpha = alpha - 0.01;
}

function circleDots(count, radius, minTheta, maxTheta, alpha) {
  for (let i = 0; i < count; i++) {
    // Calculate a random point on circle between given angles
    var angle = rangeFloor(minTheta, maxTheta) * (Math.PI / 180);
    var x = cx + Math.cos(angle) * radius;
    var y = cy + Math.sin(angle) * radius;

    // Draw a circle on that point
    context.beginPath();
    context.fillStyle = `rgba(227, 213, 195, ${alpha})`;
    context.arc(x, y, Math.random() * 1.8, 0, Math.PI * 2, false);
    context.fill();
  }
}

// Helper functions
function rangeFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
