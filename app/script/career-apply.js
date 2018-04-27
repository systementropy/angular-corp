(function() {
    'use strict';

    angular.module('myApp.careerApply', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-apply', {
                templateUrl: '/view/career-apply.html',
                controller: 'careerApplyCtrl'
            });
        }
    ])

    .controller('careerApplyCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());