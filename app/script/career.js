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

    .controller('CareerCtrl', ['$scope', '$http', function($scope, $http) {

    }]);
}());
