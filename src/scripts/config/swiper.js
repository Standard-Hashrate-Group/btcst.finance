/* eslint-disable implicit-arrow-linebreak */
import { NAV_LIST } from '../const';

export const fullPage = {
  // hashNavigation: {
  //   replaceState: true,
  // },
  effect: 'fade',
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  shortSwipes: true,
  speed: 500,
  pagination: {
    el: '.full-page-slider-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function(index, className){
      if (NAV_LIST[index].hash=="tau"){
        className = className+" tau_hidden";
      }
      return `<div class="${className} full-page-slider-pagination__link"><span>${NAV_LIST[index].name}</span></div>`;
    },
  },
  breakpoints: {
    1024: {
      shortSwipes: false,
      // mousewheel: true,
    },
  },
};

export const commentConfig = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};
