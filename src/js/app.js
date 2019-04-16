import 'intersection-observer';
import { $WIN } from './constants';

import setTouchClassName from './setTouchClassName.js';
import svgUseIt from 'svg-use-it';
import setSliders from './components/setSliders';
import setLazy from './components/setLazy';
import toggleVideoBg from './components/toggleVideoBg';
import toggleMenu from './components/toggleMenu';
import setModelsSliderHeight from './components/setModelsSliderHeight';
import scrollHorisontal from './components/scrollHorisontal';

$WIN.on('load', (e) => {
  const $preloader = $('.preloader');
  setTimeout(() => {
    $preloader.remove();
  }, 1500);  
});

$(function() {
  svgUseIt();
  setTouchClassName();
  setSliders();
  setLazy();
  toggleVideoBg();
  toggleMenu();
  setModelsSliderHeight();
  scrollHorisontal();
});
