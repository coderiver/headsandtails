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

	$('.js-slick-gallery').each(function(index, el) {
		var _el = $(el);
		var slickFor = _el.find('.js-slick-for'); 
		var slickNav = _el.find('.js-slick-nav'); 

		slickFor.slick({
			arrows: false,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: slickNav
		});
		slickNav.slick({
			arrows: false,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: slickFor,
			// centerMode: true,
			focusOnSelect: true,
			centerPadding: '0'
		});
	});	

	$('.js-tooltip-parent').each(function() {
		var icon = $(this).find('.js-tooltip-icon'),
			tooltip = $(this).find('.js-tooltip');
		icon.hover(function() {
			tooltip.addClass('is-active');
		}, function() {
			tooltip.removeClass('is-active');
		});
	});

	$('.js-popup').each(function() {

		$('.js-popup-btn').each(function(index, el) {
			var btn = $(this).data('btn'),
				popup = $('.js-popup[data-block="' + btn + '"]'),
				popups = $('.js-popup'),
				close = $('.js-popup-close'),
				popupInner = $('.js-popup-inner');
			$(this).click(function() {
				popup.addClass('is-active');
				$('body').addClass('is-hidden');
				return false;
			});
			close.click(function() {
				popups.removeClass('is-active');
				$('body').removeClass('is-hidden');
				return false;
			});
			$('body').click(function() {
				popups.removeClass('is-active');
				$('body').removeClass('is-hidden');
			});
			popupInner.click(function(event) {
				event.stopPropagation();
			});
		});

		$('.js-gallery-prev').click(function() {
			$('.js-slick-for').slick('slickPrev');
			return false;
		});

		$('.js-gallery-next').click(function() {
			$('.js-slick-for').slick('slickNext');
			return false;
		});

	});

	$('.js-calendar-item').hoverIntent(calendarItem);

	function calendarItem () {
		var index = $(this).data('index');
		$('.js-calendar-slider').slick('slickGoTo', index);
	}

	$('.js-calendar-slider').slick({
		arrows: false,
		dots: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false
	});

	$('.js-quote').each(function() {

		var current = $(this).find('.js-quote-current');

		$('.js-quote-slider').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// infinite: false
		});

		$('.js-quote-total').text($('.slick-slide').length - $('.slick-cloned').length);

		$('.js-quote-current').text($('.slick-current').index());

		$('.js-quote-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			current.text($('.slick-current').data('slick-index') + 1)
		});

		$('.js-quote-prev').click(function() {
			$('.js-quote-slider').slick('slickPrev');
			return false;
		});

		$('.js-quote-next').click(function() {
			$('.js-quote-slider').slick('slickNext');
			return false;
		});
	});	


	$('.js-search-title').each(function() {
		$('body').click(function() {
			if ($('.js-search-input').val() == 0) {
				$('.js-search-input').removeClass('is-active');
				$('.js-search-title').removeClass('is-hidden');
				$('.search-results__label').removeClass('is-hidden');
			};
		});
		$('.js-search-title').click(function() {
			$('.js-search-input').addClass('is-active');
			$(this).addClass('is-hidden');
			$('.search-results__label').addClass('is-hidden');
			return false;
		});
		$('.js-search-input').click(function(event) {
			event.stopPropagation();
		});
	});

	$('.js-dairy-text').dotdotdot({
		ellipsis: '...',
		height: 72,
		watch: 'window'
	});

});