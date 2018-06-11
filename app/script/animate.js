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

    .controller('animateCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','$window', function($rootScope,$scope, $http,$timeout,$location,$window) {
        


        $scope.init = function(){
            // $rootScope.hideHeader=true;
            var w = angular.element($window);
            var wWid=w.width();
            var wHig=w.height();
            if (wWid<1000) {
                $scope.hideHeader=false;
            }else{
                $rootScope.hideHeader=true;
            }
            $rootScope.hidefooter=true;
            $timeout(function() {
                $scope.$apply(function() { $location.path("/home"); });
                
            }, 7000);
        };
        
        $scope.init();

        
    }]);
}());