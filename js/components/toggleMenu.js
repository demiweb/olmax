import { ACTIVE, $BODY, NOSCROLL } from '../constants';

export default function toggleMenu() {
  const $burger = $('.js-burger');
  const $menu = $('.js-menu');

  $burger.on('click', (e) => {
    e.preventDefault();
    $(e.currentTarget).toggleClass(ACTIVE);
    $menu.toggleClass(ACTIVE);
    $BODY.toggleClass(NOSCROLL);
  });
};
