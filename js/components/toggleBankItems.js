import { ACTIVE } from '../constants';

export default function toggleBankItems() {
  const $btn = $('.js-bank-toggle');

  $btn.on('click', (e) => {
    e.preventDefault();

    const name = e.currentTarget.getAttribute('data-bank-target');
    const $banksInfoBlocks = $('.js-bank-info:not([data-bank="'+ name +'"])');
    const $target = $(e.currentTarget).closest('.row').find('[data-bank="'+ name +'"]');

    $banksInfoBlocks.fadeOut();
    $target.fadeToggle();
  });
};
