(function() {
    'use strict';

    angular.module('myApp.career', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career', {
                title: 'Career',
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
            $window.document.title='NETWORK18 | Career';
            $scope.theBestVideo = 'cvBDZiR2UuM';
            $http.get('/script/career-cat.json')
            .then(function(response) {
                $scope.roles=response.data;
            }, function(response) {
                console.log('Error'+response);
            });
            $scope.playerVars = {
                'autoplay': 0,
                'controls': 1, 
                'rel' : 0,
                'showinfo':0,
                'fs' : 0,
                'loop': 0,
                'mute':0
            };
            $scope.enableYT=true;
            // w.document.title='Career';
        };
        
        init();
    }]);
}());
