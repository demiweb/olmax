import noUiSlider from 'nouislider';
import { filter, credit } from '../main';


export default function setRangeSliders() {
  var $sliders = $('.js-range-slider');

  $sliders.each(function(i, slider) {
    var $wrap = $(slider).closest('.range-slider');
    var max = parseInt(slider.getAttribute('data-max'));
    var min = parseInt(slider.getAttribute('data-min'));
    var scrol = slider.getAttribute('data-scrol');
    var bank = parseInt(slider.getAttribute('data-bank'));
    if(slider.getAttribute('data-nouislider-start')) {
      var start = parseInt(slider.getAttribute('data-nouislider-start'));
    }else{
      var start = min;
    }
    if(slider.getAttribute('data-nouislider-end')) {
      var end = parseInt(slider.getAttribute('data-nouislider-end'));
    }else{
      var end = max;
    }


    var type = slider.getAttribute('data-type');



    if(typeof max !== 'number' || typeof min !== 'number') {
      console.warn('range slider element must have `data-max` and `data-min` attributes');
    };

    var options = {
      'min_max': {
        start: [start, end],
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

    slider.noUiSlider.on('set.one', function(value) {
      filter();
      if(scrol) {
        credit(scrol,value,bank);
      }
    });
    var minMaxBlocks = [
      $wrap.find('.js-range-slider-min')[0], // 0
      $wrap.find('.js-range-slider-max')[0] // 1
    ];


    if (minMaxBlocks[0]) {
      slider.noUiSlider.on('update', function(values, handle) {
        var value = Math.round(values[handle]);
        minMaxBlocks[handle].innerHTML = value;
      });
    };

    var $valueInput = $wrap.find('.js-range-slider-value');
    var inputs = [$valueInput[0]];


    if ($valueInput.length) {
      // const sighn = slider.getAttribute('data-sighn');

      slider.noUiSlider.on('update', function(values, handle) {
        // const value = Math.round(values[handle]) + ' ' + sighn;
        var value = Math.round(values[handle]);
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

// export default function setRangeSliders() {
//   var $sliders = $('.js-range-slider');

//   $sliders.each(function(i, slider) {
//     var $wrap = $(slider).closest('.range-slider');
//     var max = parseInt(slider.getAttribute('data-max'));
//     var min = parseInt(slider.getAttribute('data-min'));
//     var type = slider.getAttribute('data-type');

//     if(typeof max !== 'number' || typeof min !== 'number') {
//       console.warn('range slider element must have `data-max` and `data-min` attributes');
//     };

//     var options = {
//       'min_max': {
//         start: [min, max],
//         connect: true,
//         range: {
//           'min': min,
//           'max': max
//         }
//       },
//       'one_value': {
//         start: [min],
//         connect: [true, false],
//         step: 500,
//         range: {
//           'min': min,
//           'max': max
//         }
//       },
//       date: {
//         start: [min],
//         connect: [true, false],
//         range: {
//           'min': min,
//           'max': max
//         }
//       }
//     };    

//     noUiSlider.create(slider, options[type]);

//     var minMaxBlocks = [
//       $wrap.find('.js-range-slider-min')[0], // 0
//       $wrap.find('.js-range-slider-max')[0] // 1
//     ];


//     if (minMaxBlocks[0]) {
//       slider.noUiSlider.on('update', function(values, handle) {
//         var value = Math.round(values[handle]);
//         minMaxBlocks[handle].innerHTML = value;
//       });
//     };    

//     var $valueInput = $wrap.find('.js-range-slider-value');
//     var inputs = [$valueInput[0]];
    

//     if ($valueInput.length) {
//       // const sighn = slider.getAttribute('data-sighn');

//       slider.noUiSlider.on('update', function(values, handle) {
//         // const value = Math.round(values[handle]) + ' ' + sighn;
//         var value = Math.round(values[handle]);
//         $valueInput.val(value);
//       });

//       // Listen to keydown events on the input field.
      

//       inputs.forEach(function(input, handle) {
//         input.addEventListener('change', function() {
//           slider.noUiSlider.setHandle(handle, this.value);
//         });
      
//       });
//     };   

//   });  
// };
