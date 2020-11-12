let canvas = document.querySelector('canvas'),
       ctx = canvas.getContext('2d');

ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.arc(50, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
