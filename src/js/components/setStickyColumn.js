import StickySidebar from 'sticky-sidebar';
import { $WIN } from '../constants';
import { throttle, debounce } from 'throttle-debounce';

export default function setStickyColumn() {
  function setColumn() {


    const $column = $('.js-sticky-column');
    const $columnWrap = $column.closest('.js-sticky-column-wrap');  

    const columnStickyHeight = $column.outerHeight();

    const columnWidth = $columnWrap.outerWidth();
    const OFFSET = $('.header').outerHeight();
    const BOTTOM_OFFSET = 61;
    const columnStickyTop = $column.offset().top - OFFSET;
    const columnHeight = $columnWrap.outerHeight();

    const columnWrapTop = $columnWrap.offset().top - OFFSET;

    const setColumnThrottled = throttle(66, (e) => {
      if (window.pageYOffset >= columnStickyTop) {
        $column.css({
          position: 'fixed',
          zIndex: '10',
          top: OFFSET + 'px',
          width: columnWidth
        });
      };

      if(window.pageYOffset < columnStickyTop) {
        $column.css({
          position: '',
          zIndex: '',
          top: '',
          bottom: '',
          width: ''
        });
      };

      if (window.pageYOffset > columnHeight+columnWrapTop-columnStickyHeight-BOTTOM_OFFSET) {
        $column.css({
          position: 'absolute',
          bottom: BOTTOM_OFFSET + 'px',
          zIndex: '',
          top: '',
          width: ''
        });
      };
    });

    $WIN.on('scroll', setColumnThrottled);
  };

  setColumn();

  const setColumnDebounced = debounce(66, setColumn);

  $WIN.on('resize', setColumnDebounced);
};
