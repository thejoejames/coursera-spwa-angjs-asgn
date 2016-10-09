(function() {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function(){
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                return result.data;                
            });
            return response;
        };

        service.getItemsForCategory = function(categoryShortName){
            console.info('getting items for category', categoryShortName);
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
            }).then(function (result) {
                return result.data.menu_items;                
            });
            return response;
        };
    }

})();