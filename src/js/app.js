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
import setSelects from './components/setSelects';
import setRangeSliders from './components/setRangeSliders';
import setScrollBar from './components/setScrollBar';
import toggleAside from './components/toggleAside';

$(function() {
  const $preloader = $('.preloader');
  
  $HTML.removeClass('has-preloader');
  
  svgUseIt();
  setTouchClassName();
  setSliders();
  setLazy();
  toggleVideoBg();
  toggleMenu();
  // setModelsSliderHeight();
  scrollHorisontal();
  setScrollAnimations();
  setSelects();
  setRangeSliders();
  setScrollBar();
  toggleAside();

  setTimeout(() => {
    $preloader.remove();
  }, 500);  
});
