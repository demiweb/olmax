export default function scrollHorisontal() {
  setTimeout(() => {
    const $scrolledEl = $('.js-scrolled-el').find('ul');

    $scrolledEl.on('wheel', (e) => {
      e = e.originalEvent;
      e.currentTarget.scrollLeft -= ((-e.deltaY/10) * 4);
      e.preventDefault();
    });
  }, 500);  
};
