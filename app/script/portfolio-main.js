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
	    	$scope.background = parallaxHelper.createAnimator(-0.4, 0, 0);
	    	$scope.foreground = parallaxHelper.createAnimator(0.4, 0, -1000);
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
