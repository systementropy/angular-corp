(function() {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
        }
    ])

    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.hideHeader=true;
        var initialize = function() {

        };
        initialize();
    }]);
}());
