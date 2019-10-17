$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$('nav').height()){
  	$('nav').addClass('.blackbag');
  }else{
    $('nav').removeClass('.blackbag');
 }
});