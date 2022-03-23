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
        narrowit.items = '';
        narrowit.getMMenuItems = function(searchItem){
            var promise = MenuSearchService.getMatchedMenuItems(searchItem);

            promise.then (function (founds){
                if(founds.lenght!=0){
                    narrowit.items = founds;
                    console.log(narrowit.items);
                } else {
                    narrowit.items = '';
                }
            });
        };        
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var search = this;
        search.getMatchedMenuItems = function (searchItem) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then (function (result){
                //var menu_items = result.data['menu_items'];
                var found = [];
                console.log(result.data['menu_items']);
                console.log(result.data['menu_items'].length);
                for (var i = 0; i < result.data['menu_items'].length; i++){
                    if (result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchItem)!=(-1)){
                        var item = result.data['menu_items'][i];
                        console.log(item);
                        found.push(item);
                        }
                }
                console.log(found);
                return found;
            });
        };
    }

    function FoundItems(){
        var ddo = {
            //restrict: 'E',
            templateUrl: './assets/pages/foundITems1.html',
            scope: {
                items: '<'
                //onremove: '<'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowit',
            bindToController: true
        };
        console.log(result);
        return ddo;
    }


}) ();