(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams','MenuDataService']
    function ItemsController($stateParams,MenuDataService) {
        var ctrl = this;
        var categoryShortName  = item[$stateParams.ItemId];
        ctrl.catsn = MenuDataService.getItemsForCategory(categoryShortName);

    }

}) ();