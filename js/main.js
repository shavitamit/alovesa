// $(function() {
//   $('#hamburger').on('click',function() {
//
//     if ($('nav').hasClass('shown')) {
//         $('nav').stop().slideUp();
//         $('nav').removeClass('shown');
//     } else {
//       $('nav').stop().slideDown();
//       $('nav').addClass('shown');
//     }
//
//   });
// })


$(document).ready(function(){
	$('#hamburgerIcon').click(function(){
		$(this).toggleClass('open');

    if ($('nav').hasClass('shown')) {
      $('nav').stop().slideUp();
      $('nav').removeClass('shown');
    } else {
      $('nav').stop().slideDown();
      $('nav').addClass('shown');
    }

	});
});
