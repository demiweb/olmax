export default function setModelsSliderHeight() {
  if (window.matchMedia('(min-width: 992px)').matches) return;


  setTimeout(() => {
    const $slider = $('.js-height-slider');
    const $info = $slider.find('.slide__info');
    const $wrap = $slider.find('.slider__wrap');

    const sliderHeight = $slider.height();
    const infoHeight = $info.outerHeight();
    const newHeight = sliderHeight - infoHeight;

    $slider.css({
      height: newHeight + 'px',
      marginBottom: infoHeight + 'px'
    });
  }, 1500);
};
