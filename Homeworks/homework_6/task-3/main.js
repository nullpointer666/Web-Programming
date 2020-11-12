let t = document.querySelectorAll('input[type="text"]')
let b = document.querySelector('button')

function f() {
  let r = Number(t[0].value);
  t[1].value = 4/3 * Math.PI * r * r * r;
}

b.addEventListener('click', f);
