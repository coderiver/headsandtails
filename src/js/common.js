$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	function scrollFixedElements() {
	    var scroll_left = $(this).scrollLeft();
	    $(".js-fixed").css({
	        left: -scroll_left
	    });
	}
	scrollFixedElements();
	$(window).scroll(function(){
	    scrollFixedElements()
	});
	
	$('.js-menu-btn').click(function() {
		$(this).toggleClass('is-active');
		$('.js-menu').toggleClass('is-active');
		return false;
	});

	$('.js-menu').each(function() {
		$('body').click(function() {
			$('.js-menu').removeClass('is-active')
			$('.js-menu-btn').removeClass('is-active')
		});
		$(this).click(function(event) {
			event.stopPropagation();
		});
		$('.js-menu-link').click(function() {
			if ($(this).hasClass('is-open')) {	
				$('.js-menu-drop').slideUp('fast');
				$('.js-menu-link').removeClass('is-open');			
			}
			else {
				$('.js-menu-drop').slideUp('fast');
				$('.js-menu-link').removeClass('is-open');
				$(this).addClass('is-open');
				$(this).siblings('.js-menu-drop').slideDown('fast');
			}			
			return false;
		});
	});

});