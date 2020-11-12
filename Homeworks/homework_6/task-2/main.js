const t = document.querySelector('input[type="text"]');
const b = document.querySelectorAll('button');
const p = document.querySelector('p');

function f(x) {
  const a = Number(t.value);
  if (x) p.innerHTML = `${a} &deg;F is ${(a - 32) * 5/9} &deg;C`
  else p.innerHTML = `${a} &deg;C is ${(a * 9/5) + 32} &deg;F`
}

b[0].addEventListener('click', () => f(0));
b[1].addEventListener('click', () => f(1));
