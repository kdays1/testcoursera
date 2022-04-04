(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('SignInfoService',SignInfoService);

    SignUpController.$inject = ['SignInfoService'];
    function SignUpController(SignInfoService) {
        var $ctrl = this;
        $ctrl.user = {};
        //var cat = $scope.user.menu;
        console.log($ctrl.user);
        $ctrl.submit = function(cat){
            var promise = SignInfoService.signUpMenu($ctrl.user.menu);
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
    
    SignInfoService.$inject = ['$http', 'ThePath','cat'];
    function SignInfoService($http, ThePath, cat) {
    var service = this;
    service.signUpMenu = function (cat) {
        return $http.get(ThePath + '/menu_items.json').then(function (response) {
            var selected = response.data['menu_items']
            console.log(response.data['menu_items'])
            console.log(selected);
            for(i=0;i<selected.length();i++){
            if (selected.short_name==cat){
                var x=i;
            }
            }
            if(x){
            selection = selected[i];
            }else{
            selection = null;
            }
            return selection;
        });
    };    
    }
    
    })();