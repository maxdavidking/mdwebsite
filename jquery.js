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
	$("button").click(function(){
var posting = $.post("ajax/test.html", function(data){
  var mainDiv = $(".row2", data); // finds <div id='mainDiv'>...</div>
}, "html");
posting.done(function( data ) {
    var content = $( data ).find( ".row2" );
    $( ".row2" ).empty().append( content );
	});
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