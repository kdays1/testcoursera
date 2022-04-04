(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('SignInfoService',SignInfoService);

    SignUpController.$inject = ['SignInfoService'];
    function SignUpController(SignInfoService) {
        var ctrl = this;
        ctrl.user = {};
        ctrl.usuario = {};
        ctrl.errorocurred = false;
        ctrl.initialize = true;
        ctrl.submit = function(){
            var promise = SignInfoService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                    ctrl.user.result = signupcategory.data;
                    SignInfoService.keepUser(ctrl.user);
                    console.log(ctrl.user.result);
                    ctrl.errorocurred = false;
                    ctrl.initialize = false;
                },function(error) {
                    ctrl.user.result = "";
                    SignInfoService.keepUser(ctrl.user);
                    ctrl.errorocurred = true;
                    ctrl.initialize = true;
                    console.log(error);
                });
            if (ctrl.user.result!=""){
                ctrl.usuario = SignInfoService.showUser();
                console.log(ctrl.usuario);
            }
    }
}
    
    SignInfoService.$inject = ['$http', 'ThePath'];
    function SignInfoService($http, ThePath) {
    var service = this;
    var usuario = {};
    service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items/' + cat +'.json');
    };
    
    service.keepUser = function (usr) {
        angular.copy(usr,[usuario]);
    }

    service.showUser = function (){
        return usuario;
    }
    }
    
    })();