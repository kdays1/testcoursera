(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService']
    function ItemsController(MenuDataService) {
        var ctrl = this;
        ctrl.categ = MenuDataService.getAllCatergories();
    }

}) ();