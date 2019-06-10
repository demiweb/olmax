import Popup from '../lib/popup';
import { $WIN, $BODY, ACTIVE, NOSCROLL } from '../constants';

export default function setPopup() {
  const popup = new Popup();
  popup.init();

  function openRatingPopup() {
    const $ratingPopup = $('.js-popup[data-popup="rating"]');
    if (!$ratingPopup.length) return;
    
    const DELAY = 40000;

    setTimeout(() => {
      $ratingPopup.addClass(ACTIVE);
      $BODY.addClass(NOSCROLL);
    }, DELAY);
  };

  $WIN.on('load', openRatingPopup);
};
