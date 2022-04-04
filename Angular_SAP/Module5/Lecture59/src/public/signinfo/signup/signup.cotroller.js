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
        var usuario={};
        usuario.name = ctrl.user.fname;
        usuario.lname = ctrl.user.lname;
        usuario.email = ctrl.user.email;
        usuario.phone = ctrl.user.phone;
        usuario.menu = ctrl.user.menu;
        //var cat = $scope.user.menu;
        console.log(ctrl.user);
        ctrl.submit = function(){
            var promise = SignInfoService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                    ctrl.user.result = signupcategory.data;
                    usuario.result = ctrl.user.result;
                    console.log(ctrl.user.result);
                    ctrl.errorocurred = false;
                    ctrl.initialize = false;
                },function(error) {
                    ctrl.user.result = "";
                    ctrl.errorocurred = true;
                    ctrl.initialize = true;
                    console.log(error);
                });
    }
}
    
    SignInfoService.$inject = ['$http', 'ThePath'];
    function SignInfoService($http, ThePath) {
    var service = this;
    service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items/' + cat +'.json');
    };   
    }
    
    })();