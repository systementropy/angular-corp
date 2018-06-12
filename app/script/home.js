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
                    {'img':"/images/resized/CNBC-TV18.gif",'href':"https://www.cnbctv18.com/live-tv/",'class':''},
                    {'img':"/images/resized/CNBC-Awaaz.gif",'href':"http://hindi.moneycontrol.com/tv/",'class':''},
                    {'img':"/images/resized/CNN-News-18.gif",'href':"http://gujarati.moneycontrol.com/tv/",'class':''},
                    {'img':"/images/resized/NEWS18-India.gif",'href':"https://hindi.news18.com/",'class':''},
                    {'img':"/images/portfolio/News18Urdu.png",'href':"http://urdu.news18.com/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Rajasthan.png",'href':"https://hindi.news18.com/livetv/news18-rajasthan/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18BiharJharkhand.png",'href':"https://hindi.news18.com/livetv/news18-bihar-jharkhand/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18MPChattisgarh.png",'href':"https://hindi.news18.com/livetv/news18-madhya-pradesh-chhattisgarh/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18UPandUK.png",'href':"https://hindi.news18.com/livetv/news18-uttar-pradesh-uttarakhand/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18TamilnaduLogo.png",'href':"https://tamil.news18.com/live-tv/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Bangla.png",'href':"https://bengali.news18.com/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18KannadaLogo.png",'href':"https://kannada.news18.com/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Gujarati.png",'href':"https://gujarati.news18.com/",'class':'portfolioItem'},
                    {'img':"/images/portfolio/News18Odiya.png",'href':"http://www.news18odia.com/",'class':'portfolioItem'},
                    {'img':"/images/resized/MonetControl.gif",'href':"http://www.moneycontrol.com/",'class':''},
                    {'img':"/images/resized/NEWS18-com.gif",'href':"https://news18.com/",'class':''},
                    {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
                    {'img':"/images/resized/CNBCTV18-Logo.png",'href':"https://www.cnbctv18.com/",'class':'portfolioItemCNBC'},
                    // {'img':"/images/resized/incom.gif",'href':"",'class':''},
                    {'img':"/images/resized/Toppers.gif",'href':"https://www.topperlearning.com/topper-tv",'class':''},
                    {'img':"/images/resized/Forbes.gif",'href':"http://www.forbesindia.com/",'class':''},
                    {'img':"/images/resized/BI.gif",'href':"http://www.betterinteriors.in/",'class':''},
                    {'img':"/images/resized/BP.gif",'href':"http://betterphotography.in/",'class':''},
                    {'img':"/images/resized/overdrive.gif",'href':"http://overdrive.in/",'class':''},
                    {'img':"/images/resized/colors.gif",'href':"http://www.colorstv.com/in/",'class':''},
                    {'img':"/images/resized/colors-Infinity.gif",'href':"https://www.viacom18.com/on-air/english/colors-infinity",'class':''},
                    {'img':"/images/resized/Colors_udiya.gif",'href':"https://www.viacom18.com/on-air/regional/colors-odia",'class':''},
                    {'img':"/images/resized/colors-Bangla.gif",'href':"https://www.viacom18.com/on-air/regional/colors-bangla",'class':''},
                    {'img':"/images/resized/colors-Gujarati.gif",'href':"https://www.viacom18.com/on-air/regional/colors-gujarati",'class':''},
                    {'img':"/images/resized/colors-Kannad.gif",'href':"https://www.viacom18.com/on-air/regional/colors-kannada",'class':''},
                    {'img':"/images/resized/Colors-Marathi.png",'href':"https://www.viacom18.com/on-air/regional/colors-marathi",'class':''},
                    {'img':"/images/resized/colors-SUPER.gif",'href':"https://www.viacom18.com/on-air/regional/colors-super",'class':''},
                    {'img':"/images/resized/rishtey.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                    {'img':"/images/resized/Rishtey-gold.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                    {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey-cineplex",'class':''},
                    {'img':"/images/resized/History-TV.gif",'href':"https://www.historyindia.com/",'class':''},
                    {'img':"/images/resized/fyi.gif",'href':"http://www.fyitv18.com/",'class':''},
                    {'img':"/images/resized/nicklodeon.gif",'href':"http://www.nickindia.com/",'class':''},
                    {'img':"/images/resized/sonic.gif",'href':"http://www.sonicgang.com/",'class':''},
                    {'img':"/images/resized/Nick-Jr.gif",'href':"http://www.nickjr.com/",'class':''},
                    {'img':"/images/resized/MTV.gif",'href':"http://www.mtvindia.com/",'class':''},
                    {'img':"/images/resized/MBeats.gif",'href':"http://www.mtvbeats.in/",'class':''},
                    {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
                    {'img':"/images/resized/VH1.gif",'href':"http://www.vh1.in/",'class':''},
                    {'img':"/images/resized/CC.gif",'href':"https://www.viacom18.com/on-air/english/comedy-central",'class':''},
                    {'img':"/images/resized/viacom.gif",'href':"https://www.viacom18.com/",'class':''},
                    {'img':"/images/resized/india_cast.png",'href':"http://www.indiacast.com/",'class':''}
                ];
                $scope.eventEnd=true;
            }
        };
        $scope.skipVid = function(){
            $scope.data=[
                {'img':"/images/resized/CNBC-TV18.gif",'href':"https://www.cnbctv18.com/live-tv/",'class':''},
                {'img':"/images/resized/CNBC-Awaaz.gif",'href':"http://hindi.moneycontrol.com/tv/",'class':''},
                {'img':"/images/resized/CNN-News-18.gif",'href':"http://gujarati.moneycontrol.com/tv/",'class':''},
                {'img':"/images/resized/NEWS18-India.gif",'href':"https://hindi.news18.com/",'class':''},
                {'img':"/images/portfolio/News18Urdu.png",'href':"http://urdu.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Rajasthan.png",'href':"https://hindi.news18.com/livetv/news18-rajasthan/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18BiharJharkhand.png",'href':"https://hindi.news18.com/livetv/news18-bihar-jharkhand/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18MPChattisgarh.png",'href':"https://hindi.news18.com/livetv/news18-madhya-pradesh-chhattisgarh/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18UPandUK.png",'href':"https://hindi.news18.com/livetv/news18-uttar-pradesh-uttarakhand/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18TamilnaduLogo.png",'href':"https://tamil.news18.com/live-tv/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Bangla.png",'href':"https://bengali.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18KannadaLogo.png",'href':"https://kannada.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Gujarati.png",'href':"https://gujarati.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Odiya.png",'href':"http://www.news18odia.com/",'class':'portfolioItem'},
                {'img':"/images/resized/MonetControl.gif",'href':"http://www.moneycontrol.com/",'class':''},
                {'img':"/images/resized/NEWS18-com.gif",'href':"https://news18.com/",'class':''},
                {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
                {'img':"/images/resized/CNBCTV18-Logo.png",'href':"https://www.cnbctv18.com/",'class':'portfolioItemCNBC'},
                // {'img':"/images/resized/incom.gif",'href':"",'class':''},
                {'img':"/images/resized/Toppers.gif",'href':"https://www.topperlearning.com/topper-tv",'class':''},
                {'img':"/images/resized/Forbes.gif",'href':"http://www.forbesindia.com/",'class':''},
                {'img':"/images/resized/BI.gif",'href':"http://www.betterinteriors.in/",'class':''},
                {'img':"/images/resized/BP.gif",'href':"http://betterphotography.in/",'class':''},
                {'img':"/images/resized/overdrive.gif",'href':"http://overdrive.in/",'class':''},
                {'img':"/images/resized/colors.gif",'href':"http://www.colorstv.com/in/",'class':''},
                {'img':"/images/resized/colors-Infinity.gif",'href':"https://www.viacom18.com/on-air/english/colors-infinity",'class':''},
                {'img':"/images/resized/Colors_udiya.gif",'href':"https://www.viacom18.com/on-air/regional/colors-odia",'class':''},
                {'img':"/images/resized/colors-Bangla.gif",'href':"https://www.viacom18.com/on-air/regional/colors-bangla",'class':''},
                {'img':"/images/resized/colors-Gujarati.gif",'href':"https://www.viacom18.com/on-air/regional/colors-gujarati",'class':''},
                {'img':"/images/resized/colors-Kannad.gif",'href':"https://www.viacom18.com/on-air/regional/colors-kannada",'class':''},
                {'img':"/images/resized/Colors-Marathi.png",'href':"https://www.viacom18.com/on-air/regional/colors-marathi",'class':''},
                {'img':"/images/resized/colors-SUPER.gif",'href':"https://www.viacom18.com/on-air/regional/colors-super",'class':''},
                {'img':"/images/resized/rishtey.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                {'img':"/images/resized/Rishtey-gold.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey-cineplex",'class':''},
                {'img':"/images/resized/History-TV.gif",'href':"https://www.historyindia.com/",'class':''},
                {'img':"/images/resized/fyi.gif",'href':"http://www.fyitv18.com/",'class':''},
                {'img':"/images/resized/nicklodeon.gif",'href':"http://www.nickindia.com/",'class':''},
                {'img':"/images/resized/sonic.gif",'href':"http://www.sonicgang.com/",'class':''},
                {'img':"/images/resized/Nick-Jr.gif",'href':"http://www.nickjr.com/",'class':''},
                {'img':"/images/resized/MTV.gif",'href':"http://www.mtvindia.com/",'class':''},
                {'img':"/images/resized/MBeats.gif",'href':"http://www.mtvbeats.in/",'class':''},
                {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
                {'img':"/images/resized/VH1.gif",'href':"http://www.vh1.in/",'class':''},
                {'img':"/images/resized/CC.gif",'href':"https://www.viacom18.com/on-air/english/comedy-central",'class':''},
                {'img':"/images/resized/viacom.gif",'href':"https://www.viacom18.com/",'class':''},
                {'img':"/images/resized/india_cast.png",'href':"http://www.indiacast.com/",'class':''}
            ];
            $scope.eventEnd=true;

        };
        function init(){
            $scope.eventEnd=false;
            $rootScope.hidefooter=true;
            $scope.slickConfig = {
                // slidesToShow: 10,
                // dots: true,
            };
            $scope.data=[
                {'img':"/images/resized/CNBC-TV18.gif",'href':"https://www.cnbctv18.com/live-tv/",'class':''},
                {'img':"/images/resized/CNBC-Awaaz.gif",'href':"http://hindi.moneycontrol.com/tv/",'class':''},
                {'img':"/images/resized/CNN-News-18.gif",'href':"http://gujarati.moneycontrol.com/tv/",'class':''},
                {'img':"/images/resized/NEWS18-India.gif",'href':"https://hindi.news18.com/",'class':''},
                {'img':"/images/portfolio/News18Urdu.png",'href':"http://urdu.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Rajasthan.png",'href':"https://hindi.news18.com/livetv/news18-rajasthan/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18BiharJharkhand.png",'href':"https://hindi.news18.com/livetv/news18-bihar-jharkhand/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18MPChattisgarh.png",'href':"https://hindi.news18.com/livetv/news18-madhya-pradesh-chhattisgarh/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18UPandUK.png",'href':"https://hindi.news18.com/livetv/news18-uttar-pradesh-uttarakhand/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18TamilnaduLogo.png",'href':"https://tamil.news18.com/live-tv/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Bangla.png",'href':"https://bengali.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18KannadaLogo.png",'href':"https://kannada.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Gujarati.png",'href':"https://gujarati.news18.com/",'class':'portfolioItem'},
                {'img':"/images/portfolio/News18Odiya.png",'href':"http://www.news18odia.com/",'class':'portfolioItem'},
                {'img':"/images/resized/MonetControl.gif",'href':"http://www.moneycontrol.com/",'class':''},
                {'img':"/images/resized/NEWS18-com.gif",'href':"https://news18.com/",'class':''},
                {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
                {'img':"/images/resized/CNBCTV18-Logo.png",'href':"https://www.cnbctv18.com/",'class':'portfolioItemCNBC'},
                // {'img':"/images/resized/incom.gif",'href':"",'class':''},
                {'img':"/images/resized/Toppers.gif",'href':"https://www.topperlearning.com/topper-tv",'class':''},
                {'img':"/images/resized/Forbes.gif",'href':"http://www.forbesindia.com/",'class':''},
                {'img':"/images/resized/BI.gif",'href':"http://www.betterinteriors.in/",'class':''},
                {'img':"/images/resized/BP.gif",'href':"http://betterphotography.in/",'class':''},
                {'img':"/images/resized/overdrive.gif",'href':"http://overdrive.in/",'class':''},
                {'img':"/images/resized/colors.gif",'href':"http://www.colorstv.com/in/",'class':''},
                {'img':"/images/resized/colors-Infinity.gif",'href':"https://www.viacom18.com/on-air/english/colors-infinity",'class':''},
                {'img':"/images/resized/Colors_udiya.gif",'href':"https://www.viacom18.com/on-air/regional/colors-odia",'class':''},
                {'img':"/images/resized/colors-Bangla.gif",'href':"https://www.viacom18.com/on-air/regional/colors-bangla",'class':''},
                {'img':"/images/resized/colors-Gujarati.gif",'href':"https://www.viacom18.com/on-air/regional/colors-gujarati",'class':''},
                {'img':"/images/resized/colors-Kannad.gif",'href':"https://www.viacom18.com/on-air/regional/colors-kannada",'class':''},
                {'img':"/images/resized/Colors-Marathi.png",'href':"https://www.viacom18.com/on-air/regional/colors-marathi",'class':''},
                {'img':"/images/resized/colors-SUPER.gif",'href':"https://www.viacom18.com/on-air/regional/colors-super",'class':''},
                {'img':"/images/resized/rishtey.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                {'img':"/images/resized/Rishtey-gold.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey",'class':''},
                {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"https://www.viacom18.com/on-air/mass/rishtey-cineplex",'class':''},
                {'img':"/images/resized/History-TV.gif",'href':"https://www.historyindia.com/",'class':''},
                {'img':"/images/resized/fyi.gif",'href':"http://www.fyitv18.com/",'class':''},
                {'img':"/images/resized/nicklodeon.gif",'href':"http://www.nickindia.com/",'class':''},
                {'img':"/images/resized/sonic.gif",'href':"http://www.sonicgang.com/",'class':''},
                {'img':"/images/resized/Nick-Jr.gif",'href':"http://www.nickjr.com/",'class':''},
                {'img':"/images/resized/MTV.gif",'href':"http://www.mtvindia.com/",'class':''},
                {'img':"/images/resized/MBeats.gif",'href':"http://www.mtvbeats.in/",'class':''},
                {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
                {'img':"/images/resized/VH1.gif",'href':"http://www.vh1.in/",'class':''},
                {'img':"/images/resized/CC.gif",'href':"https://www.viacom18.com/on-air/english/comedy-central",'class':''},
                {'img':"/images/resized/viacom.gif",'href':"https://www.viacom18.com/",'class':''},
                {'img':"/images/resized/india_cast.png",'href':"http://www.indiacast.com/",'class':''}
            ];
            var w = angular.element($window);
            var wWid=w.width();
            $scope.wWid=wWid;
            var wHig=w.height();
            if (wWid<1000) {
                $scope.hideHeader=false;
                $scope.skipVid();
                // $scope.eventEnd=true;
            }else{
                $rootScope.hideHeader=true;
            }
            $scope.theBestVideo = 'fEC3VqzRvwg';
            var w = angular.element($window);
            var wWid=w.width();
            var wHig=w.height();
            console.log(wHig/wWid);
            if (wHig/wWid>=0.5625) {
               // var vidHeight= $(window).height(); 
               // var vidWidth= (vidHeight*16)/9;
               // $('.videoBg').css('width', vidWidth);  
               $scope.pHigh=parseInt(wHig);
               $scope.pWid=parseInt((wWid*16)/9);
            }else{
               $scope.pWid=parseInt(w.width());
               $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
            }
            // $scope.pWid=parseInt(w.width());
            // $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));

            $scope.playerVars = {
                'autoplay': 1,
                'controls': 0, 
                'rel' : 0,
                'showinfo':0,
                'fs' : 0,
                'loop': 1,
                'mute':1
            };
            $scope.enableYT=true;
            $scope.$on('youtube.player.ended', function ($event, player) {
               player.seekTo(53.8);
               player.pauseVideo();
              //player.playVideo();
            });
        }
        
        init();

    }]);
}());
