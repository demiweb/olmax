(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = global || self, factory(global.ru = {}));
}(this, function(exports) { 'use strict';

  var fp = typeof window !== 'undefined' && window.flatpickr !== undefined
    ? window.flatpickr
    : {
      l10ns: {}
    };
  var Ukraine = {
    weekdays: {
      shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      longhand: [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        "П'ятниця",
        'Субота',
      ],
    },

    months: {
      shorthand: [
        'Січ',
        'Лют',
        'Бер',
        'Кві',
        'Тра',
        'Чер',
        'Лип',
        'Сер',
        'Вер',
        'Жов',
        'Лис',
        'Гру',
      ],
      longhand: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
      ],
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return '';
    },
    rangeSeparator: ' — ',
    weekAbbreviation: 'Нед.',
    scrollTitle: 'Прокрутите для увеличения',
    toggleTitle: 'Нажмите для переключения',
    amPM: ['ДП', 'ПП'],
    yearAriaLabel: 'Год'
  };
  fp.l10ns.ua = Ukraine;
  var ua = fp.l10ns;

  exports.Ukraine = Ukraine;
  exports.default = ua;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
