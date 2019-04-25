import { $WIN, FIXED } from '../constants';
import { throttle } from 'throttle-debounce';

export default function setStickyPanels() {
  const $panels = $('.js-sticky-panel');
  if (!$panels.length) return;

  function fixPanels() {
    const windowTop = window.pageYOffset;
    const OFFSET = $('.header').outerHeight();
    const $section = $panels.first().closest('.models-list');

    $panels.each((i, panel) => {
      const panelTop = $(panel).offset().top;      

      if (windowTop > panelTop - OFFSET) {
        $panels.removeClass(FIXED);
        $(panel).addClass(FIXED);
      };     
    });

    if (windowTop < $section.offset().top) {
      $panels.removeClass(FIXED);
    }
  };

  const fixPanelsThrottled = throttle(66, fixPanels);
  
  $WIN.on('scroll', fixPanelsThrottled);
};
