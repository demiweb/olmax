import * as SpriteSpin from 'spritespin';

export default function rotateImage() {
  const $spinner = $('.js-spinner');
  if (!$spinner.length) return;
  
  const src = $spinner.data('source');
  const frames = $spinner.data('frame');

  $spinner.spritespin({
    source: SpriteSpin.sourceArray(src, { frame: frames, digits: 3 }),
    width   : 480,
    height  : 327,
    sense: -1,
    animate: false,
    plugins: [
      '360',
      'drag'
    ]
  });
};
