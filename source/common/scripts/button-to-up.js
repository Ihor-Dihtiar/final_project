//--------------------------------IMPLEMENTATION OF UP SCROLLING ON A MOBILE DEVICE--------------------------------------------------------------------------------------------

const divArrowUp = document.querySelector('.arrow-up');
const arrowUpButton = document.querySelector('.arrow-up__btn');
let viewPort = document.getElementById('viewPort');

if (arrowUpButton) {
  arrowUpButton.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
  });

  if (document.documentElement.clientWidth < 415) {
    window.addEventListener('scroll', arrow);
    viewPort.setAttribute('content', 'width=320, user-scalable=yes');

    function arrow() {
      if (pageYOffset < document.documentElement.clientHeight * 0.5) {
        divArrowUp.classList.add('arrow-up_hidden');
      } else {
        divArrowUp.classList.remove('arrow-up_hidden');
        window.removeEventListener('scroll', arrow);
        setTimeout(() => {
          divArrowUp.classList.add('arrow-up_hidden');
          window.addEventListener('scroll', arrow);
        }, 3000);
      }
    }
  }
}
