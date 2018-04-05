(function() {
    'use strict';

    angular.module('myApp.investors', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/investors', {
                templateUrl: '/view/investor.html',
                controller: 'InvestorCtrl'
            });
        }
    ])

    .controller('InvestorCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.changeFoc = function(num){
            $scope.left_foc=num;
        };
        $scope.changeFoc1 = function(num){
            $scope.left_foc1=num;
        };
        $scope.changeFoc3 = function(num){
            $scope.left_foc3=num;
        };
        $scope.changeFoc2 = function(num){
            $scope.left_foc2=num;
        };
        var init = function(){
            $scope.left_foc=0;
            $scope.left_foc1=0;
            $scope.left_foc3=0;
            $scope.left_foc2=0;
            $rootScope.hideHeader=false;
        };
        init();
    }]);
}());
