(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var ctrlBuy = this;
        ctrlBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        ctrlBuy.buyItem = ShoppingListCheckOffService.buyItem;
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrlBought = this;
        ctrlBought.items = ShoppingListCheckOffService.getItemsBought();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [{
                name: 'cookies',
                quantity: 10
            },
            {
                name: 'chips',
                quantity: 2
            },
            {
                name: 'ice cream sandwich',
                quantity: 2
            },
            {
                name: 'apples',
                quantity: 3
            },
            {
                name: 'bananas',
                quantity: 2
            }];
        var itemsBought = [];


        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.buyItem = function (itemIndex) {
            var removed = itemsToBuy.splice(itemIndex, 1);
            itemsBought.push(removed[0]);
        };


        service.getItemsBought = function () {
            return itemsBought;
        };
    }

})();
