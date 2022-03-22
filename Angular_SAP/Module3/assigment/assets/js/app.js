(function () {
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .constant('MenuAPI',"https://davids-restaurant.herokuapp.com/menu_items.json")
    .directive('foundItems', foundItems);

    NarrowItDownController.$inject = ['$scope','MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowit = this;
        $scope.searchItem = "";
        narrowit.getMatchedMenuItems = MenuSearchService.getMatchedMenuItems(searchItem);
    }

    function MenuSearchService(searchItem){
        var search = this;
        search.getMatchedMenuItems = function (searchItem) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then (function (result){
                menu_items = result.data;
                var found = {};
                for (i=0; i<menu_items.lenght;i++){
                    var lookingup = menu_items.description[i].toLowerCase()
                    if (lookingup.indexOf(searchItem)!=(-1)){
                        var item = menu_items[i];
                        found.push(item);
                        }
                }
                return found;
            });
        }
    }

    function foundItems(found){
        var ddo = {
            templateUrl: 'foundITems.html',
            scope: {
                founditems: '<',
                onremove: '<'
            },
            controller: NarrowItDownController,
            controllerAs: narrowit,
            bindToController: true
        };
        return ddo;
    }

}) ();