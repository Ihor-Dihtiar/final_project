//--------------------------------IMPLEMENTATION OF UP SCROLLING ON A MOBILE DEVICE--------------------------------------------------------------------------------------------

const divArrowUp = document.querySelector('.arrow-up');
const arrowUpButton = document.querySelector('.arrow-up__btn');

if (arrowUpButton) {
  arrowUpButton.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
  });

  console.log(
    'document.documentElement.clientHeight = ' +
      document.documentElement.clientHeight
  );
  console.log(
    'document.documentElement.clientWidth = ' +
      document.documentElement.clientWidth
  );

  if (document.documentElement.clientWidth < 769) {
    window.addEventListener('scroll', arrow);

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
