(function($){
    'use strict';

    $.fn.scrollToAnchor = function(options) {

        var defaults = {
            headerHeight: 100
        };

        var options = $.extend(defaults, options);

        $(this).on('click', function(event) {
            var target = $(this).attr('href');

            if( $(target).length ) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(target).offset().top - options.headerHeight
                }, 1000);
            }
        });
    };
})(jQuery);
