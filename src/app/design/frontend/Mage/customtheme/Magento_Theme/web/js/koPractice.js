define([
    "uiComponent",
    "jquery",
    "ko"], function (Component, $, ko) {
    "use strict"

    return Component.extend({

        defaults: {
            fromKo: ko.observable(''),
            isSelected: ko.observable(true)
        },


        initialize: function () {
            this._super()

            this.fromKo.subscribe(function (newValue) {
                console.log(newValue)
            })
            this.isSelected.subscribe(function (newValue) {
                if(newValue == false) {
                    alert('hello world')
                }
            })
        },



    })
});
