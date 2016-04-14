/*$(document).ready(function () {
	$("button").click(function (){
		$("p").toggle();
  });
});
commented out for now - toggle above works */

// Script below works. Need to add on scroll functionality. Need to name(rename) row divs to make them selectable (eg: row1, row2, row3, etc...) 
// Also need to add ability to get back to home.

//Removed for now. Attempting with jQuery get requests
/*$(document).ready(function () {
	$("button").click(function() {
		$('html, body').animate({
			scrollTop: $(".row2").offset().top
		}, 2000);
	});
});


//jQuery get
$(document).ready(function () {
	$("button").click(function() {
		$.get( "ajax/test.html", function( data ) {
			$( ".row2" ).html( data );
		});
	});
});
	
$(document).ready(function () {
	$("button").click(function(){
		$.get("ajax/test.html", function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});
});
*/
$(document).ready(function () {
	$(".aboutme").click(function(){
		$('html, body').animate({
			scrollTop: $(".wrapper").offset().top
			}, 1500);
  });
});
$(document).ready(function () {
	$(".background").click(function(){
		var posting2 = $.post("ajax/test.html", function(data){
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
	$(".projects").click(function(){
		var posting3 = $.post("ajax/test2.html", function(data){
			var mainDiv3 = $(".row3", data); // finds <div id='mainDiv'>...</div>
			}, "html");
		posting3.done(function( data ) {
			var content3 = $( data ).find( ".row3" );
			$( ".row3" ).empty().append( content3 );
	});
		$('html, body').animate({
			scrollTop: $(".row3").offset().top
			}, 2000);
  });
});
$(document).ready(function () {
	$(".resume").click(function(){
		var posting4 = $.post("ajax/test3.html", function(data){
			var mainDiv4 = $(".row4", data); // finds <div id='mainDiv'>...</div>
			}, "html");
		posting4.done(function( data ) {
			var content4 = $( data ).find( ".row4" );
			$( ".row4" ).empty().append( content4 );
	});
		$('html, body').animate({
			scrollTop: $(".row4").offset().top
			}, 2000);
  });
});
/*
$(document).ready(function () {
	$(".button2").click(function(){
var posting = $.post("ajax/test.html", function(data){
  var mainDiv = $(".row3", data); // finds <div id='mainDiv'>...</div>
}, "html");
posting.done(function( data ) {
    var content = $( data ).find( ".row3" );
    $( ".row3" ).empty().append( content );
	});
  });
});
$(document).ready(function () {
	$(".button3").click(function(){
var posting = $.post("ajax/test.html", function(data){
  var mainDiv = $(".row4", data); // finds <div id='mainDiv'>...</div>
}, "html");
posting.done(function( data ) {
    var content = $( data ).find( ".row4" );
    $( ".row4" ).empty().append( content );
	});
  });
});
*/