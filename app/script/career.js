(function() {
    'use strict';

    angular.module('myApp.career', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career', {
                templateUrl: '/view/career.html',
                controller: 'CareerCtrl'
            });
        }
    ])

    .controller('CareerCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $rootScope.hideHeader=false;
    }]);
}());
