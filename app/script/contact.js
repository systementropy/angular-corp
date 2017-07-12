(function() {
    'use strict';

    angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: '/view/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        
        $scope.init = function(){
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
