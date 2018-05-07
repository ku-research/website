
// SCRIPT FOR THE DROP MENU

( function( $ ) {
$( document ).ready(function() {
$('#rwdmenu > ul').prepend('<li class=\"mobile\"><a href=\"#\"><span>Menu <i>&nbsp;</i></span></a></li>');
$('#rwdmenu > ul > li > a').click(function(e) {
  $('#rwdmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#rwdmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if( $(this).parent().hasClass('mobile') ) {
    e.preventDefault();
    $('#rwdmenu').toggleClass('expand');
  }
  if($(this).closest('li').find('ul').children().length === 0) {
    return true;
  } else {
    return false;
  }
});

});
} )( jQuery );





// CLOSE DROP MENU IF CLICKED AWAY FROM

$(document).click(function(event) {
    if(!$(event.target).closest('#rwdmenu li ul').length) {
      if(!$(event.target).closest('#rwdmenu').length) {
        if($('#rwdmenu li ul').is(":visible")) {
            $('#rwdmenu li ul').hide();
       }
     }
   }
 });

