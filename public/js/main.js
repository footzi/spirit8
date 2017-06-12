$(document).ready(function() {
    //isotope
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

    //parallax
    (function parallax (){
        $('header').parallax({imageSrc: 'image/01.jpg'});
    })();

    //fixed navbar
    (function navfixed() {
        $(window).scroll(function() {
            if($(this).scrollTop()>$(".navbar").height()) {
               $(".navbar").addClass("navbar-fixed")
            } else {
                $(".navbar").removeClass("navbar-fixed")
            }
        })
    })();

    //scroll
    (function scroll () {
        $('.navbar-link').on('click', function() {
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
                if($(this).position().top <= windscroll+10) {
                    $('.navbar-link.active-link').removeClass('active-link');
                    $('.navbar-link').eq(i).addClass('active-link');
                }
            });
        }).scroll();
       
    })();
 });