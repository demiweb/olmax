import noUiSlider from 'nouislider';

export default function setRangeSliders() {
  const $sliders = $('.js-range-slider');

  $sliders.each((i, slider) => {
    const $wrap = $(slider).closest('.range-slider');
    const max = parseInt(slider.getAttribute('data-max'));
    const min = parseInt(slider.getAttribute('data-min'));
    const type = slider.getAttribute('data-type');

    if(!max || !min) {
      console.warn('range slider element must have `data-max` and `data-min` attributes');
    };

    const options = {
      'min_max': {
        start: [min, max],
        connect: true,
        range: {
          'min': min,
          'max': max
        }
      },
      'one_value': {
        start: [min],
        connect: [true, false],
        step: 500,
        range: {
          'min': min,
          'max': max
        }
      },
      date: {
        start: [min],
        connect: [true, false],
        range: {
          'min': min,
          'max': max
        }
      }
    };    

    noUiSlider.create(slider, options[type]);

    const minMaxBlocks = [
      $wrap.find('.js-range-slider-min')[0], // 0
      $wrap.find('.js-range-slider-max')[0] // 1
    ];


    if (minMaxBlocks[0]) {
      slider.noUiSlider.on('update', (values, handle) => {
        const value = Math.round(values[handle]);
        console.log(value);
        minMaxBlocks[handle].innerHTML = value;
      });
    };    

    const $valueInput = $wrap.find('.js-range-slider-value');
    const inputs = [$valueInput[0]];
    

    if ($valueInput.length) {
      const sighn = slider.getAttribute('data-sighn');

      slider.noUiSlider.on('update', (values, handle) => {
        const value = Math.round(values[handle]) + ' ' + sighn;
        $valueInput.val(value);
      });

      // Listen to keydown events on the input field.
      

      inputs.forEach(function(input, handle) {
        input.addEventListener('change', function() {
          slider.noUiSlider.setHandle(handle, this.value);
        });
      
      });
    };   

  });  
};
