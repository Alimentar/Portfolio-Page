$(document).ready(function(){


$( ".menu" ).hide();
$( "#hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {

});
});

  $('#hamburger').click(function(){
    $(this).toggleClass('open');

  });


odoo.default({ el:'.js-odoo', from: 'Aleksander', to: 'Portfolio', animationDelay: 100 });
});