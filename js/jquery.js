//Code for skip to next div buttons.
$(document).ready(function () {
	$(".nav1").click(function(){
		$('html, body').animate({
			scrollTop: $(".wrapper").offset().top
			}, 1500);
  });
});
$(document).ready(function () {
	$(".nav2").click(function(){
		var posting2 = $.post("ajax/background.html", function(data){
			var mainDiv2 = $(".row2", data); // finds <div id='mainDiv'>...</div>
			}, "html");
		posting2.done(function( data ) {
			var content2 = $( data ).find( ".row2" );
			$( ".row2" ).empty().append( content2 );
	});
		$('html, body').animate({
			scrollTop: $(".row2").offset().top
			}, 1500);
  });
});
$(document).ready(function () {
	$(".nav3").click(function(){
		var posting3 = $.post("ajax/projects.html", function(data){
			var mainDiv3 = $(".row3", data); // finds <div id='mainDiv'>...</div>
			}, "html");
		posting3.done(function( data ) {
			var content3 = $( data ).find( ".row3" );
			$( ".row3" ).empty().append( content3 );
	});
		$('html, body').animate({
			scrollTop: $(".row3").offset().top
			}, 1500);
  });
});
$(document).ready(function () {
	$(".nav4").click(function(){
		var posting4 = $.post("ajax/resume.html", function(data){
			var mainDiv4 = $(".row4", data); // finds <div id='mainDiv'>...</div>
			}, "html");
		posting4.done(function( data ) {
			var content4 = $( data ).find( ".row4" );
			$( ".row4" ).empty().append( content4 );
	});
		$('html, body').animate({
			scrollTop: $(".row4").offset().top
			}, 1500);
  });
});
