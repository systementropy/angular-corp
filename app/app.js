(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'duParallax',
        'ngAnimate',
        'ui.bootstrap',
        'ngRoute',
        'ui.event',
        'slick',
        'ngMap',
        'myApp.home',
        'myApp.animate',
        'myApp.view2',
        'myApp.investors',
        'myApp.corporate',
        'myApp.career',
        'myApp.corporate-main',
        'myApp.portfolio-main',
        'myApp.headerCtrl',
        'myApp.careerMain',
        'myApp.test',
        'myApp.contact',
        'angularLazyImg',
        'angular-nicescroll',
        'ngFileUpload'
    ]).
    config(['$locationProvider', '$routeProvider','lazyImgConfigProvider', function($locationProvider, $routeProvider,lazyImgConfigProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode({
            enabled:true
        });
        //console.log(lazyImgConfigProvider);
        lazyImgConfigProvider.setOptions({
            offset:800
        });
        $routeProvider.otherwise({ redirectTo: '/animate' });

        //var scrollable = document.querySelector('#scrollable');
        // lazyImgConfigProvider.setOptions({
        //     offset: 1000,
        // });
    }]);
}());
