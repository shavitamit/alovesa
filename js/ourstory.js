$(function() {


	var $timeline_block = $('.timeline-block');
	var $threshold = 0.7; 

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*$threshold) {
			$(this).find('.timeline-date, .timeline-content').addClass('is-hidden');
		}
	});
	
	// Show the divs on scroll
	$(window).on('scroll', function() {

		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*$threshold && $(this).find('.timeline-date').hasClass('is-hidden') ) {
				$(this).find('.timeline-date, .timeline-content')
						.removeClass('is-hidden')
						.addClass('fade-in')
						.hide()
						.fadeIn(1000);
			}
		});

	});

}); 