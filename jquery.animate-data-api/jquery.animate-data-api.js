(function($, undefined) {
  $(document).on('ready', function() {
    var animateStart = function(evt) {
        var $trigger   = $(this),
            onClass    = 'on',
            offClass   = 'off',
            preset     = $trigger.data('animate'),
            on         = ($trigger.data('state') === false || $trigger.data('state') === undefined),
            $target    = $($trigger.data('target')   || this),
            duration   = (undefined === $trigger.data('duration')   ? 'slow'  : $trigger.data('duration')),
            transition = (undefined === $trigger.data('transition') ? 'swing' : $trigger.data('transition'))
        ;
        evt.preventDefault();

        if ('show-hide' === preset) {
            onClass  = 'hide';
            offClass = '';
        }

        if (undefined !== $trigger.data('on')) {
          onClass = $trigger.data('on');
        }
        if (undefined !== $trigger.data('off')) {
          offClass = $trigger.data('off');
        }

        if ($target.size() > 0) {
          $trigger.trigger('animate-start', [ on ]);
          $target.switchClass(on ? offClass : onClass, on ? onClass : offClass, duration, transition, function() {
            $trigger.data('state', !!!$trigger.data('state'));
            $trigger.trigger('animate-end', [ !on ]);
          })
        }
      };


      $('body').on('click.data-api', '[data-animate]', animateStart);
  });
})(jQuery)
