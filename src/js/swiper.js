import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.gallery-swiper');

  if (!container) return;

  new Swiper(container, {
    modules: [Navigation],
    loop: true,
    direction: 'horizontal',
    slideClass: 'gallery-swiper-slide',
    wrapperClass: 'gallery-swiper-wrapper',
    navigation: {
      nextEl: '.custom-navigation .custom-next',
      prevEl: '.custom-navigation .custom-prev',
    },
    breakpoints: {
      374: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1439: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
});