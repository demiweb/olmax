import { ACTIVE } from '../constants';

class Tabs {
  constructor() {
    
  };
  init() {
    this._initTabs();
  };

  destroy() {
    this._destroy();
  };

  toggleTabs(e) {
    e.preventDefault();
    const $clickTarget = $(e.currentTarget);
    const $wrap = $clickTarget.closest('.'+Tabs.classNames.wrap);
    const $tabs = $wrap.find('.'+Tabs.classNames.tab);
    const $items = $wrap.find('.'+Tabs.classNames.item);
    const tabData = $clickTarget.data('target-tab');
    const $tabTargetItem = $wrap.find('[data-tab="'+tabData+'"]');

    $tabs.removeClass(Tabs.classNames.active);
    $items.removeClass(Tabs.classNames.active);

    $clickTarget.addClass(Tabs.classNames.active);
    $tabTargetItem.addClass(Tabs.classNames.active);
  };

  _initTabs() {
    $(document).on('click', '.'+Tabs.classNames.tab, this.toggleTabs);
  };

  _destroy() {
    $(document).off('click', '.'+Tabs.classNames.tab, this.toggleTabs);
  };
};

Tabs.classNames = {
  wrap: 'js-tabs',
  tab: 'js-tab',
  item: 'js-tabs-item',
  active: 'is-active'
};

export default function setTabs() {
  const tabs = new Tabs();
  tabs.init();

  const $tabUnic = $('.js-tabs-unic-tab');
  $tabUnic.on('click', (e) => {
    e.preventDefault();
    const data = e.currentTarget.getAttribute('data-target-tab');
    const $tab = $('.js-tab[data-target-tab="'+data+'"]');

    $tab.click();
  });

}
