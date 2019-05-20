import { ACTIVE, $DOC } from '../constants';

export default function toggleAside() {
  const btn = ('js-aside-toggle');

  $DOC.on('click', '.' + btn, (e) => {
    e.preventDefault();

    const $aside = $('.js-aside');

    $(e.currentTarget).toggleClass(ACTIVE);
    $aside.slideToggle();
  });
};
