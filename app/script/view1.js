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
        var init = function(){
            $rootScope.hideHeader=false;
        };
        init();
    }]);
}());
