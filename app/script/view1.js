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

    .controller('InvestorCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','$window', function($rootScope,$scope, $http,$timeout,$location,$window) {
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
        $scope.changeFocTV0 = function(num){
            $scope.left_foctv0=num;
        };
        $scope.changeFocTV1 = function(num){
            $scope.left_foctv1=num;
        };
        $scope.changeFocTV2 = function(num){
            $scope.left_foctv2=num;
        };
        $scope.changeFocTV3 = function(num){
            $scope.left_foctv3=num;
        };
        var init = function(){
            $scope.left_foc=0;
            $scope.left_foc1=0;
            $scope.left_foc3=0;
            $scope.left_foc2=0;
            $scope.left_foctv0=0;
            $scope.left_foctv1=0;
            $scope.left_foctv2=0;
            $scope.left_foctv3=0;
            $rootScope.hideHeader=false;
            $scope.activeSec={};
            $scope.activeSec.nw18Section=true;
            $rootScope.hidefooter=false;
            $window.document.title='NETWORK18 | Investor Relations';
        };
        init();
    }]);
}());
