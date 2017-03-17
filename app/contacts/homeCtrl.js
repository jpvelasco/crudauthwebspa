'use strict';
var homeCtrl = (function () {
    function homeCtrl(adalService, $location) {
        this.adalService = adalService;
        this.$location = $location;
    }
    /**
     * login
     */
    homeCtrl.prototype.login = function () {
        this.adalService.login();
    };
    /**
     * logOut
     */
    homeCtrl.prototype.logOut = function () {
        this.adalService.logOut();
    };
    /**
     * isActive
     */
    homeCtrl.prototype.isActive = function (viewLocation) {
        return viewLocation === this.$location.path();
    };
    homeCtrl.$inject = ['adalAuthenticationService', '$location'];
    return homeCtrl;
}());
angular.module('contactApp')
    .controller('homeCtrl', homeCtrl);
