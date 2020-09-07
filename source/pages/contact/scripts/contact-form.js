const formInput = document.querySelectorAll('.field-validation');
const email = document.querySelector('.mail-validation');
const submitButton = document.querySelector('.contact-form__btn');
const contactSuccess = document.querySelector('.contact-form__message');
const contactForm = document.querySelector('.contact-form');
const reg = /^\w+@\w+\.\w{2,4}$/i;

contactForm.addEventListener('submit', preventEvent);

formInput.forEach((element) => {
  element.oninput = () => {
    element.classList.remove('invalid');
  };

  element.addEventListener('focusout', () => {
    if (!element.value) {
      element.classList.add('invalid');
    }
  });
});

if (email) {
  email.addEventListener('focusout', () => {
    const emailValue = email.value;
    email.oninput = () => {
      email.classList.remove('invalid');
    };
    if (!reg.test(emailValue)) {
      email.classList.add('invalid');
    } else {
      email.classList.remove('invalid');
    }
  });
}

if (submitButton) {
  submitButton.addEventListener('click', () => {
    let btnTriger = true;
    formInput.forEach((element) => {
      if (!element.value || element.value.length < 2) {
        element.classList.add('invalid');
      }
      if (element.classList.contains('invalid')) {
        btnTriger = false;
      }
    });

    console.log(formInput[0].value.length);

    if (btnTriger) {
      setTimeout(() => {
        formInput.forEach((element) => {
          element.value = '';
          element.classList.remove('invalid');
          contactSuccess.classList.add('visible');
          setTimeout(() => {
            contactSuccess.classList.remove('visible');
          }, 3000);
        });
      }, 1000);
    }
  });
}

function preventEvent(event) {
  if (event.cancelable) {
    //  если событие может быть отменено и предотвращено
    event.preventDefault(); // отменяем действие события по умолчанию
    console.log('Событие ' + event.type + ' отменено'); //  выводим в консоль информацию о том какое событие было отменено
  } else {
    //  если событие не может быть отменено и предотвращено
    console.warn('Событие ' + event.type + ' не может быть отменено'); //  выводим в консоль информацию о том, что данное событие не может быть отменено
  }
}
