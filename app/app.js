'use strict';
angular.module('contactApp', ['ngRoute', 'AdalAngular'])
    .config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider',
    function ($routeProvider, $httpProvider, adalProvider) {
        $routeProvider.when("/Home", {
            controller: "/app/contacts/homeCtrl",
            templateUrl: "/app/contacts/home.html",
        }).otherwise({ redirectTo: "/Home" });
        var endpoints = {
            // TODO: Map the location of a request to an API to the identifier of the associated resource
             "https://YourAzureADTenant.onmicrosoft.com/": "{YourTenantId}",
        };
        adalProvider.init({
            instance: 'https://login.microsoftonline.com/',
            tenant: 'YourAzureADTenant.onmicrosoft.com',
            clientId: 'YourApplicationClientId',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints,
        }, $httpProvider);
    }
]);
