const menuToggle = document.querySelector('.header__menu-toggle');
const line1 = document.querySelector('.menu-toggle__line_1');
const line2 = document.querySelector('.menu-toggle__line_2');
const line3 = document.querySelector('.menu-toggle__line_3');
const headerBackground = document.querySelector('.header__background');
const headerNav = document.querySelector('.header__nav-up');

console.log(headerNav);

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuToggle.classList.toggle('menu-active');
  line1.classList.toggle('menu-active');
  line2.classList.toggle('menu-active');
  line3.classList.toggle('menu-active');
  headerBackground.classList.toggle('menu-active');
  headerNav.classList.toggle('menu-active');
}
