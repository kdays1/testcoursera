(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService', 'categ']
    function CategoriesController(MenuDataService, categ) {
        var ctrl = this;
        ctrl.categ = categ;
    }

}) ();