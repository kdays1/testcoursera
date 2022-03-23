(function () {
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowit = this;
        narrowit.searchItem ='';
        narrowit.getMMenuItems = function(searchItem){
            var promise = MenuSearchService.getMatchedMenuItems(searchItem);

            promise.then (function (result){
                if(result.lenght!=0){
                    narrowit.result = result;
                } else {
                    narrowit.result = 'Nothing was found';
            });
        }        
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var search = this;
        search.getMatchedMenuItems = function (searchItem) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then (function (result){
                menu_items = result.data;
                var found = {};
                for (i=0; i<menu_items.lenght;i++){
                    var lookingup = menu_items['description'][i].toLowerCase()
                    if (lookingup.indexOf(searchItem)!=(-1)){
                        var item = menu_items[i];
                        found.push(item);
                        }
                }
                return found;
            });
        }
    }

    function FoundItems(){
        var ddo = {
            templateUrl: './foundITems1.html',
            scope: {
                result: '<',
                //onremove: '<'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowit',
            bindToController: true
        };
        return ddo;
    }


}) ();
