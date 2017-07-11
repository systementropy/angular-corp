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

    .controller('CorporateMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper) {

        $scope.init = function(){
            $scope.fadeIn = parallaxHelper.createAnimator(0.15, 0, 1,-850);
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
