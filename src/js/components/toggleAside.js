import { ACTIVE } from '../constants';

export default function toggleAside() {
  const $btn = $('.js-aside-toggle');

  $btn.on('click', (e) => {
    e.preventDefault();

    const $aside = $('.js-aside');

    $(e.currentTarget).toggleClass(ACTIVE);
    $aside.slideToggle();
  });
};
