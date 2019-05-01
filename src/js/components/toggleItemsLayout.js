import { ACTIVE } from '../constants';

export default function toggleItemsLayout() {
  const $btns = $('.js-items-list-btn');

  $btns.on('click', (e) => {
    const btn = e.currentTarget;
    const state = btn.getAttribute('data-state');
    const $items = $(btn).closest('.js-items-list').find('.js-list-item');

    e.preventDefault();

    $btns.removeClass(ACTIVE);
    $(btn).addClass(ACTIVE);

    $items.each((i, item) => {
      const $itemCol = $(item).closest('.items__item');
      if (state === 'list') {
        $(item).addClass('item--row');
        $itemCol.addClass('is-full');
      } else if (state === 'cols') {
        $(item).removeClass('item--row');
        $itemCol.removeClass('is-full');
      };
    });
    
  });

};
