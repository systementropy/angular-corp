(function() {
    'use strict';

    angular.module('myApp.portfolio-main', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/portfolio-main', {
                templateUrl: '/view/portfolio-main.html',
                controller: 'PortfolioMainCtrl'
            });
        }
    ])

    .controller('PortfolioMainCtrl', ['$scope', '$http', function($scope, $http) {

    }]);
}());
