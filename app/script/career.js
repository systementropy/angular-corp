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
            $scope.breakpoints = [{
                breakpoint : 1000 ,settings: {
                    slidesToShow: 4,
                    slidesToScroll:2}
                },{
                breakpoint : 700 ,settings: {
                    slidesToShow: 3,
                    slidesToScroll:2}
                },{
                breakpoint : 500 ,settings: {
                    slidesToShow: 2,
                    slidesToScroll:2}
                }];
            var w = angular.element($window);
            var wWid=w.width();
            $scope.wWid=wWid;
            var wHig=w.height();
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
            $window.document.title='NETWORK18 | Career';
            $scope.theBestVideo = '-8Z9TTcl0xY';
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
            $scope.theBestVideo5 = 'boT3VN9W0y8';
            w = angular.element($window);
            wWid=w.width();
            wHig=(w.height()/0.71);
            $scope.pWid=parseInt(w.width());
            $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
            

            $scope.playerVars1 = {
                'autoplay': 1,
                'controls': 0, 
                'rel' : 0,
                'showinfo':0,
                'fs' : 0,
                'loop': 1,
                'mute':1
            };
            $scope.$on('youtube.player.ended', function ($event, bestPlayer1) {
                
                player.seekTo(0);
                player.playVideo();
            });
            $scope.enableYT=true;
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;

            
            $scope.enableSlick=true;
            // w.document.title='Career';
        };
        
        init();
    }]);
}());
