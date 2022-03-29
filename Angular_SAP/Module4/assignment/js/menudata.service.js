(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService',MenuDataService)

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var service = this;
        service.getAllCatergories = function(){
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then (function (result){
                var categ = result.data;
                console.log(categ);
                return categ;
            })
        }
        service.getItemsForCategory = function(categoryShortName){
            return catsn = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)  
            }).then (function(result){
                var catsn = result['menu_items'].data;
                console.log(catsn);
                return catsn;
            })
        };
    }

}) ();