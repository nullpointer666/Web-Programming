let t = document.querySelectorAll('input[type="text"]')
let b = document.querySelector('button')

function f() {
  t[1].value = t[0].value.split('').reverse().join('');
}

b.addEventListener('click', f);
