$(document).ready(function(){

// Gallery
	$('.wrap__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

	$('.lightbox').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-img-mobile'
	});

// Image carousel
	$('.image__carousel').slick({
		dots: true,
		nextArrow: '<span class="icon-Arrow-OutRight"></span>',
  		prevArrow: '<span class="icon-Arrow-OutLeft"></span>'
	});

		$('.full__carousel').slick({
		    dots: true,
		    nextArrow: '<span class="icon-Arrow-OutRight"></span>',
  			prevArrow: '<span class="icon-Arrow-OutLeft"></span>',
		  	infinite: true,
		 	speed: 500,
		 	cssEase: 'linear',
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true
		});

// Filter projects
	var $grid = $('.project__area').isotope({
		// options
		itemSelector: '.grid__item',
		layoutMode: 'fitRows'
	});

	// filter items on button click
	$('.filter__nav a').on( 'click', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	// Masonry grid
	$('.masonry__area').isotope({
		// options
		itemSelector: '.masonry__item',
  		layoutMode: 'masonry'/*,
			masonry: {
		    	columnWidth: 110
		  	},
			cellsByRow: {
				columnWidth: 220,
				rowHeight: 220
		  	},
		  	masonryHorizontal: {
		    	rowHeight: 110
		  	},
		  	cellsByColumn: {
		    	columnWidth: 220,
		    	rowHeight: 220
		  }*/
	});

// Scroll to top
	$('.top').click(function(){
		$('html , body').animate({ scrollTop: 0 } , 2000);

		return false;
	});

// Gallery slide on mobile
		$('.gallery__slide').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
	  		responsive: [
	        {
	            breakpoint: 768,
	            	settings: {
	            		slidesToShow: 1,
			  			focusOnSelect: true,
			  			arrows: true,
			  			nextArrow: '<span class="icon-Arrow-OutRight"></span>',
	  					prevArrow: '<span class="icon-Arrow-OutLeft"></span>'
					}
				}
	  		]
	    });

});