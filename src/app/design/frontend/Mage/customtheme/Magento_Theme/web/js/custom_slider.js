define([
    "jquery",
    "slick",
], function ($, slick) {
    'use strict';

    $.widget('mage.custom_slider', {
        _create: function () {
            this.slider();
        },
        slider: function () {
            $(this.element).slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 2,
                // autoplay: true,
                // autoplaySpeed: 2000,
            })
        }
    });
    return $.mage.custom_slider;
});

