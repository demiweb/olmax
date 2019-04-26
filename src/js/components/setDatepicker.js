import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import { Ukraine } from '../lib/flatpickrUaLocale.js';

export default function setDatepicker() {
  const $inputs = $('.js-time-input');
  if (!$inputs.length) return;

  $inputs.each((i, input) => {
    const type = input.getAttribute('data-type');
    const datLanguage = input.getAttribute('data-lang');
    let locale;

    if (datLanguage) {
      if (datLanguage === 'Ukraine') {
        locale = Ukraine;
      };
      if (datLanguage === 'Russian') {
        locale = Russian;
      };
    };    

    const options = {
      time: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        disableMobile: 'true'
      },
      date: {
        'locale': locale,
        disableMobile: 'true'
      }
    };

    const picker = flatpickr(input, options[type]);
  });

}
