
(function ($) {
    "use strict";
    var landingpage = {
        initialised: false
        , version: 1.0
        , mobile: false
        , init: function () {
            if (!this.initialised) {
                this.initialised = true;
            }
            else {
                return;
            }
            /*-------------- Carina Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.ClientSlider();
            this.TestimonialSlider();
        }
        , /*-------------- Carina Functions definition ---------------------------------------------------
                             ---------------------------------------------------------------------------------------------------*/
        //client slider
        ClientSlider: function () {
            if ($('.temp1_clientslider .owl-carousel').length > 0) {
                $('.temp1_clientslider .owl-carousel').owlCarousel({
                    loop: true
                    , margin: 10
                    , nav: false
                    , dots: false
                    , autoplay: true
                    , autoplayTimeout: 2000
                    , loop: true
                    , responsive: {
                        0: {
                            items: 1
                        }
                        , 600: {
                            items: 2
                        }
                        , 768: {
                            items: 4
                        }
                        , 1000: {
                            items: 6
                        }
                    }
                });
            }
        }, //testimonial slider
        TestimonialSlider: function () {
            if ($('.temp1_testimonialslider .owl-carousel').length > 0) {
                $('.temp1_testimonialslider .owl-carousel').owlCarousel({
                    loop: true
                    , margin: 30
                    , nav: false
                    , dots: false
                    , autoplay: true
                    , autoplayTimeout: 2000
                    , loop: true
                    , responsive: {
                        0: {
                            items: 1
                        }
                        , 600: {
                            items: 1
                        }
                        , 768: {
                            items: 2
                        }
                        , 1000: {
                            items: 2
                        }
                    }
                });
            }
        }
    };
    landingpage.init();
    // Load Event
    // Loader js
    $(window).on('load', function () {});
    // Scroll Event
    //fixed main menu
    $(window).on('scroll', function () {});
})(jQuery);
/*preloader*/
jQuery(window).load(function () {
    // will first fade out the loading animation
    jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(1000).fadeOut("slow");
})
   /*Scroll To Top*/
$(document).ready(function () {
    back = $(".back-to-top");
    $(window).scroll(function () {
        $(this).scrollTop() > 50 ? back.fadeIn() : back.fadeOut()
    }), back.click(function () {
        return back.tooltip("hide"), $("body,html").animate({
            scrollTop: 0
        }, 800), !1
    }), back.tooltip("show");
    //scrolls down
});