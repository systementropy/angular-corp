(function() {
	'use strict';

	angular.module('myApp.notice', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/notice', {
				templateUrl: '/view/notice.html',
				controller: 'noticeCtrl'
			});
		}
	])

	.controller('noticeCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {

		$scope.changeNW18FocusToSection = function(num){
			$scope.nw18_current_focus_section=num;
		};

		$scope.changeTV18FocusToSection = function(num){
			$scope.tv18_current_focus_section=num;
		};

		$scope.checkIEPF = function(){
			delete $scope.memberInfo; delete $scope.memberInfoNull;
			$http.get('/script/ril_shares_json.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].folio_number==$scope.inputData.nw18iepf) {
						$scope.memberInfo = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfo) {
					$scope.memberInfoNull="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.checkUAI1 = function(){
			delete $scope.memberInfoUAI1; delete $scope.memberInfoUAI1Null;
			$http.get('/script/json/nw18/MaturedDeposits080819.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18UAI1 || response.data[i]['DP_Id-Client_Id-Account_Number']==$scope.inputData.nw18UAI1 ) {
						$scope.memberInfoUAI1 = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUAI1) {
					$scope.memberInfoUAI1Null="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.checkUAI2 = function(){
			delete $scope.memberInfoUAI2; delete $scope.memberInfoUAI2Null;
			$http.get('/script/json/nw18/InterestonMaturedDeposits080819.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18UAI2 || response.data[i]['DP_Id-Client_Id-Account_Number']==$scope.inputData.nw18UAI2 ) {
						$scope.memberInfoUAI2 = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUAI2) {
					$scope.memberInfoUAI2Null="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.checkUAI3 = function(){
			delete $scope.memberInfoUAI3; delete $scope.memberInfoUAI3Null;
			$http.get('/script/json/nw18/4711297735-080819.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18UAI3 || response.data[i]['DP_Id-Client_Id-Account_Number']==$scope.inputData.nw18UAI3 ) {
						$scope.memberInfoUAI3 = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUAI3) {
					$scope.memberInfoUAI3Null="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.checkUAI4 = function(){
			delete $scope.memberInfoUAI4; delete $scope.memberInfoUAI4Null;
			$http.get('/script/json/nw18/Saleproceedsoffractionalshares-AcNo_8411289168.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18UAI4 || response.data[i]['DP_Id-Client_Id-Account_Number']==$scope.inputData.nw18UAI4 ) {
						$scope.memberInfoUAI4 = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUAI4) {
					$scope.memberInfoUAI4Null="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.checkUAI5 = function(){
			delete $scope.memberInfoUAI5; delete $scope.memberInfoUAI5Null;
			$http.get('/script/json/nw18/debentures_n18_new.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18UAI5 || response.data[i]['DP_Id-Client_Id-Account_Number']==$scope.inputData.nw18UAI5 ) {
						$scope.memberInfoUAI5 = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUAI5) {
					$scope.memberInfoUAI5Null="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.UNPAIDINTEREST = function(){
			delete $scope.memberInfoUI; delete $scope.memberInfoUINull;
			$http.get('/script/json/tv18/InterestonMaturedDeposits080819.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.tv18iepfUI) {
						$scope.memberInfoUI = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUI) {
					$scope.memberInfoUINull="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.UNPAIDAMOUNT = function(){
			delete $scope.memberInfoUA; delete $scope.memberInfoUANull;
			$http.get('/script/json/tv18/AmountforMaturedDeposits080819.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.tv18iepfUA) {
						$scope.memberInfoUA = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUA) {
					$scope.memberInfoUANull="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		$scope.UNPAIDFRACTION = function(){
			delete $scope.memberInfoUF; delete $scope.memberInfoUFNull;
			$http.get('/script/getFraction-new.json')
			.then(function(response) {

				for(var i=0; i<response.data.length; i++){
					if (response.data[i].Folio_Number==$scope.inputData.nw18iepfUF) {
						$scope.memberInfoUF = response.data[i];
						break;
					}
				}
				if (!$scope.memberInfoUF) {
					$scope.memberInfoUFNull="The DP ID/Client ID/ Folio Number entered by you is not in the list of unclaimed amounts.";
				}
			}, function(response) {
				console.log('Error'+response);
			});
		};
		var init = function(){
			$scope.inputData={};
			$scope.nw18_current_focus_section='dividend_unclaimed_shares_dividend';
			$scope.tv18_current_focus_section='unclaimed_amount_of_investors';

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
