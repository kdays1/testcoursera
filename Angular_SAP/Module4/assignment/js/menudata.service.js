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
<<<<<<< HEAD
            });
=======
            }).then (function (result){
                var categ = result.data;
                console.log(categ);
>>>>>>> 87af13a1914bc8bc2b91946774b3dad12d40f365
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