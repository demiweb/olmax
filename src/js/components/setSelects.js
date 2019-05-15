import Select from '../lib/customSelect';

export default function setSelects() {
  var $selects = $('.js-select');
  var $customSelect = $('.custom-select');
  var panelInput = document.createElement('input');
  var panelInputWrap = document.createElement('div');
  panelInput.type = 'text';
  panelInput.className = 'js-search';
  panelInputWrap.innerHTML = '<svg class="icon icon-search"><use xlink:href="img/sprite.svg#icon-search"></use></svg>';
  panelInputWrap.appendChild(panelInput);

  function addOptionCheckbox(option, customOption) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var inner = customOption.innerHTML;
    customOption.innerHTML = '<label><input type="checkbox">' + inner + '</label>';
  }

  ;

  function addOptionColorCheckbox(option, customOption) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var inner = customOption.innerHTML;
    var color = option.getAttribute('data-color');

    if (color) {
      customOption.innerHTML = '<label><input type="checkbox"><span class="color-square" style="background-color: '.concat(color, '"></span>').concat(inner, '</label>');
    } else {
      customOption.innerHTML = '<label><input type="checkbox">' + inner + '</label>';
    }

    ;
  }

  ;
  var options = {
    multiple: {
      multipleSelectionOnSingleClick: true,
      multipleSelectOpenerText: 'array',
      panelItem: {
        item: panelInputWrap,
        position: 'top'
      },
      optionBuilder: addOptionCheckbox
    },
    multiple_color: {
      multipleSelectionOnSingleClick: true,
      multipleSelectOpenerText: 'array',
      panelItem: {
        item: panelInputWrap,
        position: 'top'
      },
      optionBuilder: addOptionColorCheckbox
    }
  };

  $selects.each(function(i, selectEl) {    
    var selectType = selectEl.getAttribute('data-type');
    var $customSelect = $(selectEl).closest('.custom-select');    

    var select = new Select(selectEl, options[selectType]);
    select.init();


    var $customSelect = $(selectEl).closest('.custom-select');
    var $customSelectOptions = $customSelect.find('.custom-select__option');
    var $searchInput = $customSelect.find('.js-search');
    var $customSelectPanel = $customSelect.find('.custom-select__panel');
    var $customSelectOpener = $customSelect.find('.custom-select__opener'); // set multiple placeholder

    function setMultiplePlaceholder() {
      var $placeholderOption = $(selectEl).find('[value="placeholder"]');


      

      if ($placeholderOption.length > 0) {
        $customSelect.addClass('has-placeholder');
        var placeholder = $placeholderOption.text();
        $customSelectOpener.text(placeholder);
        $(selectEl).on('change', function(e) {
          if ($(e.currentTarget).val().length === 0) {
            $customSelectOpener.text(placeholder);
          }

          ;
        });
      };

      var openerValue = [];

      [].slice.call(selectEl.options).forEach(function(option) {
        if (option.selected) {
          openerValue.push(option.innerText);
          
          
        };
      });

      if (openerValue.length > 0) {
        $customSelectOpener.text(openerValue);
      };

      ;
    }

    ;
    setMultiplePlaceholder(); // set panel scroll

    function setMultiplyPanelScroll() {
      var $options = $customSelectPanel.find('.custom-select__option');
      $options.wrapAll('<div class="custom-select__panel-inner js-scrollbar"></div>');
    }

    ;

    function setDefaultPanelScroll() {
      $customSelectPanel.addClass('js-scrollbar');
    }

    ;

    if ($searchInput.length > 0) {
      setMultiplyPanelScroll();
    } else {
      setDefaultPanelScroll();
    }

    // ; // set option click

    // $customSelectOptions.each(function(i, option) {
    //   var label = $(option).find('label')[0];
    //   if (!label) return;

    //   if ($(option).hasClass('is-selected')) {
    //     label.click();
    //   }

    //   ;
    // });

    function setCheckboxSelected(e) {
      var options = [].slice.call(selectEl.options);
      var $customOptions = $(selectEl).closest('.custom-select').find('.custom-select__option');
      $customOptions.each(function(i, option) {
        var checkbox = $(option).find('input[type="checkbox"]')[0];
        if (!checkbox) return;

        if ($(option).hasClass('is-selected')) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
    };

    setCheckboxSelected();
    $(selectEl).on('change', setCheckboxSelected); // filter search

    $searchInput.on('input', function(e) {
      var filter = e.currentTarget.value.toUpperCase();
      var $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');
      $options.each(function(i, option) {
        var textValue = option.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });
  });
};


