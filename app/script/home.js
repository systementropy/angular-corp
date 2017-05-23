(function() {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
            
        }
    ])

    .controller('HomeCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.init = function(){
            $rootScope.hideHeader=true;
        };
        
        $scope.init();

        $scope.slickConfig = {
            enabled: true,
            centerMode: true,
            slidesToShow: 1,
            dots: true,
            autoPlay:true,
            autoPlaySpeed:3000,
            
        };
    }]);
}());
