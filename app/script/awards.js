(function() {
    'use strict';

    angular.module('myApp.awards', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/awards', {
            templateUrl: '/view/awards.html',
            controller: 'awardsCtrl'
        });
        $routeProvider.when('/awards/:awardsId', {
            templateUrl: '/view/awards.html',
            controller: 'awardsCtrl'
        });
    }])

    .controller('awardsCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', '$route', '$routeParams',
        function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window,$route,$routeParams) {
        
            $scope.init = function(){
                $window.document.title='NETWORK18 | awards';

                $rootScope.hideHeader=false;
                var index=$routeParams.awardsId;

                if (index==1) {
                    $scope.showGal1=true;
                }else if (index==2) {
                    $scope.showGal2=true;
                }else if (index==3) {
                    $scope.showGal3=true;
                }else if (index==4) {
                    $scope.showGal4=true;
                }else if (index==5) {
                    $scope.showGal5=true;
                }else if (index==6) {
                    $scope.showGal6=true;
                }else if (index==7) {
                    $scope.showGal7=true;
                }else if (index==8) {
                    $scope.showGal8=true;
                }else if (index==9) {
                    $scope.showGal9=true;
                }
            };
            
            $scope.init();
    }]);
}());
