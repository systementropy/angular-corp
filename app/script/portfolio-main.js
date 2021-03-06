(function() {
    'use strict';

    angular.module('myApp.portfolio-main', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/portfolio-main', {
                templateUrl: '/view/portfolio-main.html',
                controller: 'PortfolioMainCtrl'
            });
        }
    ])

    .controller('PortfolioMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
    	
	    $scope.slickConfig = {
	        centerMode: true,
			slidesToShow: 1,
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


	    function init(){
	    	$window.document.title='NETWORK18 | Portfolio';
	    	if ($(window).width()>600) {
	    		$scope.fadeIn = parallaxHelper.createAnimator(0.15, 0, 1,-850);
	    		$scope.background = parallaxHelper.createAnimator(-0.1, 0, 0,-400);
	    		$scope.background2 = parallaxHelper.createAnimator(0.1, -1000, 1000,-400);
	    		$scope.anmtXfrmLFade = parallaxHelper.createAnimator(0.4, 0, 1, -650);
	    		$scope.anmtXfrmL = parallaxHelper.createAnimator(0.4, -300, 100, -1400);
	    		$scope.anmtXfrmL3 = parallaxHelper.createAnimator(0.4, -300, 0, -1400);
	    		//$scope.anmtXfrmR = parallaxHelper.createAnimator(0.9, 100, -278, -1100);
	    		$scope.anmtXfrmR = parallaxHelper.createAnimator(0.9, 300, 0, -1100);
	    		$scope.anmtXfrmLFade2 = parallaxHelper.createAnimator(0.4, 0, 1, -650);
	    		$scope.foreground = parallaxHelper.createAnimator(0.1, 0, -1000,-400);
	    		$scope.foregroundPub = parallaxHelper.createAnimator(0.1, 0, 0,-200);
	    		$scope.foregroundvf = parallaxHelper.createAnimator(0.15, 100, -1000,-400);
	    		$scope.backgroundimg = parallaxHelper.createAnimator(-0.1, 0, 0,-400);
	    		$scope.foregroundimg = parallaxHelper.createAnimator(0.1, 1000, -1000,-400);
	    		$scope.foregroundimg2 = parallaxHelper.createAnimator(0.15, 1000, -1000,-400);
	    		$scope.foregroundimg3 = parallaxHelper.createAnimator(0.18, 1000, -1000,-400);
	    		$scope.foregroundimg4 = parallaxHelper.createAnimator(0.4, 0, -300,-700);
	    		$scope.foregroundimgz2m2 = parallaxHelper.createAnimator(0.4, 1000, -2000,-400);
	    		$scope.foregroundimgz2m = parallaxHelper.createAnimator(-0.05, 1000, -1000,-400);
	    		$scope.foregroundimgssc = parallaxHelper.createAnimator(0.1, -10, 100,-400);
	    		$scope.backgroundgroundimgm2z = parallaxHelper.createAnimator(0.05, -100, 100,-400);
	    		$scope.foregroundimgz2m2slow = parallaxHelper.createAnimator(0.3, 0, -1000,-1000);	
	    	}else {
	    		$scope.fadeIn = parallaxHelper.createAnimator(0,1,1,0);
	    		$scope.background = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.background2 = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.anmtXfrmLFade = parallaxHelper.createAnimator(0,1,1,0);
	    		$scope.anmtXfrmL = parallaxHelper.createAnimator(0.4, -100, 0, -1000);
	    		$scope.anmtXfrmL3 = parallaxHelper.createAnimator(0.4, -100, 0, -1000);
	    		//$scope.anmtXfrmR = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.anmtXfrmR = parallaxHelper.createAnimator(0.4, -100, 0, -1000);
	    		$scope.anmtXfrmLFade2 = parallaxHelper.createAnimator(0,1,1,0);
	    		$scope.foreground = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundvf = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.backgroundimg = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimg = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimg2 = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimg3 = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimg4 = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimgz2m2 = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimgz2m = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimgssc = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.backgroundgroundimgm2z = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.foregroundimgz2m2slow = parallaxHelper.createAnimator(0,0,0,0);
	    		$scope.transY = parallaxHelper.createAnimator(0.4, 10, -10,-750);
	    	}
			
	    	var show_elt = $location.absUrl().split('#')[1];
	    	$scope.showNews = false;
	    	
	    	if (show_elt == 'portfolioNews') {
	    		$scope.showNews = true;
	    		$scope.showElt = 'News';
	    		$scope.botVal='96px';
	    	}else if (show_elt == 'portfolioEntertainment') {
	    		$scope.showElt = 'Entertainment';
	    		$scope.botVal='73px';
	    	}else if (show_elt == 'portfolioDistribution') {
	    		$scope.showElt = 'Distribution';
	    		$scope.botVal='-19px';
	    	}else if (show_elt == 'portfolioMovies') {
	    		$scope.showElt = 'Movies';
	    		$scope.botVal='4px';
	    	}else if (show_elt == 'portfolioDigital') {
	    		$scope.showElt = 'Digital';
	    		$scope.botVal='50px';
	    	}else if (show_elt == 'portfolioPublishing') {
	    		$scope.showElt = 'Publishing';
	    		$scope.botVal='27px';
	    	}else{
	    		$scope.showElt = 'None';
	    	}


	    	$scope.theBestVideo0 = 'PbL2jIxydb8';
	    	$scope.theBestVideo1 = '4ExBg88Yhqc';
	    	$scope.theBestVideo2 = '8dKMEGiIZRE';
	    	$scope.theBestVideo3 = 'qcP4BzM-P_E';
	    	$scope.theBestVideo4 = 'R4hhPkMmH64';
	    	$scope.theBestVideo5 = 'J83935ZsfgE';
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
	    	$scope.$on('youtube.player.ended', function ($event, bestPlayer0) {
                
                bestPlayer0.seekTo(0);
                bestPlayer0.playVideo();
            });
            $scope.$on('youtube.player.ended', function ($event, bestPlayer1) {
                
                bestPlayer1.seekTo(0);
                bestPlayer1.playVideo();
            });
            $scope.$on('youtube.player.ended', function ($event, bestPlayer2) {
                
                bestPlayer2.seekTo(0);
                bestPlayer2.playVideo();
            });
            $scope.$on('youtube.player.ended', function ($event, bestPlayer3) {
                
                bestPlayer3.seekTo(0);
                bestPlayer3.playVideo();
            });
            $scope.$on('youtube.player.ended', function ($event, bestPlayer4) {
                
                bestPlayer4.seekTo(0);
                bestPlayer4.playVideo();
            });
            $scope.$on('youtube.player.ended', function ($event, bestPlayer5) {
                
                bestPlayer5.seekTo(0);
                bestPlayer5.playVideo();
            });
	    	$scope.enableYT=true;
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        }
        
        init();
    }]);
}());
