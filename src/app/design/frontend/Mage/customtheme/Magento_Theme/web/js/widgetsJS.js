define([
    "jquery",
    "Magento_Ui/js/modal/modal",
    "tabs",
    "accordion"
], function ($, modal) {
    'use strict';

    $.widget('mage.widgetsJS', {
        option: {
            content: ".modal_content",
            config: {
                type: 'popup',
                responsive: true,
                modalClass: 'modal_window',
                title: 'Title',
                buttons: []
            },
            option: {
                openedState: "active",
                animate: {"duration": 100},
                active: 1, "disabled": [2],
                disabledState: "disabled"
            },
            accordionConfig: {
                active: [1, 2],
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true
            }
        },

        _create: function () {
            let self = this;
            $('body').on('click', this.element, function () {
                self.modalWindow()
            });

            $(this.element).tabs({"mage/tabs": this.option.option});
            $(this.element).accordion(this.option.accordionConfig);


        },

        modalWindow: function () {
            let content = $(this.option.content);
            modal(this.option.config, content);
            content.modal('openModal');
        },

    });


    return $.mage.widgetsJS;
});

