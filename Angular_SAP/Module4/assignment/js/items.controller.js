(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams','MenuDataService','categ']
    function ItemsController($stateParams,MenuDataService, categ) {
        var ctrl = this;
        var itemid  = categ[$stateParams.itemId];
        ctrl.categoryShortName = itemid.short_name;
    }

}) ();