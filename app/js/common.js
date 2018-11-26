$(function() {

	jQuery('.catalog__header-item').click(function() {
		var target = jQuery(this).data('target');
		jQuery('.catalog__header-item').removeClass('active')
		jQuery(this).addClass('active');
		jQuery('.catalog__content').removeClass('show');
		jQuery(target).addClass('show');
	})

	jQuery('.hamburger').click(function() {
		html = jQuery(this).parent().find('ul').html();
		if( ! jQuery('body').find('.mobile-menu').length ) {
			jQuery('body').prepend('<div class="mobile-menu"><div class="mobile-menu-close"><div class="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div></div><ul>' + html + '</ul></div>');
		}
		jQuery(function(){
			jQuery('.mobile-menu').addClass('loaded');
			jQuery('.hamburger').toggleClass('is-active');
		});
		
	});

	jQuery(document).on('click', '.mobile-menu-close', function() {
		jQuery('.mobile-menu').removeClass('loaded');
		jQuery('.hamburger').toggleClass('is-active');
	});

	jQuery('.main-slider').slick({
		dots : true,
		arrows : true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 614,
	      settings: {
	      	arrows: false
	      }
	    },
	  ]
	});

	jQuery('.tiles-slider').slick({
		dots : true,
		arrows : true,
		speed: 500,
		autoplay: true,
		responsive: [
	    {
	      breakpoint: 978,
	      settings: 'unslick'
	    }
	  ]
	});

});
