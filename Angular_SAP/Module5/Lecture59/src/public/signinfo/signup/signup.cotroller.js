(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('SignInfoService',SignInfoService);

    SignUpController.$inject = ['SignInfoService'];
    function SignUpController(SignInfoService) {
        var ctrl = this;
        ctrl.user = {};
        var errorocurred = false;
        //var cat = $scope.user.menu;
        console.log(ctrl.user);
        ctrl.submit = function(){
            var promise = SignInfoService.signUpMenu(ctrl.user.menu);
            promise.then(function(signupcategory){
                if (signupcategory!=undefined){
                    ctrl.user.result = signupcategory;
                    console.log(ctrl.user.result);
                    var errorocurred = false;
                }else {
                    var errorocurred = true;
                }});
    }
}
    
    SignInfoService.$inject = ['$http', 'ThePath'];
    function SignInfoService($http, ThePath) {
    var service = this;
    service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items/' + cat +'.json').then(function (response) {
            var selected = response.data;
            console.log(response.data);
            console.log(selected);
            return selected;
        }, function(error){
            var selected = undefined;
            return selected;
        });
    };    
    }
    
    })();