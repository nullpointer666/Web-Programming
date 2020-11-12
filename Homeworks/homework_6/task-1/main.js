let t = document.querySelectorAll('input[type="text"]')
let b = document.querySelectorAll('button')
let p = document.querySelector('p');

function f(x) {
  if (x) p.innerHTML = parseInt(t[0].value) / parseInt(t[1].value);
  else p.innerHTML = parseInt(t[0].value) * parseInt(t[1].value);
}

b[0].addEventListener('click', () => f(0));
b[1].addEventListener('click', () => f(1));
