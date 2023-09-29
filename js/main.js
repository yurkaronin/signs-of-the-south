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
  // слайдер в первом экране
  if (document.querySelector('.js-first-slider')) {
    let swiper = new Swiper('.js-first-slider', {
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      speed: 700,

      navigation: {
        nextEl: ".js-first-slider .swiper-button-next",
        prevEl: ".js-first-slider .swiper-button-prev",
      }
    });
  }
  // слайдер с отзывами
  if (document.querySelector('.js-reviews-slider')) {
    let swiper2 = new Swiper('.js-reviews-slider', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".reviews .swiper-button-next",
        prevEl: ".reviews .swiper-button-prev",
      },
      pagination: {
        el: ".reviews .swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 1.4
        },
        // when window width is >= 640px
        1023: {
          slidesPerView: 2
        }
      }
    });
  }

   // слайдер с работами
   if (document.querySelector('.js-portfolio-slider')) {
    let swiper3 = new Swiper('.js-portfolio-slider', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".portfolio .swiper-button-next",
        prevEl: ".portfolio .swiper-button-prev",
      },
      pagination: {
        el: ".portfolio .swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 1.4
        },
        // when window width is >= 640px
        1023: {
          slidesPerView: 2
        }
      }
    });
  }



});





