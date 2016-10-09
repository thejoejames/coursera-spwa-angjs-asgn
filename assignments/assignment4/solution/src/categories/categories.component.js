(function(){
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/categories/categories.template.html',
        controller: CategoriesComponentController,
        controllerAs: 'ctrl',
        bindings: {
            categorylist: '<'
        }        
    });
    
    CategoriesComponentController.$inject = ['$rootScope']
    function CategoriesComponentController($rootScope){
        var ctrl = this;
    }

})();