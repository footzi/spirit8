$(document).ready(function() {
    (function isotope () {
        var $container = $('.isotope');
        $('#filters li').click(function(){
            var $this = $(this);
            if ( !$this.hasClass('is-checked') ) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
                }
            var selector = $this.attr('data-filter');
            $container.isotope({  itemSelector: '.item', filter: selector });
            return false;
        });
    })();

    (function parallax (){
        $('header').parallax({imageSrc: 'image/01.jpg'});
    })();

    (function navfixed() {
        $(window).scroll(function() {
            if($(this).scrollTop()>$(".navbar").height()) {
               $(".navbar").addClass("navbar-fixed")
            } else {
                $(".navbar").removeClass("navbar-fixed")
            }
        })
    })()
});




$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});