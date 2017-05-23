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

    .controller('CareerMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.$apply(function() { $rootScope.hideHeader=false;});
    }]);
}());
