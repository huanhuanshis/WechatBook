$(function() {
var top = $('#left_nav').offset().top - parseFloat($('#left_nav').css('marginTop').replace(/auto/, 0));

	$(window).scroll(function(evt) {
			var y = $(this).scrollTop();
			if (y > top) {
					$('#left_nav').addClass('fixed').removeAttr('style');
				}
	         else {
				$('#left_nav').removeClass('fixed');
			}
	});
});