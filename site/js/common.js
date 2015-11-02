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
	    scrollFixedElements();

	    if ($(window).scrollTop() > 0) {
	    	$('.js-header').addClass('is-active');
	    	$('.js-road').addClass('is-active');
	    }
	    else {
	    	$('.js-header').removeClass('is-active');
	    	$('.js-road').removeClass('is-active');
	    };
	});

	
	$('.js-menu-btn').click(function() {
		$(this).toggleClass('is-active');
		$('.js-menu').toggleClass('is-active');
		if (!$(this).hasClass('is-active')) {
			$('.js-menu-drop').slideUp('fast');
			$('.js-menu-link').removeClass('is-open');	
		};
		return false;
	});

	$('.js-menu').each(function() {
		$('body').click(function() {
			$('.js-menu').removeClass('is-active');
			$('.js-menu-btn').removeClass('is-active');
			$('.js-menu-drop').slideUp('fast');
			$('.js-menu-link').removeClass('is-open');				
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