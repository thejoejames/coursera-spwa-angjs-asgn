(function () {
    "use strict";

    angular.module('public').controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'SignupService'];

    function SignupController(MenuService, SignupService) {
        var $ctrl = this;
        $ctrl.menuService = MenuService;
        $ctrl.signupService = SignupService;
        $ctrl.user = {};
        $ctrl.completed = false;
        $ctrl.error = false;

        $ctrl.submit = function () {


            $ctrl.menuService.getMenuItemByShortName($ctrl.user.dishNum).
            then(function (response) {
                $ctrl.completed = true;
                $ctrl.error = false;
                console.log('SUCCESS ' + response.data);
                $ctrl.user.data = response.data;
                $ctrl.user.img = $ctrl.menuService.getImageUrl($ctrl.user.dishNum);
                $ctrl.signupService.saveUserInfo($ctrl.user);

                for (var prop in $ctrl.user) {
                    console.log('user ' + prop + ' is ' + $ctrl.user[prop]);
                }
            }).
            catch(function (error) {
                $ctrl.completed = false;
                $ctrl.error = true;
                console.log('ERROR ');
                $ctrl.user.data = undefined;
                $ctrl.signupService.saveUserInfo(undefined);
            });


        };
    }
})();
