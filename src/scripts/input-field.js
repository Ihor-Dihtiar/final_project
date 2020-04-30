const dandruff = document.querySelector('.input-block__dandruff');
const btn = document.querySelector('.input-block__btn');
const animationFields = document.querySelectorAll('.input-animation');
const input = document.querySelector('.input-block__input');

dandruff.addEventListener('click', addClassOpen);

btn.addEventListener('click', removeClassOpen);
btn.addEventListener('click', clearInput);

function addClassOpen() {
  animationFields.forEach((element) => {
    element.classList.add('open');
  });
}

function removeClassOpen() {
  animationFields.forEach((element) => {
    element.classList.remove('open');
  });
}

function clearInput() {
  input.value = '';
}
