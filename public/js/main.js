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
    })();

    (function smoothscroll() {
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
    })();

    



    //(function navbarlink () {
      //   $(".navbar a:eq(1)").addClass("active");
      //   $(window).scroll(function() {
      //       var scroll=$(this).scrollTop();
      //       var header=$("header").height();
      //       var services=header+$(".services").height()+$(".team").height()

            

      //       if (scroll>header) {
      //           $(".navbar a:eq(1)").removeClass("active")
      //           $(".navbar a:eq(2)").addClass("active")
      //       } else {
      //         $(".navbar a:eq(2)").removeClass("active")
      //       }

      // })

    //   $(window).scroll(function() {
    //     var scroll=$(window).scrollTop();
    //     $("body").each(function(i) {
    //         if($(this))

    //     })
    //   })
    // })()
    $('.navbar a').on('click', function() {
      var scrollAnchor = $(this).attr('data-scroll'),
          scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
      $('body,html').animate({
          scrollTop: scrollPoint
      }, 500);
      return false;
  });




    $(window).scroll(function() {
  var windscroll = $(window).scrollTop();
    $('section').each(function(i){
      if($(this).position().top <= windscroll + 10) {
        $('.navbar a.active').removeClass('active');
        $('.navbar a').eq(i).addClass('active');
      }
    });
  }).scroll();
});

