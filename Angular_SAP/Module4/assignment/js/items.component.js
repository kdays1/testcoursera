(function () {
    'use strict';
    
    angular.module('data')
    .component('items', {
        templateUrl: 'js/templates/itemstemplate.html',
        bindings: {
            catsn: '<'
        }

    });
    //getAllCategories
}) ();