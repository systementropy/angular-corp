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

    .controller('noticeCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper) {
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
                    $scope.memberInfoNull="Portfolio number not found.";
                }
            }, function(response) {
                console.log('Error'+response);
            });
        };
        $scope.UNPAIDINTEREST = function(){
            delete $scope.memberInfoUI; delete $scope.memberInfoUINull;
            $http.get('/script/getInterest_new.json')
            .then(function(response) {

                for(var i=0; i<response.data.length; i++){
                    if (response.data[i].Folio_Number==$scope.inputData.nw18iepfUI) {
                        $scope.memberInfoUI = response.data[i];
                        break;
                    }
                }
                if (!$scope.memberInfoUI) {
                    $scope.memberInfoUINull="Portfolio number not found.";
                }
            }, function(response) {
                console.log('Error'+response);
            });
        };
        $scope.UNPAIDAMOUNT = function(){
            delete $scope.memberInfoUA; delete $scope.memberInfoUANull;
            $http.get('/script/getAmount_new.json')
            .then(function(response) {

                for(var i=0; i<response.data.length; i++){
                    if (response.data[i].Folio_Number==$scope.inputData.nw18iepfUA) {
                        $scope.memberInfoUA = response.data[i];
                        break;
                    }
                }
                if (!$scope.memberInfoUA) {
                    $scope.memberInfoUANull="Portfolio number not found.";
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
                    $scope.memberInfoUFNull="Portfolio number not found.";
                }
            }, function(response) {
                console.log('Error'+response);
            });
        };
        var init = function(){
            $scope.inputData={};
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
        };
        init();
    }]);
}());
