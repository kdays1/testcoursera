(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['$scope','SignInfoService'];
    function SignUpController($scope) {
        var ctrl = this;
        $scope.user = {};
        $scope.result = {};
        var cat = $scope.user.menu;
        console.log($scope.user);
        console.log(cat);
        ctrl.submit = function(cat){
            var promise = SignInfoService.signUpMenu(cat);
            promise.then(function(signupcategory){
                if (signupcategory!=0){
                    $scope.result = signupcategory;
                    console.log($scope.result);
                }else {
                    $scope.result = "Please enter a valid menu item HINT:Short Name"
                }
            });
        }
    }
    
    })();