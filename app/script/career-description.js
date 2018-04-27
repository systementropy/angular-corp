(function() {
    'use strict';

    angular.module('myApp.careerDescription', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-description', {
                templateUrl: '/view/career-description.html',
                controller: 'jobDescCtrl'
            });
        }
    ])

    .controller('jobDescCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
