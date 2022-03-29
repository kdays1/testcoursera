(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService',MenuDataService)

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var service = this;
        service.getAllCatergories = function(){
            var categ = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });
                return categ;
        };
        service.getItemsForCategory = function(categoryShortName){
            var catsn = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
                params: {
                    short_name : categoryShortName
                }
            });
            return catsn;
        }
    }

}) ();