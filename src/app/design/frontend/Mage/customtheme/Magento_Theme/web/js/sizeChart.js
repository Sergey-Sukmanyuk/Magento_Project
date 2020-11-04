define([
    "jquery",
    "Magento_Ui/js/modal/modal",
], function ($, modal) {
    'use strict';

    $.widget('mage.sizeChart', {
        option: {
            content: ".modal-size",
            config: {
                type: 'popup',
                responsive: true,
                buttons: [{
                    text: $.mage.__('CLOSE'),
                    class: '',
                    click: function () {
                        this.closeModal()
                    }
                }]
            },
        },

        _create: function () {
            let self = this;
            $('.modal-link').on('click', this.element, function () {
                self.modalWindow();
            });
        },

        modalWindow: function () {
            let content = $(this.option.content);
            modal(this.option.config, content);
            content.modal('openModal');
        },
    });


    return $.mage.sizeChart;
});

