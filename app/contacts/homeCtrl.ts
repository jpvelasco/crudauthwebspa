'use strict';

class homeCtrl {

    static $inject = [ 'adalAuthenticationService', '$location'];

    constructor(private adalService: adal.AdalAuthenticationService, private $location: ng.ILocationService) { }

    /**
     * login
     */
    public login() {
        this.adalService.login();
    }

    /**
     * logOut
     */
    public logOut() {
        this.adalService.logOut();
    }

    /**
     * isActive
     */
    public isActive(viewLocation) {
        return viewLocation === this.$location.path();
    }
}

angular.module('contactApp')
    .controller('homeCtrl', homeCtrl)