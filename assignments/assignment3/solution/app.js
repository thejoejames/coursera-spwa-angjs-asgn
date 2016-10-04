(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', MenuListDirective);


    function MenuListDirective() {
        var ddo = {
            templateUrl: 'itemsloaderindicator.template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: MenuListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }


    function MenuListDirectiveController() {
        var list = this;


    }




    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;


        menu.logMenuItems = function (searchTerm) {
            console.log('Search term was [' + searchTerm + "]");

            if (searchTerm != undefined && searchTerm.trim().length > 0) {
                console.log('About to search menu items...');
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

                promise.then(function (response) {
                        menu.found = response.data;
                        console.log(menu.found);
                    })
                    .catch(function (error) {
                        console.log('******** ERROR ERROR ERROR!! ********');
                        console.log(error);
                    })
            }
        };

        menu.removeItem = function (itemIndex) {
            console.log("Removing  " + menu.found[itemIndex].name);
            menu.found.splice(itemIndex, 1);
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;


        service.getMatchedMenuItems = function (searchTerm) {

            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                var items = result.data.menu_items;

                var foundItems = {
                    data: []
                };

                var tot = items.length;
                console.log('got ' + tot + ' results...');
                for (var i = 0; i < tot; i++) {
                    var desc = items[i].description.toLowerCase();
                    if (desc.indexOf(searchTerm.toLowerCase()) != -1) {
                        foundItems.data.push(items[i]);
                    }
                }

                return foundItems;
            });


            return response;
        };

    }

})();
