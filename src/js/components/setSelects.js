import Select from '../lib/customSelect';

export default function setSelects() {
  const $selects = $('.js-select');

  const panelInput = document.createElement('input');
  const panelInputWrap = document.createElement('div');
  panelInput.type = 'text';
  panelInput.className = 'js-search';
  panelInputWrap.appendChild(panelInput);

  function addOptionCheckbox(option, customOption) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const inner = customOption.innerHTML;
    customOption.innerHTML = '<label><input type="checkbox">' + inner+'</label>';
  };

  const options = {
    multiple: {
      multipleSelectionOnSingleClick: true,
      multipleSelectOpenerText: 'array',
      panelItem: {
        item: panelInputWrap,
        position: 'top'
      },
      optionBuilder: addOptionCheckbox
    }
  };

  $selects.each((i, selectEl) => {
    const selectType = selectEl.getAttribute('data-type');
    const select = new Select(selectEl, options[selectType]);
    select.init();

    const $customSelect = $(selectEl).closest('.custom-select');
    const $customSelectOptions = $customSelect.find('.custom-select__option');
    const $searchInput = $customSelect.find('.js-search');
    const $customSelectPanel = $customSelect.find('.custom-select__panel');
    const $customSelectOpener = $customSelect.find('.custom-select__opener');

    // set multiple placeholder
    function setMultiplePlaceholder() {
      const $placeholderOption = $(selectEl).find('[data-placeholder]');

      if ($placeholderOption.length > 0) {
        $customSelect.addClass('has-placeholder');
        const placeholder = $placeholderOption.data('placeholder');
        $customSelectOpener.text(placeholder);
        console.log(placeholder, $placeholderOption[0]);
      };
      
    };

    setMultiplePlaceholder();

    // set panel scroll
    function setMultiplyPanelScroll() {
      const $options = $customSelectPanel.find('.custom-select__option');

      $options.wrapAll('<div class="custom-select__panel-inner js-scrollbar"></div>');
    };

    function setDefaultPanelScroll() {
      $customSelectPanel.addClass('js-scrollbar');
    };

    if ($searchInput.length > 0) {
      setMultiplyPanelScroll();
    } else {
      setDefaultPanelScroll();
    };

    

    // set option click
    $customSelectOptions.each((i, option) => {
      const label = $(option).find('label')[0];
      if (!label) return;

      if ($(option).hasClass('is-selected')) {
        label.click();
      };
      
      $(option).on('click', (e) => {        
        label.click();
      });      
    });

    // filter search
    $searchInput.on('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      const $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');

      $options.each((i, option) => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = null;
        } else {
          option.style.display = 'none';
        }
      });
    });
  });
};
