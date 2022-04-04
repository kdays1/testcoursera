(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var ctrl = this;
        ctrl.user = {};
        ctrl.errorocurred = false;
        ctrl.initialize = true;
        ctrl.submit = function(){
            var promise = MenuService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                    ctrl.user.result = signupcategory.data;
                    console.log(ctrl.user.result);
                    ctrl.errorocurred = false;
                    ctrl.initialize = false;
                    MenuService.keepUser(ctrl.user, ctrl.errorocurred, ctrl.initialize);
                },function(error) {
                    ctrl.user.result = "";
                    ctrl.errorocurred = true;
                    ctrl.initialize = true;
                    MenuService.keepUser(ctrl.user, ctrl.errorocurred, ctrl.initialize);
                    console.log(error);
                });
    }
}
    
    })();