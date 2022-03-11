(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lista = " ";
        $scope.howmuch = "Hello!";

        $scope.checkIt = function (){
            var food = $scope.lista.split(',');
            var counter = 0;
            for (var i=0; i<food.length; i++){
                if(food[i]!=" "){
                    counter = counter + 1;
                }
            }
            console.log(counter);
            if (counter==0){
                $scope.howmuch = "Please enter data first!";
            }else if (counter<=3) {
                $scope.howmuch = "Enjoy!";
            } else {
                $scope.howmuch = "Too much, maybe?";
            }
        };
    }

    })();