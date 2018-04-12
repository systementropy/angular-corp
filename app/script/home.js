(function() {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
            
        }
    ])

    .controller('HomeCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','$window', 
    function($rootScope,$scope, $http,$timeout,$location,$window) {
        $scope.callOnEnd = function(){
            if ($scope.eventEnd!==true) {
                $scope.data=[
                    {'img':"/images/resized/CNBC-TV18.gif",'href':"",'class':''},
                    {'img':"/images/resized/CNBC-Awaaz.gif",'href':"",'class':''},
                    {'img':"/images/resized/CNN-News-18.gif",'href':"",'class':''},
                    {'img':"/images/resized/NEWS18-India.gif",'href':"",'class':''},
                    {'img':"/images/portfolio/News18Urdu.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Rajasthan.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18BiharJharkhand.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18MPChattisgarh.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18UPandUK.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18TamilnaduLogo.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Bangla.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18KannadaLogo.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Gujarati.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Odiya.png",'href':"",'class':'portfolioItem'},
                    {'img':"/images/resized/MonetControl.gif",'href':"",'class':''},
                    {'img':"/images/resized/NEWS18-com.gif",'href':"",'class':''},
                    {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
                    {'img':"/images/resized/CNBCTV18-Logo.png",'href':"",'class':''},
                    {'img':"/images/resized/incom.gif",'href':"",'class':''},
                    {'img':"/images/resized/Toppers.gif",'href':"",'class':''},
                    {'img':"/images/resized/Forbes.gif",'href':"",'class':''},
                    {'img':"/images/resized/BI.gif",'href':"",'class':''},
                    {'img':"/images/resized/BP.gif",'href':"",'class':''},
                    {'img':"/images/resized/overdrive.gif",'href':"",'class':''},
                    {'img':"/images/resized/colors.gif",'href':"",'class':''},
                    {'img':"/images/resized/colors-Infinity.gif",'href':"",'class':''},
                    {'img':"/images/resized/Colors_udiya.gif",'href':"",'class':''},
                    {'img':"/images/resized/colors-Bangla.gif",'href':"",'class':''},
                    {'img':"/images/resized/colors-Gujarati.gif",'href':"",'class':''},
                    {'img':"/images/resized/colors-Kannad.gif",'href':"",'class':''},
                    {'img':"/images/resized/Colors-Marathi.png",'href':"",'class':''},
                    {'img':"/images/resized/colors-SUPER.gif",'href':"",'class':''},
                    {'img':"/images/resized/rishtey.gif",'href':"",'class':''},
                    {'img':"/images/resized/Rishtey-gold.gif",'href':"",'class':''},
                    {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"",'class':''},
                    {'img':"/images/resized/History-TV.gif",'href':"",'class':''},
                    {'img':"/images/resized/fyi.gif",'href':"",'class':''},
                    {'img':"/images/resized/nicklodeon.gif",'href':"",'class':''},
                    {'img':"/images/resized/sonic.gif",'href':"",'class':''},
                    {'img':"/images/resized/Nick-Jr.gif",'href':"",'class':''},
                    {'img':"/images/resized/MTV.gif",'href':"",'class':''},
                    {'img':"/images/resized/MBeats.gif",'href':"",'class':''},
                    {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
                    {'img':"/images/resized/VH1.gif",'href':"",'class':''},
                    {'img':"/images/resized/CC.gif",'href':"",'class':''},
                    {'img':"/images/resized/viacom.gif",'href':"",'class':''},
                    {'img':"/images/resized/india_cast.png",'href':"",'class':''}
                ];
                $scope.eventEnd=true;
            }
            

        };
        $scope.skipVid = function(){
            $scope.data=[
                {'img':"/images/resized/CNBC-TV18.gif",'href':"",'class':''},
                {'img':"/images/resized/CNBC-Awaaz.gif",'href':"",'class':''},
                {'img':"/images/resized/CNN-News-18.gif",'href':"",'class':''},
                {'img':"/images/resized/NEWS18-India.gif",'href':"",'class':''},
                {'img':"/images/portfolio/News18Urdu.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Rajasthan.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18BiharJharkhand.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18MPChattisgarh.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18UPandUK.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18TamilnaduLogo.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Bangla.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18KannadaLogo.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Gujarati.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Odiya.png",'href':"",'class':'portfolioItem'},
                {'img':"/images/resized/MonetControl.gif",'href':"",'class':''},
                {'img':"/images/resized/NEWS18-com.gif",'href':"",'class':''},
                {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
                {'img':"/images/resized/CNBCTV18-Logo.png",'href':"",'class':''},
                {'img':"/images/resized/incom.gif",'href':"",'class':''},
                {'img':"/images/resized/Toppers.gif",'href':"",'class':''},
                {'img':"/images/resized/Forbes.gif",'href':"",'class':''},
                {'img':"/images/resized/BI.gif",'href':"",'class':''},
                {'img':"/images/resized/BP.gif",'href':"",'class':''},
                {'img':"/images/resized/overdrive.gif",'href':"",'class':''},
                {'img':"/images/resized/colors.gif",'href':"",'class':''},
                {'img':"/images/resized/colors-Infinity.gif",'href':"",'class':''},
                {'img':"/images/resized/Colors_udiya.gif",'href':"",'class':''},
                {'img':"/images/resized/colors-Bangla.gif",'href':"",'class':''},
                {'img':"/images/resized/colors-Gujarati.gif",'href':"",'class':''},
                {'img':"/images/resized/colors-Kannad.gif",'href':"",'class':''},
                {'img':"/images/resized/Colors-Marathi.png",'href':"",'class':''},
                {'img':"/images/resized/colors-SUPER.gif",'href':"",'class':''},
                {'img':"/images/resized/rishtey.gif",'href':"",'class':''},
                {'img':"/images/resized/Rishtey-gold.gif",'href':"",'class':''},
                {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"",'class':''},
                {'img':"/images/resized/History-TV.gif",'href':"",'class':''},
                {'img':"/images/resized/fyi.gif",'href':"",'class':''},
                {'img':"/images/resized/nicklodeon.gif",'href':"",'class':''},
                {'img':"/images/resized/sonic.gif",'href':"",'class':''},
                {'img':"/images/resized/Nick-Jr.gif",'href':"",'class':''},
                {'img':"/images/resized/MTV.gif",'href':"",'class':''},
                {'img':"/images/resized/MBeats.gif",'href':"",'class':''},
                {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
                {'img':"/images/resized/VH1.gif",'href':"",'class':''},
                {'img':"/images/resized/CC.gif",'href':"",'class':''},
                {'img':"/images/resized/viacom.gif",'href':"",'class':''},
                {'img':"/images/resized/india_cast.png",'href':"",'class':''},
            ];
            $scope.eventEnd=true;

        };
        function init(){
            $scope.eventEnd=false;
            

            $scope.slickConfig = {
                slidesToShow: 10,
                dots: true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                ]
            };
            var w = angular.element($window);
            var wWid=w.width();
            var wHig=w.height();
            if (wWid<1000) {
                $scope.hideHeader=false;
                $scope.data=[
                    1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60
                ];
                $scope.eventEnd=true;
            }else{
                $rootScope.hideHeader=true;
            }
        }
        
        init();

    }]);
}());
