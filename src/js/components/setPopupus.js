import Popup from '../lib/popup';
import { $WIN, $BODY, ACTIVE, NOSCROLL } from '../constants';

export default function setPopup() {
  const popup = new Popup();
  popup.init();

  function openRatingPopup() {
    const $ratingPopup = $('.js-popup[data-popup="rating"]');
    if (!$ratingPopup.length) return;

    const myStorage = localStorage;
    const limit = 1 * 3600 * 1000; // 1 hour

    const localStorageInitTime = myStorage.getItem('localStorageInitTime');

    if (!localStorageInitTime) {
      myStorage.setItem('localStorageInitTime', +new Date());
    } else if(+new Date() - localStorageInitTime > limit) {
      myStorage.removeItem('localStorageInitTime');
      myStorage.setItem('localStorageInitTime', +new Date());

      myStorage.removeItem('ratingPopup');
    };

    const ratingClose = JSON.parse(myStorage.getItem('ratingPopup'));
    
    const DELAY = 120000;

    setTimeout(() => {
      if (ratingClose) return;
      $ratingPopup.addClass(ACTIVE);
      $BODY.addClass(NOSCROLL);
      
      myStorage.setItem('ratingPopup', true);
    }, DELAY);
  };

  $WIN.on('load', openRatingPopup);
};
