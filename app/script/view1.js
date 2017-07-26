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
            console.log(num);
            $scope.left_foc=num;
        };
        var init = function(){
            $scope.left_foc=0;
            $rootScope.hideHeader=false;
        };
        init();
    }]);
}());
