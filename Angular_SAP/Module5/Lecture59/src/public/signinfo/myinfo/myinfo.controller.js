(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    SignUpController.$inject = ['MyInfoService'];
    function MyInfoController(MyInfoService) {
        var ctrl = this;
        ctrl.usuario = {};
        ctrl.usuario = SignInfoService.showUser();
    }
    
    })();