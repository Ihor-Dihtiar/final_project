const subscribeEmail = document.querySelector('.subscribe-form__input');
const subscribeButton = document.querySelector('.subscribe-form__btn');
const subscribeSuccess = document.querySelector('.subscribe-form__message');
const reg = /^\w+@\w+\.\w{2,4}$/i;

if (subscribeEmail) {
  subscribeEmail.oninput = () => {
    subscribeEmail.classList.remove('invalid');
  };

  subscribeEmail.addEventListener('focusout', () => {
    const subscribeEmailValue = subscribeEmail.value;
    if (!reg.test(subscribeEmailValue)) {
      subscribeEmail.classList.add('invalid');
    } else {
      subscribeEmail.classList.remove('invalid');
    }
  });
}

if (subscribeButton) {
  subscribeButton.addEventListener('click', () => {
    let btnTriger = true;
    if (!subscribeEmail.value) {
      subscribeEmail.classList.add('invalid');
    }
    if (subscribeEmail.classList.contains('invalid')) {
      btnTriger = false;
    }

    if (btnTriger) {
      setTimeout(() => {
        subscribeEmail.value = '';
        subscribeEmail.classList.remove('invalid');
        subscribeSuccess.classList.add('visible');
        setTimeout(() => {
          subscribeSuccess.classList.remove('visible');
        }, 3000);
      }, 1000);
    }
  });
}
