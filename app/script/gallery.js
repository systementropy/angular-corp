(function() {
    'use strict';

    angular.module('myApp.gallery', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/gallery', {
                templateUrl: '/view/gallery.html',
                controller: 'galleryCtrl'
            });
        }
    ])

    .controller('galleryCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.updateGallery = function(index) {
            if (index===0) {
                $scope.showGaly=false;
                $scope.showGal1=false;
                $scope.showGal2=false;
                $scope.showGal3=false;
                $scope.showGal4=false;
                $scope.showGal5=false;
                $scope.showGal6=false;
                $scope.showGal7=false;
            }else{
                $scope.showGaly=true;
                if (index==1) {
                    $scope.showGal1=true;
                }else if (index==2) {
                    $scope.showGal2=true;
                }else if (index==3) {
                    $scope.showGal3=true;
                }else if (index==4) {
                    $scope.showGal4=true;
                }else if (index==5) {
                    $scope.showGal5=true;
                }else if (index==6) {
                    $scope.showGal6=true;
                }else if (index==7) {
                    $scope.showGal7=true;
                }
            }
        };
        $scope.init = function(){
            $window.document.title='NETWORK18 | Gallery';
            $scope.showGaly =false;
            $rootScope.hideHeader=false;
            $scope.background = parallaxHelper.createAnimator(-0.5, 0, 100);
            $scope.foreground = parallaxHelper.createAnimator(0.7, 3000, -1500);
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
