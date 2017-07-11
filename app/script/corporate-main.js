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
            $scope.transY = parallaxHelper.createAnimator(0.4, 10, -10,-950);
            $scope.transYL = parallaxHelper.createAnimator(0.4, 20, -10,-850);
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
