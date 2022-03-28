(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
        templateUrl: './templates/categoriestemplate.html',
        bindings: {
            categ: '<'
        }
        
    });
    //getAllCategories
}) ();