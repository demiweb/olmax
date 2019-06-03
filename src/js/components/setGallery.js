import { $DOC, ACTIVE } from '../constants';
import isTouch from '../lib/detectTouch';
import '../lib/touchevents';
import lightGallery from 'lightgallery';
import 'lg-zoom';
import 'lg-fullscreen';
import 'lg-autoplay';
import 'lg-share';
import 'lg-thumbnail';
import 'lg-video';

export default function setGallery() {
  const $gallery = $('.js-gallery');

  if(!$gallery.length) return;


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
      const $targetImg = $('.js-gallery-preview[data-index="' + index + '"]');

      $thumbs.removeClass(ACTIVE);
      $(e.currentTarget).addClass(ACTIVE);
      $imgs.removeClass(ACTIVE);
      $targetImg.addClass(ACTIVE);
      $counter.text(index + 1 + ' / ' + imgAmount);
    });
  };

  togglePreviewImg();

  function setPreviewImgSlider() {
    const prev = 'js-gallery-prev';
    const next = 'js-gallery-next';

    function slideImg(e) {
      e.preventDefault();
      const $wrap = $(e.currentTarget).closest('.model-gallery__preview-wrap');
      const $imgs = $wrap.find('.js-gallery-preview');
      const $counter = $('.js-gallery-counter');

      const $imgActive = $wrap.find(`.js-gallery-preview.${ACTIVE}`);   
      let $imgNext;

      let index = parseInt($imgActive.data('index'));
      const imgAmount = $imgs.length;

      if (e.type === 'click' && $(e.currentTarget).hasClass(prev)) {
        $imgNext = $imgActive.prev();
      } else if (e.type === 'click' && $(e.currentTarget).hasClass(next)) {
        $imgNext = $imgActive.next();
      } else if (e.type === 'swr' ) {
        $imgNext = $imgActive.prev();
      } else if (e.type === 'swl') {
        $imgNext = $imgActive.next();
      };

      if (!$imgNext.length) return;

      index = $imgNext.data('index');

      $imgs.removeClass(ACTIVE);
      $imgNext.addClass(ACTIVE);
      $counter.text(index + 1 + ' / ' + imgAmount);
    };

    $DOC.on('click', `.${next}`, slideImg);
    $DOC.on('click', `.${prev}`, slideImg);
    $gallery[0].addEventListener('swl', slideImg);
    $gallery[0].addEventListener('swr', slideImg);
  };

  setPreviewImgSlider();
};

