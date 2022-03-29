(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams','MenuDataService','categ','catsn']
    function ItemsController($stateParams,MenuDataService, categ, catsn) {
        var ctrl = this;
        var item  = categ[$stateParams.itemId];
        ctrl.catsn = catsn;
        ctrl.categoryShortName = item.short_name;
    }

}) ();