import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

export default swiper;