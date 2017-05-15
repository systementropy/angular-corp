(function() {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
        }
    ])

    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

        var initialize = function() {

        };
        initialize();
    }]);
}());
