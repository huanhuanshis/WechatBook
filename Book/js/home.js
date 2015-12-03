$(document).on('click','.btn',function(e){
	$(this).addClass('active').siblings().removeClass('active');
})



$(function(){
  $("#ershoushu").on('click',function(){
	window.location = "home.html";
})
})



$(function(){
  $("#shopping_cart").on('click',function(){
	window.location = "cart.html";
})
})
