import setSelects from './components/setSelects';
import setRangeSliders from './components/setRangeSliders';
import setGallery from './components/setGallery';
import setScrollBar from './components/setScrollBar';
import setLazy from './components/setLazy';
import setStickyColumn from './components/setStickyColumn';


/* eslint-disable */
$(document).ready(function() {
  $('body').on('click','.items-top__btns a',function(e) {
    e.preventDefault();
    $('body').find('.items-top__btns a').removeClass('is-active');
    $(this).addClass('is-active');
    if($(this).attr('data-state')=='list') {
        	$('body').find('#items_row .items__item').addClass('is-full');
        	$('body').find('#items_row .items__item .item').addClass('item--row');
    }else{
      $('body').find('#items_row .items__item').removeClass('is-full');
      $('body').find('#items_row .items__item .item').removeClass('item--row');
    }
    var data = {
      'action': 'editsession',
      'type' : $(this).attr('data-state'),
    };
    $.ajax({
      url:ajaxurl, // обработчик
      data:data, // данные
      type:'POST', // тип запроса
      success:function(data) {
      }
    });
  });

  $('body').on('change','#posts_per_page',function() {
    filter();
  });
  $('body').on('change','#mark',function() {
    filter();
  });
  $('body').on('change','#model',function() {
    filter();
  });
  $('body').on('change','#yahr',function() {
    filter();
  });
  $('body').on('change','#body',function() {
    filter();
  });
  $('body').on('change','#sort',function() {
    filter();
  });
  $('body').on('change','#run',function() {
    filter();
  });
  $('body').on('change','#trans',function() {
    filter();
  });
  $('body').on('change','#stan',function() {
    filter();
  });
  $('body').on('change','#status',function() {
    filter();
  });



  jQuery(function($) {
    $('body').on('click','#loadauto',function(e) {
        	e.preventDefault();
      $('#wrap-content').css('opacity','0.5');
      var page=parseInt($(this).attr('data-current_page'))+1;
      var href=$('#link_cat').val()+'/page/'+page+'/';
      var url=get_url(href);
      $.get(url, function(data) {
        $('#items_row').append($(data).find('#items_row > *'));
        $('.items__pagination').html($(data).find('.items__pagination > *'));
        $('#wrap-content').css('opacity','1');

        setLazy();
        setGallery();
        
        $(data).filter('script').each(function() {
          if ((this.text || this.textContent || this.innerHTML).indexOf('document.write') >= 0) {
            return;
          }
          $.globalEval(this.text || this.textContent || this.innerHTML || '');
        });

        


      }, 'html');
    });


    $('body').on('click','.list_auto_pagination .pagination a',function(e) {
      e.preventDefault();
      $('#wrap-content').css('opacity','0.5');
      var href=$(this).attr('href');
      var url=get_url(href);
      $('html, body').animate({ scrollTop: $('#wrap-content').offset().top - 10 }, 'slow');
      $.get(url, function(data) {
        $('#items_row').html($(data).find('#items_row > *'));
        $('.items__pagination').html($(data).find('.items__pagination > *'));
        $('#wrap-content').css('opacity','1');

        setLazy();
        setGallery();

        $(data).filter('script').each(function() {
          if ((this.text || this.textContent || this.innerHTML).indexOf('document.write') >= 0) {
            return;
          }
          $.globalEval(this.text || this.textContent || this.innerHTML || '');
        });


      }, 'html');
    });


  });

} );
function get_url(href) {
  var autocol=$('#posts_per_page').val();
  var sort=$('#sort').val();
  var minprice=$('.js-range-slider-min').text();
  var maxprice=$('.js-range-slider-max').text();
  if(!minprice || minprice=='NaN') {
    var minprice=$('.car-search__slider .range-slider__slider').attr('data-min');
  }
  if(!maxprice || maxprice=='NaN') {
    var maxprice=$('.car-search__slider .range-slider__slider').attr('data-max');
  }

  var mark=$('#mark').val();
  var model=$('#model').val();
  var yahr=$('#yahr').val();
  var body=$('#body').val();
  var run=$('#run').val();
  var trans=$('#trans').val();
  var stan=$('#stan').val();
  var status=$('#status').val();


  var url=href+'?autocol='+autocol;
  url=url+'&sort='+sort;
  if(minprice && minprice!=0) {
    url = url + '&minprice=' + minprice;
  }
  if(maxprice && maxprice!=0) {
    url = url + '&maxprice=' + maxprice;
  }
  if(mark && mark!=0) {
    url=url+'&mark='+mark;
  }
  if(model && model!=0) {
    url=url+'&model='+model;
  }
  if(yahr && yahr!=0) {
    url=url+'&yahr='+yahr;
  }
  if(body && body!=0) {
    url=url+'&body='+body;
  }
  if(run && run!=0) {
    url=url+'&run='+run;
  }
  if(trans && trans!=0) {
    url=url+'&trans='+trans;
  }
  if(stan && stan!=0) {
    url=url+'&stan='+stan;
  }
  if(status && status!=0) {
    url=url+'&status='+status;
  }
  if(autocol && sort ) {
    history.pushState(null, 'KNOWLEDGE BASE',url);
  }

  return url;
}

