(function() {
    'use strict';

    angular.module('myApp.test', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/test', {
                templateUrl: '/view/parallax.html',
                controller: 'TestCtrl'
            });
        }
    ])

    .controller('TestCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', 'parallaxHelper', function($rootScope,$scope, $http,$timeout,$location, parallaxHelper) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $scope.background = parallaxHelper.createAnimator(-0.5, 0, 100);
            $scope.foreground = parallaxHelper.createAnimator(0.7, 3000, -1500);
        };
        
        $scope.init();
    }]);
}());
