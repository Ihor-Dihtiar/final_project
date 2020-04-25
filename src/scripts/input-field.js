const dandruff = document.querySelector('.input-block__dandruff');
const btn = document.querySelector('.input-block__btn');
const animationFields = document.querySelectorAll('.input-animation');

dandruff.addEventListener('click', addClassOpen);
btn.addEventListener('click', removeClassOpen);

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
