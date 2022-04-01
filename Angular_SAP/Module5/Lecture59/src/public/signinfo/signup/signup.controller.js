(function () {
    "use strict";
    
    angular.module('signinfo')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['menuItems'];
    function MyInfoController(menuItems) {
        var $ctrl = this;
        $ctrl.menuItems = menuItems;
    }
    
    })();
    