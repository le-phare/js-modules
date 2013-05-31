/*!
 * Simple show/hide/toggle based on the html5 data API.
 *
 * © 2013 Le Phare
 */
(function ($) {
    $(document).on('click', '[data-show]', function(e) {
        var targetElement = $(e.target).data('show');

        $(targetElement).show();
        $(this).addClass('active');
    });

    $(document).on('click', '[data-hide]', function(e) {
        var targetElement = $(e.target).data('hide');

        $(targetElement).hide();
        $(this).removeClass('active');
    });

    $(document).on('click', '[data-toggle]', function(e) {
        var targetElement = $(e.target).data('toggle');

        $(targetElement).toggle();

        if ($(targetElement).is(':visible')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $(document).on('click', '[data-toggle-only]', function(e) {
        var targetElement = $(e.target).data('toggle-only');

        $('[data-toggle-only]').each(function(){
            var target = $(this).data('toggle-only');
            if (target !== targetElement) {
                $(target).hide();
            }
        });

        if ($(targetElement).is(':visible')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }

        $(targetElement).toggle();
    });
})(jQuery);
