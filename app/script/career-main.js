(function() {
    'use strict';

    angular.module('myApp.careerMain', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-main', {
                templateUrl: '/view/career-main.html',
                controller: 'CareerMainCtrl'
            });
        }
    ])

    .controller('CareerMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.updShowAll = function(){
            $scope.jobs=$scope.eachJob;
            $scope.validParent={};
            for(var i=0; i<$scope.jobs.length; i++){
                var thisJob=$scope.jobs[i];
                if (!$scope.validParent[thisJob.Parent]) {
                    $scope.validParent[thisJob.Parent]=thisJob.Function;
                }
            }
            $scope.showAll = true;
        };
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
            $scope.theBestVideo5 = 'boT3VN9W0y8';
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
            $scope.url = $location.absUrl().split('?')[1];
            if ($scope.url!==undefined) {
                $scope.url_id = $scope.url.split('=')[1];
            }else {
                $scope.url_id='all';
            }

            $http.get('/script/career.json')
            .then(function(response) {
                $scope.eachJob=response.data;
                console.log($scope.eachJob);
                $scope.jobs=[];
                if ($scope.url_id=='all') {
                    $scope.updShowAll();
                }else{
                    for(var i=0; i<$scope.eachJob.length; i++){
                        if($scope.eachJob[i].Parent==$scope.url_id){
                            $scope.jobs.push($scope.eachJob[i]);
                        }
                    }    
                }
                

            }, function(response) {
                console.log('Error'+response);
            });
        };
        
        $scope.init();
    }]);
}());
