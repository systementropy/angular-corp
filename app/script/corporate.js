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
            $scope.theBestVideo = 'IAPpsuhlxeI';
            var w = angular.element($window);
            var wWid=w.width();
            var wHig=(w.height()/0.71);
            $scope.pWid=parseInt(w.width());
            $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
            
            $scope.playerVars = {
                'autoplay': 1,
                'controls': 0, 
                'rel' : 0,
                'showinfo':0,
                'fs' : 0,
                'loop': 1,
                'mute':1
            };
            $scope.$on('youtube.player.ended', function ($event, player) {
                
                player.seekTo(0);
                player.playVideo();
            });
            $scope.enableYT=true;
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
