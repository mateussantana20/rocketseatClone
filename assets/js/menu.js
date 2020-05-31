$( function() {

  $('h3').click(function(){
    $('.menuMobile ul').slideToggle();

    if($('#menu i').hasClass('fa fa-bars')) {
      $('#menu i').removeClass('fa fa-bars').addClass('fa fa-times')
    }
    else if($('#menu i').hasClass('fa fa-times')){
      $('#menu i').removeClass('fa fa-times').addClass('fa fa-bars');
    }

  })

} )
