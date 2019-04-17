import 'intersection-observer';
import { $WIN, $HTML } from './constants';

import setTouchClassName from './setTouchClassName.js';
import svgUseIt from 'svg-use-it';
import setSliders from './components/setSliders';
import setLazy from './components/setLazy';
import toggleVideoBg from './components/toggleVideoBg';
import toggleMenu from './components/toggleMenu';
import setModelsSliderHeight from './components/setModelsSliderHeight';
import scrollHorisontal from './components/scrollHorisontal';
import setScrollAnimations from './components/setScrollAnimations';

// $WIN.on('load', (e) => {
//   const $preloader = $('.preloader');
//   setTimeout(() => {
//     $preloader.remove();
//     $HTML.removeClass('has-preloader');

//   }, 1500);  
// });

$(function() {
  const $preloader = $('.preloader');
  
  $HTML.removeClass('has-preloader');
  
  svgUseIt();
  setTouchClassName();
  setSliders();
  // $WIN.on('resize', (e) => {
  //   setSliders();
  // });
  setLazy();
  toggleVideoBg();
  toggleMenu();
  // setModelsSliderHeight();
  scrollHorisontal();
  setScrollAnimations();

  setTimeout(() => {
    $preloader.remove();
  }, 500);
  
});
