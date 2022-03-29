(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
        templateUrl: 'js/templates/categoriestemplate.html',
        bindings: {
            categ: '<'
        }
        
    });
    //getAllCategories
}) ();