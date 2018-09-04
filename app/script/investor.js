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
            $scope.breakpoints = [{breakpoint: 1080,settings: {slidesToShow: 8,slidesToScroll: 8}},{breakpoint: 992,settings: {slidesToShow: 7,slidesToScroll: 7}},{breakpoint: 768,settings: {slidesToShow: 6,slidesToScroll: 6}},{breakpoint: 600,settings: {slidesToShow: 4,slidesToScroll: 4}}, {breakpoint: 480,settings: {slidesToShow: 3,slidesToScroll: 3}}];
            
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
       $scope.theBestVideo0 = 'JJmFwbwRb2U';
       var w = angular.element($window);
	    	var wWid=w.width();
	    	var wHig=(w.height()/0.71);
	    	$scope.pWid=parseInt(w.width());
	    	$scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
	    	

	    	$scope.playerVars = {
	    	    'autoplay': 1,
	    	    'controls': 0, 
	    	    'rel' : 0,
	    	    'showinfo':0,
	    	    'fs' : 0,
	    	    'loop': 1,
	    	    'mute':1
	    	};
$scope.$on('youtube.player.ended', function ($event, bestPlayer0) {
                
                bestPlayer0.seekTo(0);
                bestPlayer0.playVideo();
            });
$scope.enableYT=true;
        };
        init();
    }]);
}());
