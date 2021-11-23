import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const slider = () => {
    // https://swiperjs.com/
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
      });

}

export default slider