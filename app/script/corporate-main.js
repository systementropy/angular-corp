(function() {
    'use strict';

    angular.module('myApp.corporate-main', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/corporate-main', {
                templateUrl: '/view/corporate-main.html',
                controller: 'CorporateMainCtrl'
            });
        }
    ])

    .controller('CorporateMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {

        $scope.init = function(){
            
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
