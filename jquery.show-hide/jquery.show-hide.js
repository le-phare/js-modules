/*!
 * Simple show/hide/toggle based on the html5 data API.
 *
 * © 2013 Le Phare
 */
(function ($) {
    $(document).on('click', '[data-show]', function(e) {
        e.preventDefault();
        var targetElement = $(e.target).data('show');

        $(targetElement).show();
        $(this).addClass('active');
    });

    $(document).on('click', '[data-hide]', function(e) {
        e.preventDefault();
        var targetElement = $(e.target).data('hide');

        $(targetElement).hide();
        $(this).removeClass('active');
    });

    $(document).on('click', '[data-toggle]', function(e) {
        e.preventDefault();
        var targetElement = $(e.currentTarget).data('toggle');

        $(targetElement)
            .toggle()
            .toggleClass('active')
        ;
    });

    $(document).on('click', '[data-toggle-only]', function(e) {
        e.preventDefault();
        var targetElement = $(e.currentTarget).data('toggleOnly');

        $('[data-toggle-only]').each(function(){
            var target = $(this).data('toggleOnly');
            if (target !== targetElement) {
                $(target).hide();
            }
        });

        $(targetElement)
            .toggle()
            .toggleClass('active')
        ;
    });
})(jQuery);
