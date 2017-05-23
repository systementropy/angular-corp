(function() {
    'use strict';

    angular.module('myApp.animate', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/animate', {
                templateUrl: '/view/animate.html',
                controller: 'animateCtrl'
            });
            $routeProvider.when('/', {
                templateUrl: '/view/animate.html',
                controller: 'animateCtrl'
            });
        }
    ])

    .controller('animateCtrl', ['$scope', '$http','$timeout','$location', function($scope, $http,$timeout,$location) {
        $scope.hideHeader=true;
        console.log('1');
        $timeout(function() {
            console.log('2');
            $scope.$apply(function() { $location.path("/home"); });
        }, 13000);
    }]);
}());