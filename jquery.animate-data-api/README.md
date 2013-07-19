jquery.animate-data-api.js
==========================

This jquery plugin allow to trigger class based animation using data-api

Dependencies
------------

    * jquery (>= 1.9)
    * jqueryui.effect.core.js (>= 1.10)


Usage
-----

First, setup the provided scripts on page (consider adding them before closing your body tag)

```html
    <script type="text/javascript" src="vendor/jqueryui.effect.core.min.js"></script>
    <script type="text/javascript" src="jquery.animate-data-api.js"></script>
```

Then simply use data-api to animate

```html

    <style type="text/css">
        .fadeIn {
            opacity: 1;
            height: auto;
            overflow: none;
        }
        .fadeOut {
            opacity: 0;
            height: 0;
            overflow: hidden;
        }
    </style>


    <button data-animate data-on=".fadeIn" data-off=".fadeOut" data-target=".panel">Toggle</button>

    <div class="panel hide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis luctus sapien non ultricies.
        Phasellus non pretium sapien. Duis non sodales lacus. Donec sed ipsum at est dapibus sodales.
        Suspendisse id tincidunt massa. Donec sapien enim, cursus eget ligula sit amet, sollicitudin venenatis
        justo. Sed sit amet purus sollicitudin urna mattis accumsan at sed nulla. Proin vulputate accumsan semper.
        Phasellus nisl est, vehicula ut nisi in, sollicitudin vulputate nibh. Duis condimentum lectus nunc,
        sed malesuada quam consequat quis. Etiam rhoncus sapien malesuada, vestibulum justo sed, ultricies diam.
    </div>

```


Presets
-------

There is also some presets provided to faster development.

### Show/Hide preset

```html
    <button data-animate="show-hide" data-target=".panel">Toggle</button>
```
