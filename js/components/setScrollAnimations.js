import { ANIMATE } from '../constants';
import WOW from 'wow.js';

export default function setScrollAnimations() {
  // const $animEls = $('.js-animated-el');

  // $animEls.each((i, el) => {
  //   const options = {
  //     threshold: 0.5
  //   };
  //   const callback = (entries) => { 
  //     entries.forEach(entry => {
  //       const isVisible = entry.isIntersecting;
  //       if (isVisible) {
  //         $(el).addClass(ANIMATE);
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   observer.observe(el);
  // });

  const wow = new WOW();
  wow.init();
};
