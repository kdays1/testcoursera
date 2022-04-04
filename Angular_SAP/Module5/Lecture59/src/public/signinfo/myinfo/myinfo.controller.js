(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    SignUpController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var ctrl = this;
        ctrl.usuario = {};
        ctrl.usuario = MenuService.showUser();
    }
    
    })();