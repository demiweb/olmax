import slick from 'slick-carousel';

export default function setSliders() {
  const $sliders = $('.js-slider');

  $sliders.each((i, slider) => {
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const $dots = $wrap.find('.js-dots');
    const $dotsBrands = $wrap.find('.js-brands-dots');
    const $dotsModels = $wrap.find('.js-models-dots');

    const options = {
      full: {
        dots: true,
        prevArrow: $prev,
        nextArrow: $next,
        appendDots: $dots
      },
      brands: {
        draggable: false,
        swipe: false,
        arrows: false,
        dots: true,
        appendDots: $dotsBrands,
        customPaging: function(slider, i) {
          const title = $(slider.$slides[i]).find('.slide').data('brand');

          return '<button>'+title+'</button>';
        },
      },
      models: {
        draggable: false,
        swipe: false,
        arrows: false,
        dots: true,
        appendDots: $dotsModels,
        customPaging: function(slider, i) { 
          const title = $(slider.$slides[i]).find('.slide').data('model');

          return '<button>'+title+'</button>';
        },
      },
      new_items: {
        slidesToShow: 3,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      partners: {
        slidesToShow: 4,
        prevArrow: $prev,
        nextArrow: $next
      },
      consultation: {
        prevArrow: $prev,
        nextArrow: $next
      }
    };

    const name = $(slider).data('slider');

    if (name === 'brands') {
      setTimeout(() => {
        $(slider).slick(options[name]);
      }, 100);
    } else {
      $(slider).slick(options[name]);
    };    
  });
}
