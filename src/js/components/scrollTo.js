import { $HTMLBODY } from '../constants';

export default function scrollTo() {
  const $scrollToBtn = $('.js-scroll-to-btn');
  const $header = $('.header');
  const headerHeight = $header.outerHeight();
  const $tabs = $('.model-tabs__tabs');
  
  const OFFSET = headerHeight;  

  $scrollToBtn.on('click', (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('href');
    const $target = $('[data-scroll-target="'+ id +'"]');

    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 1000);
  });
};
