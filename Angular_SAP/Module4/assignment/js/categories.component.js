(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
        templateUrl: 'js/templates/categories.html',
        bindings: {
            categ: '<'
        }
        
    });
    //getAllCategories
}) ();