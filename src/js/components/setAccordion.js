import { $DOC, ACTIVE } from '../constants';

class Accordion {
  init() {
    $DOC.on('click', '.'+Accordion.classNames.title, this._toggleAccordion.bind(this));
  };

  _toggleAccordion(e) {
    e.preventDefault();
    
    const $wrap = $(e.currentTarget).closest('.'+Accordion.classNames.wrap);    
    const name = e.currentTarget.getAttribute('data-accordion-title');
    const $item = $wrap.find('[data-accordion-item="'+name+'"]');
    const $itemsElse = $wrap.find('.'+Accordion.classNames.content+':not([data-accordion-item="'+name+'"])');
    const $titlesElse = $wrap.find('.'+Accordion.classNames.title+':not([data-accordion-title="'+name+'"])');

    // $itemsElse.removeClass(ACTIVE);
    // $titlesElse.removeClass(ACTIVE);
    $(e.currentTarget).toggleClass(ACTIVE);
    $item.toggleClass(ACTIVE);

    if (this.onToggle) {
      this.onToggle(e.currentTarget, $item, $itemsElse, $titlesElse);
    };
  };
};

Accordion.classNames = {
  wrap: 'js-accordion',
  title: 'js-accordion-title',
  content: 'js-accordion-content'
};


export default function setAccordion() {
  const accordion = new Accordion();
  accordion.onToggle = (title, $item, $itemsElse, $titlesElse) => {
    // $itemsElse.slideUp();
    $item.slideToggle();
  };
  accordion.init();
};