export function filter() {
  $('#wrap-content').css('opacity','0.5');
  var href=$('#link_cat').val();
  var url=get_url(href);
  $.get(url, function(data) {
    $('#wrap-content').html($(data).find('#wrap-content > *'));
    $('.catalog_pagination').html($(data).find('.catalog_pagination > *'));
    $('#wrap-content').css('opacity','1');
    reload();
    $(data).filter('script').each(function() {
      if ((this.text || this.textContent || this.innerHTML).indexOf('document.write') >= 0) {
        return;
      }
      $.globalEval(this.text || this.textContent || this.innerHTML || '');
    });


  }, 'html');

}
export function credit(scroll, value,bank) {
  $('.error_calk').css('display','none');
    var costauto=parseInt($('.bank'+bank).find('.costauto').val());
    var avans=parseInt($('.bank'+bank).find('.avans').val());
    var monat=parseInt($('.bank'+bank).find('.monat').val());
    var minavans=parseInt($('.bank'+bank).find('.min_avans').val());
    var percent=0;
    if(avans>=costauto*minavans/100 && costauto>avans){
        var avans_percent=parseInt(avans/costauto*100);
        bank1.forEach(function(element){
            if(parseFloat(element['monath_from'])<monat && parseFloat(element['monath_to'])>=monat && parseFloat(element['avans_from'])<=avans_percent && parseFloat(element['avans_to'])>=avans_percent ){
                 percent=parseFloat(element['percent']);
            }
        });
        var i=percent/100/12;
        var iplus=i+1;
        var ex=Math.pow(iplus,monat);
        var monath_pay=(costauto-avans)*(i+(i/(ex -1)));

        $('.bank'+bank).find('.monat_pay').text(parseInt(monath_pay));
        if(costauto<316965){
            $('.cost_registration').html(costauto*0.03+' грн.');
        }else if(costauto>316965 && costauto<557090){
            $('.cost_registration').html(costauto*0.04+' грн.');
        }else{
            $('.cost_registration').html(costauto*0.05+' грн.');
        }
    }else{
        if(avans<=costauto*minavans/100){
            $('.error_avans').css('display','block');
            $('.error_avans span').text(costauto*minavans/100);
        }
        if(costauto<avans){
            $('.error_avansbig').css('display','block');
        }
        $('.bank'+bank).find('.monat_pay').text(parseInt(0));
        $('.cost_registration').html('3-5%');
    }
}


function reload() {
  setRangeSliders();
  setSelects();
  setGallery();
  setScrollBar();
  setLazy();
  setStickyColumn();
}


/* eslint-enable */
