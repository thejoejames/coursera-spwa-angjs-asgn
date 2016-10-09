(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController)
        .controller('MenuAppItemController', MenuAppItemController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var ctrl = this;
        ctrl.catList = [];
        ctrl.itemList = [];

        

        if (ctrl.catList.length === 0) {
            var promise = MenuDataService.getAllCategories();

            promise.then(function (response) {
                ctrl.catList = response;
                console.log('******** GOT CATEGORY DATA *********');
                console.log(ctrl.catList);
            })
            .catch(function (error) {
                console.log('******** ERROR ERROR ERROR!! ********');
                console.log(error);
            });
        }
    }

    MenuAppItemController.$inject = ['itemList'];
    function MenuAppItemController(itemList){
        var itemCtrl = this;
        itemCtrl.itemList = itemList;
        console.log('******** SET ITEM DATA *********', itemCtrl.itemList);
    } 
})();