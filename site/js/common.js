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
	$(window).load(function(){
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
	$(window).scroll(function(){
	    scrollFixedElements();

	    if ($(window).scrollTop() > $('.js-header').outerHeight()) {
	    	$('.js-header').addClass('is-fixed');
	    	$('.js-road').addClass('is-fixed');
	    }
	    else {
	    	$('.js-header').removeClass('is-fixed');
	    	$('.js-road').removeClass('is-fixed');
	    };
	});

	$(window).scroll(function() {
		if ($('.js-loader').length) {
			if ($(window).scrollTop() + $(window).height() - $('.js-loader').outerHeight() >= $('.js-loader').offset().top) {
				$('.js-load-block').addClass('is-active');
			};
		};
	});

	$('.js-popup').scroll(function() {

		var popup = $(this);

		if ($(this).scrollTop() + $(this).innerHeight() >= $('.js-load-comment').position().top) {
			popup.find('.js-load-comments').addClass('is-active');

			console.log($(this).scrollTop() + $(this).innerHeight() - $('.js-load-comment'), $('.js-load-comment').position().top);
		};

	});

	$('.js-photo').click(function() {

		var index = $(this).index(),
			btn = $(this).parents('.js-popup-btn').data('btn');

		$('.js-popup[data-block="' + btn + '"]').addClass('is-active');
		$('body').addClass('is-hidden');

		$('.js-slick-for').slick('goTo', index);
		$('.js-slick-nav').slick('goTo', index);

		return false;
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
				$(this).parents('.js-popup').removeClass('is-active');
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

	$('.js-calendar-item').click(function() {
		var btns = $('.js-calendar-item'),
			items = $('.js-calendar-drop');

		if ($(this).hasClass('is-active')) {
			btns.removeClass('is-active');
			items.slideUp('fast');
		}
		else {
			btns.removeClass('is-active');
			items.slideUp('fast');
			$(this).addClass('is-active');
			$(this).siblings('.js-calendar-drop').slideDown('fast');
		};
	});

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
			adaptiveHeight: true
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

	// $('.js-video-play').click(function(ev) {
	// 	$('.js-video-play').addClass('is-hidden');
	// 	$("#video")[0].src += "?rel=0&autoplay=1";
	// 	ev.preventDefault();
	// });


	$(".js-video-play").click(function(){

		var videoSrc = $('#player').data('id');

		$('.js-video-play').addClass('is-hidden');

		player = new YT.Player('player', {
	    	videoId : videoSrc,
	    	playerVars: { 'autoplay': 1 },
		});
	});

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$('.js-countdown').countdown({until: new Date(2015, 12-1, 1), 
		format: 'dHM',
		labels: ['Лет', 'Месяцев', 'Недель', 'Дней', 'Часов', 'Минут', 'Секунд'],
		padZeroes: true,
	});


});