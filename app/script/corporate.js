(function() {
    'use strict';

    angular.module('myApp.corporate', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/corporate', {
                templateUrl: '/view/corporate.html',
                controller: 'CorporateCtrl'
            });
        }
    ])

    .controller('CorporateCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.init = function(){
            $window.document.title='NETWORK18 | About Us';
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
