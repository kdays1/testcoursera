(function () {
    'use strict';
    
    angular.module('data')
    .component('items', {
        templateUrl: 'js/templates/items.html',
        bindings: {
            catsn: '<',
            categ: '<'
        }

    });
    //getAllCategories
}) ();