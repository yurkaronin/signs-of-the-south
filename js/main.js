const buttonMenu = document.querySelector('.button-menu');
const mainNavigation = document.querySelector('.header__bottom');

buttonMenu.addEventListener('click', function () {

  buttonMenu.classList.toggle('isActive');
  mainNavigation.classList.toggle('isActive');
  document.body.classList.toggle('menu-open');
});


let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 160) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}


document.addEventListener("DOMContentLoaded", function () {
  headerChange();
  window.addEventListener("scroll", onScroll, { passive: true });
});
