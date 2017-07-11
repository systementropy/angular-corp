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

    .controller('CorporateCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
        $scope.init = function(){
            $scope.fadeIn = parallaxHelper.createAnimator(0.15, 0, 1,-850);
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
