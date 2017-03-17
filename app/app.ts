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
                tenant: 'YourAzureADTenant.onmicrosoft.com', // TODO: Update your tenant name
                clientId: '{YourApplicationClientId}', // TODO: Update with the indentifier for your SPA registration in Azure AD
                extraQueryParameter: 'nux=1',
                endpoints: endpoints,
                //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.  
                // Also, token acquisition for the To Go API will fail in IE when running on localhost, due to IE security restrictions.
            },
                $httpProvider
            );
        }
    ])