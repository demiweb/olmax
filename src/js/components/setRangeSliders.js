import noUiSlider from 'nouislider';

export default function setRangeSliders() {
  const $sliders = $('.js-range-slider');

  $sliders.each((i, slider) => {
    const $wrap = $(slider).closest('.range-slider');
    const max = parseInt(slider.getAttribute('data-max'));
    const min = parseInt(slider.getAttribute('data-min'));

    const nodes = [
      $wrap.find('.js-range-slider-min')[0], // 0
      $wrap.find('.js-range-slider-max')[0] // 1
    ];

    noUiSlider.create(slider, {
      start: [min, max],
      connect: true,
      range: {
        'min': min,
        'max': max
      }
    });

    slider.noUiSlider.on('update', (values, handle) => {
      const value = Math.round(values[handle]);
      nodes[handle].innerHTML = value;
    });
  });  
};
