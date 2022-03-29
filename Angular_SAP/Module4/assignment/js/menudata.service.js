(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    .constant('Page',"https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var service = this;
        service.getAllCatergories = function(){
            var categ = $http({
                method: "GET",
                url: (Page + "/categories.json")
            });
                return categ;
        };
        service.getItemsForCategory = function(categoryShortName){
            var catsn = $http({
                method: "GET",
                url: (Page + "/menu_items.json"),
                params: {
                    short_name : categoryShortName
                }
            });
            return catsn;
        }
    }

}) ();