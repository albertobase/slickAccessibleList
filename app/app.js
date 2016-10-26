'use strict';
var app = {};
jQuery( document ).ready(function(){
    app.main = (function () {
        var load = function(){
            init();
        },
        init = function(){
            var target = '.carousel_slick';
            var $item = $(target);
            if ($item.length > 0){
                carousel();
            }
        },

        carousel = function(){
            var $flight_pagination = jQuery('.carousel_slick');

            $flight_pagination.each(function(){
                var $this = $(this),
                    classElement = $this.attr('class');

                $flight_pagination.wrap('<div class="' + classElement + '"/>').contents().unwrap();
            });

            var $flight_pagination = jQuery('.carousel_slick');

            $flight_pagination.each(function(){
                var $this = jQuery(this);

                $this.slick({
                    slide: 'li',
                    dots: false,
                    infinite: false,
                    arrows: true,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    //variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 10000,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 1239,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });
        };
      
        // Public API
        return {
            load: load
        };
    }());

    app.main.load();
});
