(function () {
    "use strict";
    
    angular.module('public')
    .component('signupcomponent', {
        templateUrl: 'src/public/signinfo/signup/signup.html',
        controller: SignUpController
    });
    
    SignUpController.$inject = ['$scope','SignInfoService'];
    function SignUpController($scope,SignInfoService) {
        var $ctrl = this;
        $scope.user = {};
        $scope.result = {};
        //var cat = $scope.user.menu;
        console.log($scope.user);
        $ctrl.submit = function(cat){
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