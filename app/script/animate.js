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

    .controller('animateCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        


        $scope.init = function(){
            $rootScope.hideHeader=true;
        };
        
        $scope.init();

        $timeout(function() {
            $scope.$apply(function() { $location.path("/home"); });
            
        }, 10000);
    }]);
}());