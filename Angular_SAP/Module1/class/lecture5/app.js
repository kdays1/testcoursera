(function () {
    'use strict';
    
    angular.module('NameCalculator', [])
    .controller('NameCalculatorController',function($scope){
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        }

        function calculateNumericForString (string){
            var totalStringValue = 0;
            for (var i = 0; i < string.lenght; i++){
                totalStringValue += string.charCodeAt(i);
            }
        }
    });

    })();