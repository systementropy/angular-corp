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

    .controller('PortfolioMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', 'parallaxHelper', 
    	function($rootScope,$scope, $http,$timeout,$location, parallaxHelper) {
    	
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


	    $scope.init = function(){
	    	$scope.fadeIn = parallaxHelper.createAnimator(0.15, 0, 1,-850);
	    	$scope.background = parallaxHelper.createAnimator(-0.1, 0, 0,-400);
	    	$scope.background2 = parallaxHelper.createAnimator(0.1, -1000, 1000,-400);
	    	$scope.anmtXfrmLFade = parallaxHelper.createAnimator(0.4, 0, 1, -650);
	    	$scope.anmtXfrmL = parallaxHelper.createAnimator(0.4, -300, 100, -1400);
	    	$scope.anmtXfrmR = parallaxHelper.createAnimator(0.9, 100, -278, -1100);
	    	$scope.anmtXfrmLFade2 = parallaxHelper.createAnimator(0.4, 0, 1, -650);
	    	$scope.foreground = parallaxHelper.createAnimator(0.1, 0, -1000,-400);
	    	$scope.foregroundvf = parallaxHelper.createAnimator(0.15, 100, -1000,-400);
	    	$scope.backgroundimg = parallaxHelper.createAnimator(-0.1, 0, 0,-400);
	    	$scope.foregroundimg = parallaxHelper.createAnimator(0.1, 1000, -1000,-400);
	    	$scope.foregroundimg2 = parallaxHelper.createAnimator(0.15, 1000, -1000,-400);
	    	$scope.foregroundimg3 = parallaxHelper.createAnimator(0.18, 1000, -1000,-400);
	    	$scope.foregroundimgz2m2 = parallaxHelper.createAnimator(0.4, 1000, -2000,-400);
	    	$scope.foregroundimgz2m = parallaxHelper.createAnimator(-0.05, 1000, -1000,-400);
	    	$scope.foregroundimgssc = parallaxHelper.createAnimator(0.1, -10, 100,-400);
	    	$scope.backgroundgroundimgm2z = parallaxHelper.createAnimator(0.05, -100, 100,-400);
	    	$scope.foregroundimgz2m2slow = parallaxHelper.createAnimator(0.2, 0, -1000,-1000);
	    	var show_elt = $location.absUrl().split('#')[1];
	    	$scope.showNews = false;
	    	if (show_elt == 'portfolioNews') {
	    		$scope.showNews = true;
	    		$scope.showElt = 'News';
	    	}else if (show_elt == 'portfolioEntertainment') {
	    		$scope.showElt = 'Entertainment';
	    	}else if (show_elt == 'portfolioDistribution') {
	    		$scope.showElt = 'Distribution';
	    	}else if (show_elt == 'portfolioMovies') {
	    		$scope.showElt = 'Movies';
	    	}else if (show_elt == 'portfolioDigital') {
	    		$scope.showElt = 'Digital';
	    	}else if (show_elt == 'portfolioPublishing') {
	    		$scope.showElt = 'Publishing';
	    	}
            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
