(function() {
    'use strict';

    angular.module('myApp.career', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career', {
                templateUrl: '/view/career.html',
                controller: 'CareerCtrl'
            });
        }
    ])

    .controller('CareerCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', '$window',
    function($rootScope,$scope, $http,$timeout,$location,$window) {
        var init = function(){
            var w = angular.element($window);
            var wWid=w.width();
            $scope.wWid=wWid;
            var wHig=w.height();
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        init();
    }]);
}());
