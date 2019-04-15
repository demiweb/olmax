import { $WIN } from './constants';
import setTouchClassName from './setTouchClassName.js';
import svgUseIt from 'svg-use-it';
import setSliders from './components/setSliders';
import setLazy from './components/setLazy';
import toggleVideoBg from './components/toggleVideoBg';

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
});
