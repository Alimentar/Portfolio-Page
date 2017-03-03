$(document).ready(function(){


$( ".menu" ).hide();
$( "#hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {

});
});

  $('#hamburger').click(function(){
    $(this).toggleClass('open');

  });


$('.stronaimg',this).mouseenter (
	function() {
		$('.zobacz',this).addClass ('zobacz2',this);
	}) 
	.mouseleave (function() {
		$('.zobacz').removeClass('zobacz2');
});

$('.stronaimg',this).mouseenter (
	function() {
		$('#imghover',this).css('opacity', '0.3');
	})
	.mouseleave (function(){
		$('#imghover', this).css('opacity', '1');
	});

});