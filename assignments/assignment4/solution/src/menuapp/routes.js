(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                template: '<a ui-sref="categoryList">See Categories</a>'
            })

            // category list page
            .state('categoryList', {
                url: '/category-list',
                templateUrl: 'src/menuapp/routeTemplates/category-list.template.html',
                controller: 'MenuAppCatController as menuCtrl',
                resolve: {
                    catList: ['MenuDataService', 
                        function(MenuDataService){
                            return MenuDataService.getAllCategories()
                                .then(function (cats) {
                                    console.info('**** Categories found', cats);
                                    return cats;
                                });
                        }
                    ]
                }
            })

            .state('menuDetail', {
                url: '/item-list/{catId}',
                templateUrl: 'src/menuapp/routeTemplates/item-list.template.html',
                controller: 'MenuAppItemController as itemCtrl',
                resolve: {
                    itemList: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.catId)
                                .then(function (items) {
                                    console.info('**** Items found', items);
                                    return items;
                                });
                        }
                    ]
                }
            });
    }
})();