(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('SignInfoService',SignInfoService);

    SignUpController.$inject = ['SignInfoService'];
    function SignUpController(SignInfoService) {
        var ctrl = this;
        ctrl.user = {};
        ctrl.errorocurred = false;
        ctrl.initialize = true;
        ctrl.submit = function(){
            var promise = SignInfoService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                    ctrl.user.result = signupcategory.data;
                    SignInfoService.keepUser(ctrl.user, ctrl.errorocurred, ctrl.initialize);
                    console.log(ctrl.user.result);
                    ctrl.errorocurred = false;
                    ctrl.initialize = false;
                },function(error) {
                    ctrl.user.result = "";
                    ctrl.errorocurred = true;
                    ctrl.initialize = true;
                    SignInfoService.keepUser(ctrl.user, ctrl.errorocurred, ctrl.initialize);
                    console.log(error);
                });
    }
}
    
    })();