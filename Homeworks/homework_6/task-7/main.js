let canvas = document.querySelector('canvas'),
       ctx = canvas.getContext('2d');

function f(x, y, a) {
  ctx.fillStyle = `rgba(0, 0, 0, ${a})`;
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

for (let i = 30, a = 0; i <= 390; i += 60, a += 1/6) f(i, i, a);
