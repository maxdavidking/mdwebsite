/*$(document).ready(function () {
	$("button").click(function (){
		$("p").toggle();
  });
});
commented out for now - toggle above works */

// Script below works. Need to add on scroll functionality. Need to name(rename) row divs to make them selectable (eg: row1, row2, row3, etc...) 
// Also need to add ability to get back to home.
$(document).ready(function () {
	$("button").click(function() {
		$('html, body').animate({
			scrollTop: $(".row2").offset().top
		}, 2000);
	});
});

