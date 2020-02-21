
   $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $('button').click(function(){
    $('.pop-up').addClass('open');
  });
  
  $('.pop-up .close').click(function(){
    $('.pop-up').removeClass('open');
  });