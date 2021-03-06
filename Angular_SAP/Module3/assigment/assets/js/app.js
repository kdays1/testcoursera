(function () {
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems(){
        var ddo = {
            //restrict: 'E',
            templateUrl: 'assets/pages/foundITems1.html',
            scope: {
                found: '<',
                onremove: '&',
                wasfound: '<',
                wasnotfound: '<'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowit',
            bindToController: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowit = this;
        narrowit.searchItem ='';
        narrowit.wasfound = false;
        narrowit.wasnotfound = false;
        //narrowit.result = [];
        narrowit.getMMenuItems = function(searchItem){

            var promise = MenuSearchService.getMatchedMenuItems(searchItem);

            promise.then (function (founds){
                if(founds.length!=0){
                    narrowit.result = founds;
                    console.log(narrowit.result);
                    narrowit.wasfound = true;
                    narrowit.wasnotfound = false;
                } else if (founds.length===0) {
                    narrowit.result = '';
                    narrowit.wasnotfound = true;
                    narrowit.wasfound = false;
                }
            });
            narrowit.onremove = function (itemIndex) {
                narrowit.result.splice(itemIndex,1);
            }
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var search = this;
        search.getMatchedMenuItems = function (searchItem) {
//----------->
          console.log(searchItem.toLowerCase());
//<----------
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then (function (result){
                var found = [];
                console.log(result.data['menu_items']);
                console.log(result.data['menu_items'].length);
                for (var i = 0; i < result.data['menu_items'].length; i++){
//----------->
                    // if (result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchItem)!=(-1)){
                    if (result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchItem.toLowerCase())!=(-1)){
//<----------
                        var item = result.data['menu_items'][i];
                        console.log(item);
                        found.push(item);
                        }
                }
                console.log("found:",found);
                return found;
            });
        };
    }



}) ();
