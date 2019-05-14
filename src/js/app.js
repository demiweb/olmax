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
import setStickyColumn from './components/setStickyColumn';
import setGallery from './components/setGallery';
import setTabs from './components/setTabs';
import rotateImage from './components/rotateImage';
import scrollTo from './components/scrollTo';
import setStickyPanels from './components/setStickyPanels';
import setDatepicker from './components/setDatepicker';
import setPopupus from './components/setPopupus';
import toggleItemsLayout from './components/toggleItemsLayout';
import setTextareaAutoheight from './components/setTextareaAutoheight';
import toggleBankItems from './components/toggleBankItems';
import setAccordion from './components/setAccordion';



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
  setStickyColumn();
  setGallery();
  setTabs();
  rotateImage();
  scrollTo();
  setStickyPanels();
  setDatepicker();
  setPopupus();
  toggleItemsLayout();
  setTextareaAutoheight();
  toggleBankItems();
  setAccordion();

  setTimeout(() => {
    $preloader.remove();
  }, 500);  
});

import './main.js';

