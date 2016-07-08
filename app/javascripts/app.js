$(window).scroll(function(){

  var hScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ hScroll/5 +'%'
  });

  $('.passaros-back').css({
      'transform' : 'translate(0px, '+ hScroll/8+'%)'
  });

  $('.passaros-front').css({
      'transform' : 'translate(0px, '+ -hScroll/5+'%)'
  });

  if(hScroll > $('.galeria').offset().top - 200){

    $('.galeria').find('figure').each(function(i){

      setTimeout(function(){
        $('.galeria').find('figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));

    });
  }

});
