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

    .controller('CareerMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
