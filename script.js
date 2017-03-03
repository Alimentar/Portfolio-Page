$(document).ready(function(){


consoleText(['Junior Front-End Developer'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    }  else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 70)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(window).scroll( function(){

       /* Check the location of each desired element */
       $('.about').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object ){

               $('.about').addClass('about1');

           }

       });
       $('.about').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window < bottom_of_object ){

               $('.abouttext').addClass('abouttext1');

           }

       });
             $('.ani').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object ){

               $('.ani').addClass('animated');

           }

       });
                   $('.sylw').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window < bottom_of_object ){

               $('.sylw').addClass('sylw1');

           }

        });
                    $('.bounce1').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window < bottom_of_object ){

               $('.bounce1').addClass('bounce2');

           }

        });

});
$( ".menu" ).hide();
$( "#hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {

});
});

  $('#hamburger').click(function(){
    $(this).toggleClass('open');

  });


});
