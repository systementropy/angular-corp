(function() {
    'use strict';

    angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/portfolio', {
            templateUrl: '/view/portfolio.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        
        $scope.init = function(){
            $window.document.title='NETWORK18 | Portfolio';
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
