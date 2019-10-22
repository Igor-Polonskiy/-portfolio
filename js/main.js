 AOS.init();
$(window).scroll(function(){

  var docscroll=$(document).scrollTop();
  if(docscroll>$('nav').height()|| $('nav').height()>105 ){
  	$('nav').addClass('blackbag');
  }else{
    $('nav').removeClass('blackbag');
 }
});