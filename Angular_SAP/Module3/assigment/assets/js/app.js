(function () {
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', foundItems);

    function foundItems(){
        var ddo = {
            templateUrl: 'foundITems.html',
            scope: {
                found: '<getMatchedMenuItems',
                //onremove: '<'
            },
            controller: NarrowItDownController,
            controllerAs: narrowit,
            bindToController: true
        };
        return ddo;
    }

    function foundITemsController(){
        var narrowit = this;

    }

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
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
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


}) ();