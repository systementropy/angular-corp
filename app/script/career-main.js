(function() {
    'use strict';

    angular.module('myApp.careerMain', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-main', {
                templateUrl: '/view/career-main.html',
                controller: 'CareerCtrl'
            });
        }
    ])

    .controller('CareerMainCtrl', ['$scope', '$http', function($scope, $http) {

    }]);
}());
