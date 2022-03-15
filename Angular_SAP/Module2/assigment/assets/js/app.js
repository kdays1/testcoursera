(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShopListService',ShopListService);

    ToBuyController.$inject = ['ShopListService'];
    function ToBuyController(ShopListService) {
        var showme = this;
        showme.buyList = ShopListService.showbuyList();
        console.log(this.buyList);

        showme.buyItem = function(itemIndex){
            ShopListService.buyItem(itemIndex);
        }
        
    }

    AlreadyBoughtController.$inject = ['ShopListService'];
    function AlreadyBoughtController(ShopListService){
        var buying = this;
        buying.boughtList = ShopListService.showboughtList();
        console.log(this.boughtList);
    }

    function ShopListService(){
        var service = this;
        var boughtList = [];
        var buyList = [
            {name: "cookies", quantity: 5},
            {name: "shampoo", quantity: 1},
            {name: "bags of chips", quantity: 3},
            {name: "ramen soup", quantity: 1},
            {name: "bananas", quantity: 2}
        ];

        service.showbuyList =function (){
            return buyList;
            return buyList.length;
        }

        service.showboughtList = function(){
            return boughtList;
            return boughtList.length;
        }

        service.buyItem = function (itemIndex){
            var item = buyList[itemIndex]
            boughtList.push(item);
            buyList.splice(itemIndex,1);
        } 


    }

}
)();