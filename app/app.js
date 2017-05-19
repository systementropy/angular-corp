(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ui.bootstrap',
        'ngRoute',
        'slick',
        'myApp.home',
        'myApp.animate',
        'myApp.view2',
        'myApp.view1',
        'myApp.corporate',
        'myApp.career',
        'myApp.corporate-main',
        'myApp.portfolio-main',
        'myApp.headerCtrl'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode({
            enabled:true
        });
        
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
}());
