(function() {
    'use strict';

    angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/portfolio', {
            templateUrl: '/view/portfolio.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', '$window', function($rootScope,$scope, $http,$timeout,$location,$window) {
        
        $scope.init = function(){
            $rootScope.hideHeader=false;

            if ($(window).width()<1000) {
                $rootScope.hidefooter=false;    
            }else {
                $rootScope.hidefooter=true;
            }
        };
        
        $scope.init();
    }]);
}());
