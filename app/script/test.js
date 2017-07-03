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

    .controller('TestCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
