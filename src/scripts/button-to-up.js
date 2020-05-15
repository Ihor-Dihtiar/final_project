const divArrowUp = document.querySelector('.arrow-up');
const arrowUpButton = document.querySelector('.arrow-up__btn');

arrowUpButton.addEventListener('click', () => {
  window.scrollTo(pageXOffset, 0);
});

if (window.innerWidth < 415) {
  window.addEventListener('scroll', arrow);

  function arrow() {
    if (pageYOffset < document.documentElement.clientHeight) {
      divArrowUp.classList.add('arrow-up_hidden');
    } else {
      divArrowUp.classList.remove('arrow-up_hidden');
      window.removeEventListener('scroll', arrow);
      setTimeout(() => {
        divArrowUp.classList.add('arrow-up_hidden');
        window.addEventListener('scroll', arrow);
      }, 4000);
    }
  }
}
