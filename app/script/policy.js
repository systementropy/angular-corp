(function() {
    'use strict';

    angular.module('myApp.policy', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/policy', {
                templateUrl: '/view/policy.html',
                controller: 'policyCtrl'
            });
        }
    ])

    .controller('policyCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
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
            $scope.transY = parallaxHelper.createAnimator(0.4, 10, -10,-950);
            
       $window.document.title='NETWORK18 | Investor Relations';$scope.theBestVideo0 = 'JJmFwbwRb2U';
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
