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

    .controller('PortfolioMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location', function($rootScope,$scope, $http,$timeout,$location) {
    	
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
	    	var show_elt = $location.absUrl().split('#')[1];
	    	if (show_elt == 'portfolioNews') {
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
