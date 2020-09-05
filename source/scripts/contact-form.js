const formInput = document.querySelectorAll('.field-validation');
const email = document.querySelector('.mail-validation');
const submitButton = document.querySelector('.contact-form__btn');
const contactSuccess = document.querySelector('.contact-form__message');
const reg = /^\w+@\w+\.\w{2,4}$/i;

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
      if (!element.value) {
        element.classList.add('invalid');
      }
      if (element.classList.contains('invalid')) {
        btnTriger = false;
      }
    });

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
