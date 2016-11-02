(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);


    //SignupService.$inject = [];

    function SignupService() {
        var service = this;
        service.user;

        service.getUserInfo = function () {
            return service.user;
        }

        service.saveUserInfo = function (user) {
            service.user = user;
        };
    }


})();
