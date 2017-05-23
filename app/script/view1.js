(function() {
    'use strict';

    angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: '/view/view1.html',
                controller: 'View1Ctrl'
            });
        }
    ])

    .controller('View1Ctrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $rootScope.hideHeader=false;
    }]);
}());
