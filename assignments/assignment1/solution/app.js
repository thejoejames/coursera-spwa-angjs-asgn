(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {
        $scope.lunchMessage = "";
        $scope.lunchItems;
        $scope.checkItems = function () {
            console.info($scope.lunchItems);
            var numItems = 0;
            if ($scope.lunchItems != null && $scope.lunchItems != undefined) {
                var cleanedItems = $scope.lunchItems.trim();
                if (cleanedItems.length > 0) {
                    numItems = cleanedItems.split(",").length;
                }
            }

            if (numItems <= 0) {
                $scope.lunchMessage = "Please enter data first";
                $scope.lunchItems = undefined;
            } else if (numItems <= 3) {
                $scope.lunchMessage = "Enjoy!"
            } else {
                $scope.lunchMessage = "Too much!"
            }
        }
    }
})();
