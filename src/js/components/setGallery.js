import { ACTIVE } from '../constants';
import lightGallery from 'lightgallery';
import 'lg-zoom';
import 'lg-fullscreen';
import 'lg-autoplay';
import 'lg-share';
import 'lg-thumbnail';

export default function setGallery() {
  const $gallery = $('.js-gallery');
  $gallery.lightGallery({
    exThumbImage: 'data-exthumbimage'
  });

  function togglePreviewImg() {
    const $thumbs = $('.js-gallery-thumb');
    const $imgs = $('.js-gallery-preview');
    const $counter = $('.js-gallery-counter');
    const imgAmount = $imgs.length;
    $counter.text('1 / ' + imgAmount);

    if (!$thumbs.length) return;

    $thumbs.on('click', (e) => {
      e.preventDefault();
      const index = parseInt(e.currentTarget.getAttribute('data-index'));
      const $targetImg = $('.js-gallery-preview[data-index="'+index+'"]');

      $thumbs.removeClass(ACTIVE);
      $(e.currentTarget).addClass(ACTIVE);

      $imgs.removeClass(ACTIVE);
      $targetImg.addClass(ACTIVE);
      $counter.text(index+1 + ' / ' + imgAmount);
    });
  };

  togglePreviewImg();
};
