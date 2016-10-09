(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('MenuAppCatController', MenuAppCatController)
        .controller('MenuAppItemController', MenuAppItemController);

    MenuAppCatController.$inject = ['catList'];
    function MenuAppCatController(catList) {
        var ctrl = this;
        ctrl.catList = catList;
        console.log('******** SET CATEGORY DATA *********', ctrl.catList);        
    }

    MenuAppItemController.$inject = ['itemList'];
    function MenuAppItemController(itemList){
        var itemCtrl = this;
        itemCtrl.itemList = itemList;
        console.log('******** SET ITEM DATA *********', itemCtrl.itemList);
    } 
})();