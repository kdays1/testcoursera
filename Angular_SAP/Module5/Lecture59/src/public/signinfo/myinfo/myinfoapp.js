(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['menuItems'];
    function MyInfoController(menuItems) {
        var $ctrl = this;
        $ctrl.menuItems = menuItems;
    }
    
    })();
    