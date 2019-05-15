import PerfectScrollbar from 'perfect-scrollbar';

export default function setScrollBar() {
  var $containers = $('.js-scrollbar');

  $containers.each(function(i, container) {
    var ps = new PerfectScrollbar(container);
  });  
};
