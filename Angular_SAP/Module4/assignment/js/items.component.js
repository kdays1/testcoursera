(function () {
    'use strict';
    
    angular.module('data')
    .component('items', {
        templateUrl: './templates/itemstemplate.html',
        bindings: {
            catsn: '<'
        }

    });
    //getAllCategories
}) ();