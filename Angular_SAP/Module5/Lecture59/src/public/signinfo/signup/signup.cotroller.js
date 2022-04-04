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
        //var cat = $scope.user.menu;
        console.log(ctrl.user);
        ctrl.submit = function(){
            var promise = SignInfoService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                    ctrl.user.result = signupcategory.data;
                    console.log(ctrl.user.result);
                    ctrl.errorocurred = false;
                },function(error) {
                    ctrl.errorocurred = true;
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